/**
 * @namespace events
 * @requires Event, events.EventDispatcher
 * @class IOErrorEvent
 * @author Yehia Shouman
 */

var IOErrorEvent=function (evtType,errorID,text){
	Event.call(this,evtType);
	this.errorID= errorID;
	this.text= text;
};
IOErrorEvent.prototype = new Event();
IOErrorEvent.constructor = IOErrorEvent;
IOErrorEvent.IO_ERROR="IO_ERROR";
IOErrorEvent.prototype.errorID = "";
IOErrorEvent.prototype.text ="Error Occurred";

