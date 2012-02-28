/**
 * @namespace  events
* @requires Event
* @class SyncEvent
* @author Nermeen Shoman
*/
var SyncEvent=function(type, bubbles, cancelable, changeList){
	Event.call(this,type, bubbles, cancelable, changeList);
	this.changeList = changeList;
	this.__getClassType=function(){return "SyncEvent";};
	var ref=this;
	this.clone = function(){
		return new FocusEvent(ref.type, ref.bubbles, ref.cancelable, ref.changeList);
	};
	this.toString=function(){
		return "[FocusEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" changeList="+ref.changeList+"]";
	};
};
SyncEvent.prototype= new Event();
SyncEvent.constructor = SyncEvent;
//Defines the value of the type property of a sync event object
SyncEvent.SYNC= "sync";
