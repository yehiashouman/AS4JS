/**
 * @namespace  events
* @requires events.Event
* @class VideoEvent
* @author Nermeen Shoman
*/
var VideoEvent=function(type, bubbles, cancelable, status){
	Event.call(type, bubbles, cancelable, status);
	//Returns the rendering status of the VideoEvent object.
	this.status = status;
	this.__getClassType=function(){return "VideoEvent";};
};
VideoEvent.prototype= new Event();
VideoEvent.constructor = VideoEvent;

VideoEvent.codecInfo = "Codec Info String";
//Defines the value of the type property of a renderState event object.
VideoEvent.RENDER_STATE  = "renderState";
//For internal use only.
VideoEvent.RENDER_STATUS_ACCELERATED = "accelerated";
//For internal use only.
VideoEvent.RENDER_STATUS_SOFTWARE = "software";
//For internal use only.
VideoEvent.RENDER_STATUS_UNAVAILABLE = "unavailable";
