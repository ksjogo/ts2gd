
/**
 * `OuterProduct` treats the first parameter `c` as a column vector (matrix with one column) and the second parameter `r` as a row vector (matrix with one row) and does a linear algebraic matrix multiply `c * r`, yielding a matrix whose number of rows is the number of components in `c` and whose number of columns is the number of components in `r`.
 *
*/
declare class VisualShaderNodeOuterProduct extends VisualShaderNode {

  
/**
 * `OuterProduct` treats the first parameter `c` as a column vector (matrix with one column) and the second parameter `r` as a row vector (matrix with one row) and does a linear algebraic matrix multiply `c * r`, yielding a matrix whose number of rows is the number of components in `c` and whose number of columns is the number of components in `r`.
 *
*/
  "new"(): VisualShaderNodeOuterProduct;
  static "new"(): VisualShaderNodeOuterProduct;






  // connect<T extends SignalsOf<VisualShaderNodeOuterProduct>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<VisualShaderNodeOuterProductSignals>>(signal: T, method: SignalFunction<VisualShaderNodeOuterProductSignals[T]>): number;




}

declare class VisualShaderNodeOuterProductSignals extends VisualShaderNodeSignals {
  
}
