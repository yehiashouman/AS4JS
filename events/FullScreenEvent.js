/**
 * @namespace  events
* @requires events.ActivityEvent, events.Event
* @class FullScreenEvent
* @author Nermeen Shoman
*/
var FullScreenEvent=function(type, bubbles, cancelable, fullScreen){
	Event.call(type, bubbles, cancelable, fullScreen);
	//Indicates whether the Stage object is in full-screen mode (true) or not (false).
	this.fullScreen = fullScreen;
	var ref=this;
	this.clone = function(){
		return new FullScreenEvent(ref.type, ref.bubbles, ref.rcancelable,ref.fullScreen);
	};
	this.toString = function(){
		return "[FullScreenEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+" fullScreen="+ref.fullScreen+"]";
	};
	this.__getClassType=function(){return "FullScreenEvent";};
};
FullScreenEvent.prototype= new Event();
FullScreenEvent.constructor = FullScreenEvent;
//The FullScreenEvent.FULL_SCREEN constant defines the value of the type property of a fullScreen event object.
FullScreenEvent.FULL_SCREEN = "fullScreen";
