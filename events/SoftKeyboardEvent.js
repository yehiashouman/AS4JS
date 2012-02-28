/**
 * @namespace  events
* @requires events.Event
* @class SoftKeyboardEvent
* @author Nermeen Shoman
*/
var SoftKeyboardEvent=function(type, bubbles, cancelable, relatedObjectVal, triggerTypeVal){
	Event.call(this, type, bubbles, cancelable, relatedObjectVal, triggerTypeVal);
	//A reference to a display list object that is related to the event.
	this.relatedObject = relatedObjectVal;
	//Indicates whether the change in keyboard status has been triggered by an application (such as programmatic use of requestSoftKeyboard()) or by the user (such as selecting a text field).
	this.triggerType = triggerTypeVal;
	
	var ref=this;
	this.clone = function(){
		return new SoftKeyboardEvent(ref.type, ref.bubbles, ref.cancelable,ref.relatedObjectVal, ref.triggerTypeVal);
	};
	this.toString = function(){
		return "[SoftKeyboardEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
		" relatedObjectVal="+ref.relatedObjectVal+" triggerTypeVal="+ref.triggerTypeVal+"]";
	};
	this.__getClassType=function(){return "SoftKeyboardEvent";};
};
SoftKeyboardEvent.prototype= new Object();
SoftKeyboardEvent.constructor = SoftKeyboardEvent;
