/**
 * @namespace  events
* @requires events.GestureEvent, events.Event
* @class PressAndTapGestureEvent
* @author Nermeen Shoman
*/
// TODO: there're 2 public properties undefined yet stageX and stageY
var PressAndTapGestureEvent=function(type, bubbles, cancelable, phase, localX, localY, tapLocalX, tapLocalY, ctrlKey, altKey, shiftKey, commandKey, controlKey){
	Event.call(this, type, bubbles, cancelable, phase, localX, localY, tapLocalX, tapLocalY, ctrlKey, altKey, shiftKey, commandKey, controlKey);
	//The horizontal coordinate at which the event occurred relative to the containing interactive object.
	this.tapLocalX = tapLocalX;
	//The vertical coordinate at which the event occurred relative to the containing interactive object.
	this.tapLocalY = tapLocalY;
	//The horizontal coordinate at which the tap touch occurred in global Stage coordinates.
	//this.tapStageX = ;
	// The vertical coordinate at which the tap touch occurred in global Stage coordinates.
	//this.tapStageY = ;
	
	var ref=this;
	this.clone = function(){
		return new PressAndTapGestureEvent(ref.type, ref.bubbles, ref.cancelable,ref.phase, ref.localX, ref.localY, ref.tapLocalX, ref.tapLocalY, ref.ctrlKey, ref.altKey, ref.shiftKey, ref.commandKey, ref.controlKey);
	};
	this.toString = function(){
		return "[PressAndTapGestureEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+"]";
	};
	this.__getClassType=function(){return "PressAndTapGestureEvent";};
};
PressAndTapGestureEvent.prototype= new Event();
PressAndTapGestureEvent.constructor = PressAndTapGestureEvent;
// Defines the value of the type property of a GESTURE_PRESS_AND_TAP touch event object.
PressAndTapGestureEvent.GESTURE_PRESS_AND_TAP = "gesturePressAndTap";