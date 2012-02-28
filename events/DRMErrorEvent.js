/**
 * @namespace  events
* @requires events.ErrorEvent, events.TextEvent, events.Event
* @class DRMErrorEvent
* @author Nermeen Shoman
*/
var DRMErrorEvent=function(type, bubbles, cancelable, inErrorDetail, inErrorCode, insubErrorID, inMetadata, inSystemUpdateNeeded, inDrmUpdateNeeded){
	Event.call(this, type, bubbles, cancelable, inErrorDetail, inErrorCode, insubErrorID, inMetadata, inSystemUpdateNeeded, inDrmUpdateNeeded);
	//The DRMContentData for the media file.
	this.contentData = inMetadata;
	//Indicates whether a DRM update is needed to play the DRM-protected content.
	this.drmUpdateNeeded = inDrmUpdateNeeded;
	//An error ID that indicates more detailed information about the underlying problem.
	this.subErrorID = insubErrorID;
	//Indicates whether a system update is needed to play the DRM-protected content.
	this.systemUpdateNeeded = inSystemUpdateNeeded;
	var ref=this;
	this.clone = function(){
		return new DRMErrorEvent(ref.type, ref.bubbles, ref.cancelable, ref.inErrorDetail, red.inErrorCode, ref.insubErrorID, ref.inMetadata, ref.inSystemUpdateNeeded, ref.inDrmUpdateNeeded);
	};
	this.toString = function(){
		return "[DRMErrorEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable +
				" inErrorDetail="+ref.inErrorDetail+" inErrorCode="+ref.inErrorCode+" insubErrorID="+ref.insubErrorID+
				" inMetadata="+ref.inMetadata+" inSystemUpdateNeeded="+ref.inSystemUpdateNeeded+" inDrmUpdateNeeded="+ref.inDrmUpdateNeeded+"]";
	};
	this.__getClassType=function(){return "DRMErrorEvent";};
};
DRMErrorEvent.prototype= new Event();
DRMErrorEvent.constructor = DRMErrorEvent;
//The DRMErrorEvent.DRM_ERROR constant defines the value of the type property of a drmError event object.
DRMErrorEvent.DRM_ERROR = "drmError";
DRMErrorEvent.DRM_LOAD_DEVICEID_ERROR = "drmLoadDeviceIdError";
