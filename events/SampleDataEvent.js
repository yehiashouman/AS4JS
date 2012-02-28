/**
 * @namespace  events
* @requires events.Event
* @class SampleDataEvent
* @author Nermeen Shoman
*/
var SampleDataEvent=function(type, bubbles, cancelable, theposition, thedata){
	Event.call(type, bubbles, cancelable, theposition, thedata);
	this.position = theposition;
	this.data = thedata;
	var ref=this;
	this.clone = function(){
		return new SampleDataEvent(ref.type, ref.bubbles, ref.cancelable, ref.theposition, ref.thedata);
	};
	this.toString=function(){
		return "[SampleDataEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" theposition="+ref.theposition+" thedata="+ref.thedata+"]";
	};
	this.__getClassType=function(){return "SampleDataEvent";};
};
SampleDataEvent.prototype= new Event();
SampleDataEvent.constructor = SampleDataEvent;
//Defines the value of the type property of a SampleDataEvent event object
SampleDataEvent.SAMPLE_DATA = "sampleData";