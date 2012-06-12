/**
 * @namespace  events
* @requires events.Event
* @class KeyboardEvent
* @author Nermeen Shoman
*/
var KeyboardEvent=function(type, bubbles, cancelable, charCodeValue, keyCodeValue, keyLocationValue, ctrlKeyValue, altKeyValue, shiftKeyValue, controlKeyValue, commandKeyValue){
	Event.call(this,type, bubbles, cancelable);
	//Indicates whether the Alt key is active (true) or inactive (false) on Windows; indicates whether the Option key is active on Mac OS.
	this.altKey = altKeyValue;
	//Contains the character code value of the key pressed or released.
	this.charCode = charCodeValue;
	//Indicates whether the Command key is active (true) or inactive (false).
	this.commandKey = commandKeyValue;
	//Indicates whether the Control key is active (true) or inactive (false).
	this.controlKey = controlKeyValue;
	//On Windows and Linux, indicates whether the Ctrl key is active (true) or inactive (false); On Mac OS, indicates whether either the Ctrl key or the Command key is active.
	this.ctrlKey = ctrlKeyValue;
	//The key code value of the key pressed or released.
	this.keyCode =  keyCodeValue;
	//Indicates the location of the key on the keyboard.
	this.keyLocation = keyLocationValue;
	//Indicates whether the Shift key modifier is active (true) or inactive (false).
	this.shiftKey = shiftKeyValue;
	
	var ref=this;
	this.clone = function(){
		return new KeyboardEvent(ref.type, ref.bubbles, ref.cancelable,ref.charCodeValue, ref.keyCodeValue, ref.keyLocationValue, ref.ctrlKeyValue, ref.altKeyValue, ref.shiftKeyValue, ref.rcontrolKeyValue, ref.commandKeyValue);
	};
	this.toString = function(){
		return "[KeyboardEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+"" +
				" altKey=" +ref.altKey+
				" charCode=" +ref.charCode+
				" commandKey=" +ref.commandKey+
				" controlKey=" +ref.controlKey+
				" ctrlKey=" +ref.ctrlKey+
				" keyCode=" +ref.keyCode+
				" keyLocation=" +ref.keyLocation+
				" shiftKey=" +ref.shiftKey+
				
				"]";
	};
	// Indicates that the display should be rendered after processing of this event completes, if the display list has been modified 
	// TODO to be implemented later ..
	this.updateAfterEvent = function() {
		return;
	};
	this.__getClassType=function(){return "KeyboardEvent";};
};
KeyboardEvent.prototype= new Event();
KeyboardEvent.constructor = KeyboardEvent;
//The KeyboardEvent.KEY_DOWN constant defines the value of the type property of a keyDown event object.
KeyboardEvent.KEY_DOWN = "keyDown";
//The KeyboardEvent.KEY_UP constant defines the value of the type property of a keyUp event object.
KeyboardEvent.KEY_UP = "keyUp";