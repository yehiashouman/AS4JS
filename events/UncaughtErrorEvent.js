/**
 * @namespace  events
* @requires events.ErrorEvent, events.TextEvent,events.Event
* @class UncaughtErrorEvent
* @author Nermeen Shoman
*/
var UncaughtErrorEvent=function(type, bubbles, cancelable, error_in){
	Event.call(this,type, bubbles, cancelable, error_in);
	// The error object associated with the uncaught error.
	this.error = error_in;
	var ref=this;
	this.clone = function(){
		return new UncaughtErrorEvent(ref.type, ref.bubbles, ref.cancelable, ref.error_in);
	};
	this.toString=function(){
		return "[UncaughtErrorEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" error_in="+ref.error_in+"]";
	};
	this.__getClassType=function(){return "UncaughtErrorEvent";};
};
UncaughtErrorEvent.prototype= new Event();
UncaughtErrorEvent.constructor = UncaughtErrorEvent;
//Defines the value of the type property of an uncaughtError event object.
UncaughtErrorEvent.UNCAUGHT_ERROR = "uncaughtError";
