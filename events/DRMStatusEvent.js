/**
 * @namespace  events
* @requires events.Event
* @class DRMStatusEvent
* @author Nermeen Shoman
*/
var DRMStatusEvent=function(type, bubbles, cancelable, inMetadata, inVoucher, inLocal){
	Event.call(this, type, bubbles, cancelable, inMetadata, inVoucher, inLocal);
	this.contentData = inMetadata;
	this.inVoucher = inVoucher;
	this.inLocal = inLocal;
	this.__getClassType=function(){return "DRMStatusEvent";};
};
DRMStatusEvent.prototype= new Event();
DRMStatusEvent.constructor = DRMStatusEvent;
//The DRMStatusEvent.DRM_STATUS constant defines the value of the type property of a drmStatus event object.
DRMStatusEvent.DRM_STATUS = "drmStatus";
