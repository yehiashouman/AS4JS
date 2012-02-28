/**
 * @namespace events
 * @requires Event, events.EventDispatcher
 * @class TimerEvent
 * @author Yehia Shouman
 */

var TimerEvent=function (evtType,bubbles,cancelable){
	Event.call(this,evtType,bubbles,cancelable);
	var ref=this;
	this.clone = function(){
		return new TimerEvent(ref.type,ref.bubbles,ref.cancelable);
	};
	this.toString=function(){
		return "[TimerEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+"]";
	};
};
TimerEvent.prototype = new Event();
TimerEvent.constructor = TimerEvent;
TimerEvent.TIMER="timer";
TimerEvent.TIMER_COMPLETE="timerComplete";

