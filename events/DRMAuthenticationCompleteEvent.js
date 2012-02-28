/**
 * @namespace  events
* @requires events.Event
* @class DRMAuthenticationCompleteEvent
* @author Nermeen Shoman
*/
var DRMAuthenticationCompleteEvent=function(type, bubbles, cancelable, inServerURL, inDomain, inToken){
	Event.call(this,type, bubbles, cancelable, inServerURL, inDomain, inToken);
	//The content domain of the media rights server.
	this.domain = inDomain;
	//The URL of the media rights server.
	this.serverURL = inServerURL;
	//The authentication token.
	this.token = inToken;
	var ref=this;
	this.clone = function(){
		return new DRMAuthenticationErrorEvent(ref.type, ref.bubbles, ref.cancelable, ref.inServerURL, ref.inDomain, ref.inToken);
	};
	this.__getClassType=function(){return "DRMAuthenticationCompleteEvent";};
};
DRMAuthenticationCompleteEvent.prototype= new Event();
DRMAuthenticationCompleteEvent.constructor = DRMAuthenticationCompleteEvent;
// The string constant to use for the authentication complete event in the type parameter when adding and removing event listeners.
DRMAuthenticationCompleteEvent.AUTHENTICATION_COMPLETE = "authenticationComplete";