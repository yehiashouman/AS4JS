/**
 * @namespace  events
* @requires events.Event
* @class MouseEvent
* @author Nermeen Shoman
*/
// TODO: there're 3 public properties undefined yet isRelatedObjectInaccessible, stageX and stageY
var MouseEvent=function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount){
	Event.call(this, type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount);
	//Indicates whether the Alt key is active (true) or inactive (false).
	this.altKey = altKey;
	//Indicates whether the primary mouse button is pressed (true) or not (false).
	this.buttonDown = buttonDown;
	//Indicates whether or not the mouse down event is part of a multi-click sequence.
	this.clickCount = clickCount;
	//Indicates whether the command key is activated (Mac only.) The value of property commandKey will have the same value as property ctrlKey on the Mac.
	this.commandKey = commandKey;
	//Indicates whether the Control key is activated on Mac and whether the Ctrl key is activated on Windows or Linux.
	this.controlKey = controlKey;
	//On Windows or Linux, indicates whether the Ctrl key is active (true) or inactive (false).
	this.ctrlKey = ctrlKey;
	//Indicates how many lines should be scrolled for each unit the user rotates the mouse wheel.
	this.delta = delta;
	//If true, the relatedObject property is set to null for reasons related to security sandboxes.
	this.isRelatedObjectInaccessible = false;
	//The horizontal coordinate at which the event occurred relative to the containing sprite.
	this.localX = localX;
	//The vertical coordinate at which the event occurred relative to the containing sprite.
	this.localY = localY;
	//A reference to a display list object that is related to the event.
	this.relatedObject = relatedObject;
	//Indicates whether the Shift key is active (true) or inactive (false).
	this.shiftKey = shiftKey;
	//The horizontal coordinate at which the event occurred in global Stage coordinates.
	//this.stageX 
    //The vertical coordinate at which the event occurred in global Stage coordinates.
	//this.stageY 
	var ref=this;
	this.clone = function(){
		return new MouseEvent(ref.type, ref.bubbles, ref.cancelable,ref.localX, ref.localY, ref.relatedObject, ref.ctrlKey, ref.altKey, ref.shiftKey, ref.buttonDown, ref.delta, ref.commandKey, ref.controlKey, ref.clickCount);
	};
	this.toString = function(){
		return "[MouseEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+"]";
	};
	// Refreshes the Flash runtime display after processing the gesture event, in case the display list has been modified by the event handler.
	// TODO to be implemented later ..
	this.updateAfterEvent = function() {
		return;
	};
	this.__getClassType=function(){return "MouseEvent";};
	
};
MouseEvent.prototype= new Event();
MouseEvent.constructor = MouseEvent;
//Defines the value of the type property of a click event object.
MouseEvent.CLICK = "click";
//The MouseEvent.CONTEXT_MENU constant defines the value of the type property of a contextMenu event object.
MouseEvent.CONTEXT_MENU = "contextMenu";
//Defines the value of the type property of a doubleClick event object.
MouseEvent.DOUBLE_CLICK = "doubleClick";
//Defines the value of the type property of a middleClick event object.
MouseEvent.MIDDLE_CLICK = "middleClick";
//Defines the value of the type property of a middleMouseDown event object.
MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown";
//Defines the value of the type property of a middleMouseUp event object.
MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp";
//Defines the value of the type property of a mouseDown event object.
MouseEvent.MOUSE_DOWN = "mouseDown";
//Defines the value of the type property of a mouseMove event object.
MouseEvent.MOUSE_MOVE = "mouseMove";
//Defines the value of the type property of a mouseOut event object.
MouseEvent.MOUSE_OUT = "mouseOut";
//Defines the value of the type property of a mouseOver event object.
MouseEvent.MOUSE_OVER = "mouseOver";
//Defines the value of the type property of a mouseUp event object.
MouseEvent.MOUSE_UP = "mouseUp";
//Defines the value of the type property of a mouseWheel event object.
MouseEvent.MOUSE_WHEEL = "mouseWheel";
//Defines the value of the type property of a rightClick event object.		
MouseEvent.RIGHT_CLICK = "rightClick";
//Defines the value of the type property of a rightMouseDown event object.
MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
//Defines the value of the type property of a rightMouseUp event object.
MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
// Defines the value of the type property of a rollOut event object.
MouseEvent.ROLL_OUT = "rollOut";
//Defines the value of the type property of a rollOver event object.
MouseEvent.ROLL_OVER = "rollOver";