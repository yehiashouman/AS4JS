/**
 * @namespace events
 * @requires Event
 * @class ActivityEvent
 * @author Nermeen Shoman
 */
 	//Creates an event object that contains information about activity events.

var ActivityEvent = function(type, bubbles, cancelable, activating){
	Event.call(this,type,bubbles,cancelable);
	this.activating = activating;
	var ref=this;
	//Creates a copy of an ActivityEvent object and sets the value of each property to match that of the original. 	 	
	this.clone = function(){
		return new ActivityEvent(ref.type,ref.bubbles,ref.cancelable,ref.data);
	};
	this.toString=function(){
		return "[ActivityEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" data="+ref.data+"]";
	};
	this.__getClassType=function(){return "ActivityEvent";};
};	 	

//The ActivityEvent.ACTIVITY constant defines the value of the type property of an activity event object.
ActivityEvent.ACTIVITY = "activity";