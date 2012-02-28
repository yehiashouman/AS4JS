/**
 * @namespace  events
* @requires Event,events.TextEvent
* @class ErrorEvent
* @author Nermeen Shoman
*/
var ErrorEvent=function(type, bubbles, cancelable, text, id){
	Event.call(this,type, bubbles, cancelable, text, id);
	this.errorID = id;
	var ref=this;
	this.clone = function(){
		return new ErrorEvent(ref.type, ref.bubbles, ref.cancelable, ref.text, ref.id);
	};
	this.toString=function(){
		return "[ErrorEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" text="+ref.text+" id="+ref.id+"]";
	};
	this.__getClassType=function(){return "ErrorEvent";};
};
ErrorEvent.prototype= new Event();
ErrorEvent.constructor = ErrorEvent;
//Defines the value of the type property of an error event object.
ErrorEvent.ERROR = "error";
