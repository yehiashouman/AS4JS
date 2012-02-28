/**
 * @namespace  events
* @requires Event
* @class FocusEvent
* @author Nermeen Shoman
*/
var FocusEvent=function(type, bubbles, cancelable, relatedObject, shiftKey, keyCode, direction){
	Event.call(this,type, bubbles, cancelable, relatedObject, shiftKey, keyCode, direction);
	//this.__getClassType=function(){return "FocusEvent";};
	this.direction = direction;
	//Specifies direction of focus for a focusIn event.
	this.isRelatedObjectInaccessible = false;
	//The key code value of the key pressed to trigger a keyFocusChange event.
	this.keyCode = keyCode;
	//A reference to the complementary InteractiveObject instance that is affected by the change in focus.
	this.relatedObject = relatedObject;
	//Indicates whether the Shift key modifier is activated, in which case the value is true.
	this.shiftKey = shiftKey;
	
	var ref=this;
	this.clone = function(){
		return new FocusEvent(ref.type, ref.bubbles, ref.cancelable, ref.relatedObject, ref.shiftKey, ref.keyCode, ref.direction);
	};
	this.toString=function(){
		return "[FocusEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" relatedObject="+ref.relatedObject+" shiftKey="+ref.shiftKey+" keyCode="+ref.keyCode+
				" direction="+ref.direction+"]";
	};
	this.__getClassType=function(){return "FocusEvent";};
};
FocusEvent.prototype= new Event();
FocusEvent.constructor = FocusEvent;
//Defines the value of the type property of a focusIn event object.
FocusEvent.FOCUS_IN = "focusIn";
//Defines the value of the type property of a focusOut event object.
FocusEvent.FOCUS_OUT = "focusOut";
//Defines the value of the type property of a keyFocusChange event object.
FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
//Defines the value of the type property of a mouseFocusChange event object.
FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
