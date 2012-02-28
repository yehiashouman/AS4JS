/**
 * @namespace events
 * @requires Event, events.EventDispatcher
 * @class HTTPStatusEvent
 * @author Yehia Shouman
 */

var HTTPStatusEvent=function (evtType,status,responseURL,responseHeaders){
	Event.call(this,evtType);
	this.status = status;
	this.responseURL= responseURL;
	this.reponseHeaders= responseHeaders;
};
HTTPStatusEvent.prototype = new Event();
HTTPStatusEvent.constructor = HTTPStatusEvent;
HTTPStatusEvent.HTTP_STATUS="HTTP_STATUS";
HTTPStatusEvent.prototype.responseURL = "";
HTTPStatusEvent.prototype.responseHeaders =[];
HTTPStatusEvent.prototype.status =null;
