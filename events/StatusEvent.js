/**
 * @namespace  events
* @requires events.Event
* @class StatusEvent
* @author Nermeen Shoman
*/
var StatusEvent=function(type, bubbles, cancelable, code, level){
	Event.call(this, type, bubbles, cancelable, code, level);
	//A description of the object's status.
	this.code = code;
	//The category of the message, such as "status", "warning" or "error".
	this.level = level;
	var ref=this;
	this.clone = function(){
		return new StatusEvent(ref.type, ref.bubbles, ref.cancelable, ref.code, ref.level);
	};
	this.toString=function(){
		return "[StatusEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" code="+ref.code+" level="+ref.level+"]";
	};
	this.__getClassType=function(){return "StatusEvent";};
};
StatusEvent.prototype= new Event();
StatusEvent.constructor = StatusEvent;
//Defines the value of the type property of a status event object.
StatusEvent.STATUS = "status";