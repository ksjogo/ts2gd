
/**
*/
declare class SkinReference extends Reference {

  
/**
*/
  "new"(): SkinReference;
  static "new"(): SkinReference;




/** No documentation provided. */
get_skeleton(): RID;

/** No documentation provided. */
get_skin(): Skin;

  // connect<T extends SignalsOf<SkinReference>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<SkinReferenceSignals>>(signal: T, method: SignalFunction<SkinReferenceSignals[T]>): number;




}

declare class SkinReferenceSignals extends ReferenceSignals {
  
}
