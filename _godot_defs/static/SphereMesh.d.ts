
/**
 * Class representing a spherical [PrimitiveMesh].
 *
*/
declare class SphereMesh extends PrimitiveMesh {

  
/**
 * Class representing a spherical [PrimitiveMesh].
 *
*/
  "new"(): SphereMesh;
  static "new"(): SphereMesh;



/** Full height of the sphere. */
height: float;

/**
 * If `true`, a hemisphere is created rather than a full sphere.
 *
 * **Note:** To get a regular hemisphere, the height and radius of the sphere must be equal.
 *
*/
is_hemisphere: boolean;

/** Number of radial segments on the sphere. */
radial_segments: int;

/** Radius of sphere. */
radius: float;

/** Number of segments along the height of the sphere. */
rings: int;



  // connect<T extends SignalsOf<SphereMesh>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<SphereMeshSignals>>(signal: T, method: SignalFunction<SphereMeshSignals[T]>): number;




}

declare class SphereMeshSignals extends PrimitiveMeshSignals {
  
}
