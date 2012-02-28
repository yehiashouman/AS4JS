/**
 * @namespace  events
* @requires events.Event
* @class StageVideoEvent
* @author Nermeen Shoman
*/
var StageVideoEvent=function(type, bubbles, cancelable, status, colorSpace){
	Event.call(this, type, bubbles, cancelable, status, colorSpace);
	// The color space used by the video being displayed in the StageVideo object.
	this.colorSpace = colorSpace;
	//The status of the StageVideo object.
	this.status = status;
	this.__getClassType=function(){return "StageVideoEvent";};
};
StageVideoEvent.prototype= new Event();
StageVideoEvent.constructor = StageVideoEvent;
StageVideoEvent.codecInfo = "codecInfoString";
//The StageVideoEvent.RENDER_STATE constant defines the value of the type property of a renderState event object.
StageVideoEvent.RENDER_STATE = "renderState";
