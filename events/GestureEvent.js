/**
 * @namespace  events
* @requires events.Event
* @class GestureEvent
* @author Nermeen Shoman
*/
// TODO there're 2 public properties are not defined yet stageX and stageY
var GestureEvent=function(type, bubbles, cancelable, phase, localX, localY, ctrlKey, altKey, shiftKey, commandKey, controlKey){
	Event.call(this,type, bubbles, cancelable, phase, localX, localY, ctrlKey, altKey, shiftKey, commandKey, controlKey);
	//Indicates whether the Alt key is active (true) or inactive (false).
	this.altKey = altKey;
	//Indicates whether the Control key is activated on Mac and whether the Ctrl key is activated on Windows or Linux.
	this.controlKey = controlKey;
	//On Windows or Linux, indicates whether the Ctrl key is active (true) or inactive (false).
	this.ctrlKey = ctrlKey;
	//The horizontal coordinate at which the event occurred relative to the containing sprite.
	this.localX = localX;
	//The vertical coordinate at which the event occurred relative to the containing sprite.
	this.localY = localY;
	//A value from the GesturePhase class indicating the progress of the touch gesture.
	this.phase = phase;
	//Indicates whether the Shift key is active (true) or inactive (false).
	this.shiftKey = shiftKey;
	//[read-only] The horizontal coordinate at which the event occurred in global Stage coordinates.
	//this.stageX = 
	//[read-only] The vertical coordinate at which the event occurred in global Stage coordinates.
	//this.stageY = 
	
	
	var ref=this;
	this.clone = function(){
		return new GestureEvent(ref.type, ref.bubbles, ref.cancelable,ref.phase, ref.localX, ref.localY, ref.ctrlKey, ref.altKey, ref.shiftKey, ref.commandKey, ref.controlKey);
	};
	this.toString = function(){
		return "[GestureEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+"]";
	};
	// Refreshes the Flash runtime display after processing the gesture event, in case the display list has been modified by the event handler.
	// TODO to be implemented later ..
	this.updateAfterEvent = function() {
		return;
	};
	this.__getClassType=function(){return "GestureEvent";};
};
GestureEvent.prototype= new Event();
GestureEvent.constructor = GestureEvent;
//Defines the value of the type property of a GESTURE_TWO_FINGER_TAP gesture event object.
GestureEvent.GESTURE_TWO_FINGER_TAP = "gestureTwoFingerTap";
