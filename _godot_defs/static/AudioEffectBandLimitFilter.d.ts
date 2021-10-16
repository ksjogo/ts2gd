
/**
 * Limits the frequencies in a range around the [member AudioEffectFilter.cutoff_hz] and allows frequencies outside of this range to pass.
 *
*/
declare class AudioEffectBandLimitFilter extends AudioEffectFilter {

  
/**
 * Limits the frequencies in a range around the [member AudioEffectFilter.cutoff_hz] and allows frequencies outside of this range to pass.
 *
*/
  "new"(): AudioEffectBandLimitFilter;
  static "new"(): AudioEffectBandLimitFilter;






  // connect<T extends SignalsOf<AudioEffectBandLimitFilter>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<AudioEffectBandLimitFilterSignals>>(signal: T, method: SignalFunction<AudioEffectBandLimitFilterSignals[T]>): number;




}

declare class AudioEffectBandLimitFilterSignals extends AudioEffectFilterSignals {
  
}
