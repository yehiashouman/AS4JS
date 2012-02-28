/**
 * @namespace utils
 * @requires events.EventDispatcher, events.TimerEvent
 * @class Event
 * @author Yehia Shouman
 */

var Timer = function(delay,repeatCount){
	EventDispatcher.call(this);
	this.intervalCounts= repeatCount;
	this.delay = delay;
	this.repeatCount=repeatCount;
	
	this.intervalHandler = function(ref)
	{
		
		//alert("er"+ref.intervalCounts);
		if(ref.intervalCounts==0)
		{
			
			if(ref.timeInterval){clearInterval(ref.timeInterval);}
			ref.running = false;
			ref.dispatchEvent(new TimerEvent(TimerEvent.TIMER_COMPLETE));
 
			
		}else {
			ref.dispatchEvent(new TimerEvent(TimerEvent.TIMER));
						
		}
		ref.intervalCounts--;
		
		
	};
	this.__getClassType=function(){return "Timer";};

	//alert("here");
};

Timer.prototype = new EventDispatcher();
Timer.constructor = Timer;
Timer.prototype.currentCount = 0;
Timer.prototype.delay = 0;
Timer.prototype.repeatCount= 0;
Timer.prototype.running= false;
Timer.prototype.start = function(){
	this.running = true;
	
	if(this.timeInterval){clearInterval(this.timeInterval);}
	var ref = this;
	
	this.timeInterval = setInterval(function(){ref.intervalHandler(ref);},this.delay);
	
};
Timer.prototype.stop = function(){
	if(this.timeInterval){clearInterval(this.timeInterval);}
	this.running = false;
};
Timer.prototype.reset = function(){
	this.running = false;
	this.intervalCounts= repeatCount;
};

