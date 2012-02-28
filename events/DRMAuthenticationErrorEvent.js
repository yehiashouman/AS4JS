/**
 * @namespace  events
* @requires events.ErrorEvent, events.TextEvent, events.Event
* @class DRMAuthenticationErrorEvent
* @author Nermeen Shoman
*/
var DRMAuthenticationErrorEvent=function(type, bubbles, cancelable, inDetail, inErrorID, inSubErrorID, inServerURL, inDomain){
	Event.call(this, type, bubbles, cancelable, inDetail, inErrorID, inSubErrorID, inServerURL, inDomain);
	//The content domain of the media rights server.
	this.domain = inDomain;
	//The URL of the media rights server that rejected the authentication attempt.
	this.serverURL = inServerURL;
	//A more detailed error code.
	this.subErrorID = inSubErrorID;
	var ref=this;
	this.clone = function(){
		return new DRMAuthenticationErrorEvent(ref.type, ref.bubbles, ref.cancelable, ref.inDetail, ref.inErrorID, ref.inSubErrorID, ref.inServerURL, ref.inDomain);
	};
	this.__getClassType=function(){return "DRMAuthenticationErrorEvent";};
};
DRMAuthenticationErrorEvent.prototype= new Event();
DRMAuthenticationErrorEvent.constructor = DRMAuthenticationErrorEvent;
//The string constant to use for the authentication error event in the type parameter when adding and removing event listeners.
DRMAuthenticationErrorEvent.AUTHENTICATION_ERROR = "authenticationError";
