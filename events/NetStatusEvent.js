/**
 * @namespace  events
* @requires events.Event
* @class NetStatusEvent
* @author Nermeen Shoman
*/
var NetStatusEvent=function(type, bubbles, cancelable, timestamp, info){
	Event.call(this,type, bubbles, cancelable, timestamp, info);
	var ref=this;
	this.clone = function(){
		return new NetStatusEvent(ref.type, ref.bubbles, ref.cancelable, ref.timestamp, ref.info);
	};
	this.toString=function(){
		return "[NetStatusEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" timestamp="+ref.timestamp+" info="+ref.info+"]";
	};
	this.__getClassType=function(){return "NetStatusEvent";};
};
NetStatusEvent.prototype= new Event();
NetStatusEvent.constructor = NetStatusEvent;
//The NetDataEvent.MEDIA_TYPE_DATA constant defines the value of the type property NetDataEvent object
// when a data message is received no the NetStream object.
NetStatusEvent.MEDIA_TYPE_DATA = "mediaTypeData";
