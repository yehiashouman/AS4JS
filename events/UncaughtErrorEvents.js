/**
 * @namespace  events
* @requires events.EventDispatcher
* @class UncaughtErrorEvents
* @author Nermeen Shoman
*/
var UncaughtErrorEvents=function(){
	this.__getClassType=function(){return "UncaughtErrorEvents";};
};
UncaughtErrorEvents.prototype= new EventDispatcher();
UncaughtErrorEvents.constructor = UncaughtErrorEvents;
//Dispatched when an error occurs and developer code doesn't detect and handle the error.
UncaughtErrorEvents.uncaughtError = "Dispatched error";
