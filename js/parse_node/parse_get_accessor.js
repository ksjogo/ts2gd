"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testGet = exports.parseGetAccessor = void 0;
const parse_node_1 = require("../parse_node");
const parseGetAccessor = (node, props) => {
    return parse_node_1.combine({
        parent: node,
        nodes: [node.name, node.body, ...node.parameters],
        addIndent: true,
        props,
        parsedStrings: (name, body, ...params) => `
func ${name}_get(${params}):
  ${body || "pass"}
`,
    });
};
exports.parseGetAccessor = parseGetAccessor;
exports.testGet = {
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
};
//# sourceMappingURL=parse_get_accessor.js.map