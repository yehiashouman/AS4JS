
/**
 * @namespace events
 * @requires Event, events.EventDispatcher
 * @class ProgressEvent
 * @author Yehia Shouman
 */
var ProgressEvent=function (evtType,bubbles,cancelable, bytesLoaded,bytesTotal){
	Event.call(this,evtType,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
ProgressEvent.prototype = new Event();
ProgressEvent.constructor = ProgressEvent;
ProgressEvent.prototype.bytesLoaded = 0;
ProgressEvent.prototype.bytesTotal = 0;
ProgressEvent.PROGRESS="PROGRESS";