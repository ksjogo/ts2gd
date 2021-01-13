import ts, { SyntaxKind } from "typescript"
import { ParseState, combine } from "../parse_node"
import { ParseNodeType } from "../parse_node"
import { Test } from "../test"
import { getPreciseInitializerType } from "../ts_utils"

const getDestructuredNamesAndExpressions = (
  node: ts.BindingName,
  access: string = ""
): { id: ts.Identifier; access: string }[] => {
  if (node.kind === SyntaxKind.Identifier) {
    const id = node as ts.Identifier

    return [{ id, access: access }]
  } else if (node.kind === SyntaxKind.ObjectBindingPattern) {
    const obj = node as ts.ObjectBindingPattern

    return obj.elements
      .map((elem) =>
        getDestructuredNamesAndExpressions(
          elem.name,
          access + "." + elem.name.getText()
        )
      )
      .flat()
  } else if (node.kind === SyntaxKind.ArrayBindingPattern) {
    const obj = node as ts.ArrayBindingPattern

    return obj.elements
      .map((elem, i) => {
        if (elem.kind === SyntaxKind.BindingElement) {
          return getDestructuredNamesAndExpressions(
            elem.name,
            access + `[${i}]`
          )
        } else {
          throw new Error("I dont know what this is")
        }
      })
      .flat()
  }

  throw new Error(
    "Completely and totally impossible. You will never see this. I promise."
  )
}

export const parseVariableDeclaration = (
  node: ts.VariableDeclaration,
  props: ParseState
): ParseNodeType => {
  const type = getPreciseInitializerType(node.initializer)
  const usages = props.usages.get(node.name as ts.Identifier)
  const unused = usages?.uses.length === 0 ? "_" : ""
  const typeString = type ? `: ${type}` : ""

  if (node.name.kind === SyntaxKind.Identifier) {
    const decl = props.program
      .getTypeChecker()
      .getTypeAtLocation(node)
      .getSymbol()?.declarations[0]

    const isAutoload =
      props.isAutoload &&
      decl?.kind === SyntaxKind.ClassDeclaration &&
      decl.getSourceFile() === node.getSourceFile() &&
      node.parent.parent.parent.kind === SyntaxKind.SourceFile

    if (isAutoload) {
      return combine({
        parent: node,
        nodes: [node.name, node.initializer],
        props,
        content: (nodeName, init) => ``,
      })
    }
  }

  if (node.name.kind === SyntaxKind.Identifier) {
    props.scope.addName(node.name)

    return combine({
      parent: node,
      nodes: [node.name, node.initializer],
      props,
      content: (nodeName, init) =>
        `var ${unused}${nodeName}${typeString}${init ? " = " + init : ""}`,
    })
  } else {
    let destructuredNames = getDestructuredNamesAndExpressions(node.name)

    for (const { id } of destructuredNames) {
      props.scope.addName(id)
    }

    const genName = props.scope.createName()

    return combine({
      parent: node,
      nodes: [node.initializer, ...destructuredNames.map((d) => d.id)],
      props,
      content: (initializer, ...nodes) => {
        return `
var ${genName} = ${initializer}
${nodes
  .map((node, i) => `${node} = ${genName}${destructuredNames[i].access}`)
  .join("\n")}
`
      },
    })
    // props.scope.addName(node.name)
  }
}

export const testDestructure: Test = {
  ts: `
let [a, [b, c]] = [1, [2, 3]]
  `,
  expected: `
var __gen = [1, [2, 3]]
a = __gen[0]
b = __gen[1][0]
c = __gen[1][1]
  `,
}

export const testDestructure2: Test = {
  ts: `
let [a] = [1]
let [b] = [1]
  `,
  expected: `
var __gen = [1]
a = __gen[0]
var __gen1 = [1]
b = __gen1[0]
  `,
}

export const testDestructure3: Test = {
  ts: `
let { a, b } = { a: 1, b: 2 }
  `,
  expected: `
var __gen = { "a": 1, "b": 2 }
a = __gen.a
b = __gen.b
  `,
}

export const testNormalVariableDeclaration: Test = {
  ts: `
let x = 1  
let y = 'a'
  `,
  expected: `
var _x: int = 1  
var _y = "a"
  `,
}

export const testAutoloadVariableDeclaration: Test = {
  isAutoload: true,
  ts: `
export class Blah {

}

const x: Blah = new Blah();
  `,
  expected: `
  `,
}

export const testClassNameWithoutAutoload: Test = {
  ts: `
export class Blah {

}

const x: Blah = new Blah();
  `,
  expected: `
class_name Blah

var _x = Blah()
  `,
}

export const testAutoloadVariableDeclaration2: Test = {
  isAutoload: true,
  ts: `
export class Blah {

}

const x: Blah = new Blah();
  `,
  expected: `
  `,
}

export const testAutoloadVariableDeclaration3: Test = {
  isAutoload: true,

  ts: `
export class Blah {
  test() {
    const blah: Blah = new Blah();
  }
}

const x: Blah = new Blah();
  `,
  expected: `
func test():
  var _blah = Blah()
  `,
}
