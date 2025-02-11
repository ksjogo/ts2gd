import ts from "typescript"
import { ParseState, combine } from "../parse_node"

import { ParseNodeType } from "../parse_node"
import { Test } from "../tests/test"

export const parseGetAccessor = (
  node: ts.GetAccessorDeclaration,
  props: ParseState
): ParseNodeType => {
  return combine({
    parent: node,
    nodes: [node.name, node.body, ...node.parameters],
    addIndent: true,
    props,
    parsedStrings: (name, body, ...params) => `
func ${name}_get(${params}):
  ${body || "pass"}
`,
  })
}

export const testGet: Test = {
  ts: `
class Foo {
  _x;
  get x() { return this._x; }
}
  `,
  expected: `
class_name Foo
var x setget , x_get
var _x
func x_get():
  return self._x
  `,
}
