/**
 * @namespace  events
* @requires events.Event
* @class StageVideoAvailabilityEvent
* @author Nermeen Shoman
*/
var StageVideoAvailabilityEvent=function(type, bubbles, cancelable, availability){
	Event.call(this, type, bubbles, cancelable, availability);
	//Reports the current availability of stage video using a constant of the flash.media.StageVideoAvailability class. 
	this.availability = availability;
	this.__getClassType=function(){return "StageVideoAvailabilityEvent";};
};
StageVideoAvailabilityEvent.prototype= new Event();
StageVideoAvailabilityEvent.constructor = StageVideoAvailabilityEvent;
//Defines the value of the type property of a stageVideoAvailability event object.
StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY = "stageVideoAvailability";
