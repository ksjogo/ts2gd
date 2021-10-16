
/**
 * Takes a 4x4 transform matrix and decomposes it into four `vec3` values, one from each row of the matrix.
 *
*/
declare class VisualShaderNodeTransformDecompose extends VisualShaderNode {

  
/**
 * Takes a 4x4 transform matrix and decomposes it into four `vec3` values, one from each row of the matrix.
 *
*/
  "new"(): VisualShaderNodeTransformDecompose;
  static "new"(): VisualShaderNodeTransformDecompose;






  // connect<T extends SignalsOf<VisualShaderNodeTransformDecompose>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<VisualShaderNodeTransformDecomposeSignals>>(signal: T, method: SignalFunction<VisualShaderNodeTransformDecomposeSignals[T]>): number;




}

declare class VisualShaderNodeTransformDecomposeSignals extends VisualShaderNodeSignals {
  
}
