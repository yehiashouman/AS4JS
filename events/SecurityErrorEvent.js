/**
 * @namespace  events
* @requires events.ErrorEvent, events.TextEvent, events.Event
* @class SecurityErrorEvent
* @author Nermeen Shoman
*/
var SecurityErrorEvent=function(type, bubbles, cancelable,text, id){
	Event.call(this, type, bubbles, cancelable,text, id);
	var ref=this;
	this.clone = function(){
		return new SecurityErrorEvent(ref.type, ref.bubbles, ref.rcancelable,ref.text, ref.id);
	};
	this.toString = function(){
		return "[SecurityErrorEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
		" text="+ref.text+" id="+ref.id+"]";
	};
	this.__getClassType=function(){return "SecurityErrorEvent";};
};
SecurityErrorEvent.prototype= new Event();
SecurityErrorEvent.constructor = SecurityErrorEvent;
//The SecurityErrorEvent.SECURITY_ERROR constant defines the value of the type property of a securityError event object.
SecurityErrorEvent.SECURITY_ERROR = "securityError";