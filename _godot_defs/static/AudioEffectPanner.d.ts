
/**
 * Determines how much of an audio signal is sent to the left and right buses.
 *
*/
declare class AudioEffectPanner extends AudioEffect {

  
/**
 * Determines how much of an audio signal is sent to the left and right buses.
 *
*/
  "new"(): AudioEffectPanner;
  static "new"(): AudioEffectPanner;



/** Pan position. Value can range from -1 (fully left) to 1 (fully right). */
pan: float;



  // connect<T extends SignalsOf<AudioEffectPanner>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<AudioEffectPannerSignals>>(signal: T, method: SignalFunction<AudioEffectPannerSignals[T]>): number;




}

declare class AudioEffectPannerSignals extends AudioEffectSignals {
  
}
