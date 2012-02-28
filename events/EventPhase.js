/**
* @namespace  events
* @requires 
* @class EventPhase
* @author Nermeen Shoman
*/
var EventPhase=function(){
	Event.call(this);
	this.__getClassType=function(){return "EventPhase";};
};
EventPhase.prototype= new Object();
EventPhase.constructor = EventPhase;
//The target phase, which is the second phase of the event flow.
EventPhase.AT_TARGET = 2;
//The bubbling phase, which is the third phase of the event flow.
EventPhase.BUBBLING_PHASE = 3;
//The capturing phase, which is the first phase of the event flow.
EventPhase.CAPTURING_PHASE  = 1;

