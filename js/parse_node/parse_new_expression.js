"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testColorNoNew = exports.testVectorNoNew = exports.testNormalNew = exports.parseNewExpression = void 0;
const parse_node_1 = require("../parse_node");
const parseNewExpression = (node, props) => {
    return parse_node_1.combine({
        parent: node,
        nodes: [node.expression, ...(node.arguments ?? [])],
        props,
        parsedStrings: (expr, ...args) => {
            if (expr === "Vector2" ||
                expr === "Vector3" ||
                expr === "Color" ||
                expr === "Vector2i" ||
                expr === "Vector3i" ||
                expr === "Rect2") {
                // Special cases that do not require .new
                return `${expr}(${args.join(", ")})`;
            }
            return `${expr}.new(${args.join(", ")})`;
        },
    });
};
exports.parseNewExpression = parseNewExpression;
exports.testNormalNew = {
    ts: `
let foo = new Node2D()
  `,
    expected: `
var _foo = Node2D.new()
  `,
};
exports.testVectorNoNew = {
    ts: `
let foo = new Vector2()
  `,
    expected: `
var _foo = Vector2()
  `,
};
exports.testColorNoNew = {
    ts: `
let foo = new Color()
  `,
    expected: `
var _foo = Color()
  `,
};
//# sourceMappingURL=parse_new_expression.js.map