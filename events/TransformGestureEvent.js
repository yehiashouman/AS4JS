/**
* @namespace  events
* @requires events.GestureEvent, events.Event
* @class TransformGestureEvent
* @author Nermeen Shoman
*/
var TransformGestureEvent=function(type, bubbles, cancelable, phase, localX, localY, scaleX, scaleY, rotation, offsetX, offsetY, ctrlKey, altKey, shiftKey, commandKey, controlKey){
	Event.call(this, type, bubbles, cancelable, phase, localX, localY, scaleX, scaleY, rotation, offsetX, offsetY, ctrlKey, altKey, shiftKey, commandKey, controlKey);
	//The horizontal translation of the display object, since the previous gesture event.
	this.offsetX = offsetX;
	//The vertical translation of the display object, since the previous gesture event.
	this.offsetY = offsetY;
	//The current rotation angle, in degrees, of the display object along the z-axis, since the previous gesture event.
	this.rotation = rotation;
	//The horizontal scale of the display object, since the previous gesture event.
	this.scaleX = scaleX;
	//The vertical scale of the display object, since the previous gesture event.
	this.scaleY = scaleY;

	var ref=this;
	this.clone = function(){
		return new TransformGestureEvent(ref.type, ref.bubbles, ref.cancelable,ref.phase, ref.localX, ref.localY, ref.scaleX, ref.scaleY, ref.rotation, ref.offsetX, ref.offsetY, ref.ctrlKey, ref.altKey, ref.shiftKey, ref.commandKey, ref.controlKey);
	};
	this.toString = function(){
		return "[TransformGestureEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+"]";
	};
	this.__getClassType=function(){return "TransformGestureEvent";};
};
TransformGestureEvent.prototype= new Event();
TransformGestureEvent.constructor = TransformGestureEvent;
//Defines the value of the type property of a GESTURE_PAN touch event object.
TransformGestureEvent.GESTURE_PAN = "gesturePan";
//Defines the value of the type property of a GESTURE_ROTATE touch event object.
TransformGestureEvent.GESTURE_ROTATE = "gestureRotate";
//Defines the value of the type property of a GESTURE_SWIPE touch event object.
TransformGestureEvent.GESTURE_SWIPE = "gestureSwipe";
//Defines the value of the type property of a GESTURE_ZOOM touch event object.
TransformGestureEvent.GESTURE_ZOOM = "gestureZoom";