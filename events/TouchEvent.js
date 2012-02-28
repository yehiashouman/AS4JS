/**
 * @namespace  events
* @requires events.Event
* @class TouchEvent
* @author Nermeen Shoman
*/
// TODO: there're 3 public properties undefined yet isRelatedObjectInaccessible, stageX and stageY
var TouchEvent=function(type, bubbles, cancelable, touchPointID, isPrimaryTouchPoint, localX, localY, sizeX, sizeY, pressure, relatedObject, ctrlKey, altKey, shiftKey, commandKey, controlKey, timestamp, touchIntent, samples, isTouchPointCanceled){
	Event.call(this,type, bubbles, cancelable, touchPointID, isPrimaryTouchPoint, localX, localY, sizeX, sizeY, pressure, relatedObject, ctrlKey, altKey, shiftKey, commandKey, controlKey, timestamp, touchIntent, samples, isTouchPointCanceled);
	//Indicates whether the Alt key is active (true) or inactive (false).
	this.altKey = altKey;
	//Indicates whether the command key is activated (Mac only).	
	this.commandKey = commandKey;
	//Indicates whether the Control key is activated on Mac and whether the Ctrl key is activated on Windows or Linux.
	this.controlKey = controlKey;
	//On Windows or Linux, indicates whether the Ctrl key is active (true) or inactive (false).
	this.ctrlKey = ctrlKey;
	//Indicates whether the first point of contact is mapped to mouse events.
	this.isPrimaryTouchPoint = isPrimaryTouchPoint;
	//If true, the relatedObject property is set to null for reasons related to security sandboxes.
	this.isRelatedObjectInaccessible = false;
	//The horizontal coordinate at which the event occurred relative to the containing sprite.
	this.localX = localX;
	//The vertical coordinate at which the event occurred relative to the containing sprite.
	this.localY = localY;
	//A value between 0.0 and 1.0 indicating force of the contact with the device.
	this.pressure = pressure;
	//A reference to a display list object that is related to the event.
	this.relatedObject = relatedObject;
	//Indicates whether the Shift key is active (true) or inactive (false).
	this.shiftKey = shiftKey;
	//Width of the contact area.
	this.sizeX = sizeX;
	//Height of the contact area.
	this.sizeY = sizeY;
	//[read-only] The horizontal coordinate at which the event occurred in global Stage coordinates.
	//this.stageX = 
	//[read-only] The vertical coordinate at which the event occurred in global Stage coordinates.
	//this.stageY =
	//A unique identification number (as an int) assigned to the touch point.
	this.touchPointID = touchPointID;
	var ref=this;
	this.clone = function(){
		return new TouchEvent(ref.type, ref.bubbles, ref.cancelable, ref.touchPointID, ref.isPrimaryTouchPoint, ref.localX, ref.localY, ref.sizeX, ref.sizeY, ref.pressure, ref.relatedObject, ref.ctrlKey, ref.altKey, ref.shiftKey, ref.rcommandKey, ref.controlKey, ref.timestamp, ref.touchIntent, ref.samples, ref.isTouchPointCanceled);
	};
	this.toString = function(){
		return "[TouchEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+"]";
	};
	// Instructs Flash Player or Adobe AIR to render after processing of this event completes, if the display list has been modified.
	// TODO to be implemented later ..
	this.updateAfterEvent = function() {
		return;
	};
	
	this.__getClassType=function(){return "TouchEvent";};
};
TouchEvent.prototype= new Event();
TouchEvent.constructor = TouchEvent;
//Defines the value of the type property of a TOUCH_BEGIN touch event object.
TouchEvent.TOUCH_BEGIN = "touchBegin";
//Defines the value of the type property of a TOUCH_END touch event object.		
TouchEvent.TOUCH_END = "touchEnd";
//Defines the value of the type property of a TOUCH_MOVE touch event object.		
TouchEvent.TOUCH_MOVE = "touchMove";
//Defines the value of the type property of a TOUCH_OUT touch event object.
TouchEvent.TOUCH_OUT = "touchOut";
// Defines the value of the type property of a TOUCH_OVER touch event object.
TouchEvent.TOUCH_OVER = "touchOver";
// Defines the value of the type property of a TOUCH_ROLL_OUT touch event object.
TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
//Defines the value of the type property of a TOUCH_ROLL_OVER touch event object.		
TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
//Defines the value of the type property of a TOUCH_TAP touch event object.
TouchEvent.TOUCH_TAP = "touchTap";