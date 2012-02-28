/**
 * @namespace events
 * @requires event.Event
 * @class DataEvent
 * @author Nermeen Shouman
 */
//Creates an event object that contains information about data events.
var DataEvent=function(type, bubbles, cancelable, data){
	Event.call(this,type,bubbles,cancelable);
	this.data = data;
	var ref=this;
	//[override] Creates a copy of the DataEvent object and sets the value of each property to match that of the original.
	this.clone = function(){
		return new DataEvent(ref.type,ref.bubbles,ref.cancelable,ref.data);
	};
	this.__getClassType = function(){
		return "DataEvent";
	};

	
};

DataEvent.prototype = new Event();
DataEvent.constructor = DataEvent;
DataEvent.DATA = "data";
DataEvent.UPLOAD_COMPLETE_DATA = "uploadCompleteData";
