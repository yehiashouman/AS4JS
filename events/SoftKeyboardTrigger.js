/**
 * @namespace events 
* @requires 
* @class SoftKeyboardTrigger
* @author Nermeen Shoman
*/
var SoftKeyboardTrigger=function(){
	this.__getClassType=function(){return "SoftKeyboardTrigger";};
};
SoftKeyboardTrigger.prototype= new Object();
SoftKeyboardTrigger.constructor = SoftKeyboardTrigger;
// Indicates that ActionScript invoked the event.
SoftKeyboardTrigger.CONTENT_TRIGGERED = "contentTriggered";
//Indicates that user action invoked the event.
SoftKeyboardTrigger.USER_TRIGGERED = "userTriggered";	
