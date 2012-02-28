/**
 * @namespace  events
* @requires events.TextEvent , events.Event
* @class IMEEvent
* @author Nermeen Shoman
*/
var IMEEvent=function(type, bubbles, cancelable, text, imeClient){
	Event.call(this, type, bubbles, cancelable, text, imeClient);
	//Specifies an object that implements the IMEClient interface.
	this.imeClient = imeClient;
	var ref=this;
	this.clone = function(){
		return new IMEEvent(ref.type, ref.bubbles, ref.rcancelable,ref.text, ref.imeClient);
	};
	this.toString = function(){
		return "[IMEEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+"]";
	};
	this.__getClassType=function(){return "IMEEvent";};
};
IMEEvent.prototype= new Event();
IMEEvent.constructor = IMEEvent;
//Defines the value of the type property of an imeComposition event object.
IMEEvent.IME_COMPOSITION = "imeComposition";		
//To handle IME text input, the receiver must set the imeClient field of the event to an object that implements the IIMEClient interface
IMEEvent.IME_START_COMPOSITION = "imeStartComposition";
