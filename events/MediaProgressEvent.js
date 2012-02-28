/**
 * @namespace events
 * @requires Event, events.EventDispatcher
 * @class MediaProgressEvent
 * @author Yehia Shouman
 */

var MediaProgressEvent=function (evtType,progress,total){
	Event.call(this,evtType);
	this.progress = progress;
	this.total = total;
};
MediaProgressEvent.prototype = new Event();
MediaProgressEvent.constructor = MediaProgressEvent;
MediaProgressEvent.prototype.progress = 0;
MediaProgressEvent.prototype.total = 0;
MediaProgressEvent.EVT_PROGRESS="EVT_MediaPROGRESS";