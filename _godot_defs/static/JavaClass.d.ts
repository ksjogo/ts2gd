
/**
*/
declare class JavaClass extends Reference {

  
/**
*/
  "new"(): JavaClass;
  static "new"(): JavaClass;






  // connect<T extends SignalsOf<JavaClass>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<JavaClassSignals>>(signal: T, method: SignalFunction<JavaClassSignals[T]>): number;




}

declare class JavaClassSignals extends ReferenceSignals {
  
}
