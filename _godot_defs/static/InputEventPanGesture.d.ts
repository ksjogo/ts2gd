
/**
*/
declare class InputEventPanGesture extends InputEventGesture {

  
/**
*/
  "new"(): InputEventPanGesture;
  static "new"(): InputEventPanGesture;






  // connect<T extends SignalsOf<InputEventPanGesture>, U extends Node>(signal: T, node: U, method: keyof U): number;
  connect<T extends SignalsOf<InputEventPanGestureSignals>>(signal: T, method: SignalFunction<InputEventPanGestureSignals[T]>): number;




}

declare class InputEventPanGestureSignals extends InputEventGestureSignals {
  
}
