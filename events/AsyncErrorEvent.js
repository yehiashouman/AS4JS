/**
 * @namespace  events
* @requires Event,events.ErrorEvent,Event.TextEvent
* @class AsyncErrorEvent
* @author Nermeen Shoman
*/
	
var AsyncErrorEvent=function(type, bubbles, cancelable, text, error){

	Event.call(this,type, bubbles, cancelable, text, error);
	this.error = error;
	var ref=this;
	this.clone = function(){
		return new AsyncErrorEvent(ref.type, ref.bubbles, ref.cancelable, ref.text, ref.error);
	};
	this.toString=function(){
		return "[AsyncErrorEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" text="+ref.text+" error="+ref.error+"]";
	};
	this.__getClassType=function(){return "AsyncErrorEvent";};
};
AsyncErrorEvent.prototype= new Event();
AsyncErrorEvent.constructor = AsyncErrorEvent;
//The AsyncErrorEvent.ASYNC_ERROR constant defines the value of the type property of an asyncError e
AsyncErrorEvent.ASYNC_ERROR = "asyncError";
