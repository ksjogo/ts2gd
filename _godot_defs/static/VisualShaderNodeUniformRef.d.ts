
/**
 * Creating a reference to a [VisualShaderNodeUniform] allows you to reuse this uniform in different shaders or shader stages easily.
 *
*/
declare class VisualShaderNodeUniformRef extends VisualShaderNode {

  
/**
 * Creating a reference to a [VisualShaderNodeUniform] allows you to reuse this uniform in different shaders or shader stages easily.
 *
*/
  "new"(): VisualShaderNodeUniformRef;
  static "new"(): VisualShaderNodeUniformRef;



/** The name of the uniform which this reference points to. */
uniform_name: string;



  // connect<T extends SignalsOf<VisualShaderNodeUniformRef>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<VisualShaderNodeUniformRefSignals>>(signal: T, method: SignalFunction<VisualShaderNodeUniformRefSignals[T]>): number;




}

declare class VisualShaderNodeUniformRefSignals extends VisualShaderNodeSignals {
  
}
