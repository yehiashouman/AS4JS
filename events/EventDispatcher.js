/**
 * @namespace events
 * @requires EventDispatcher
 * @class Event
 * @author Yehia Shouman
 */

//var EventDispatcher= function(myDiv){
//	
//	
//};
//EventDispatcher.prototype = new HTMLDocument();
//EventDispatcher.constructor = EventDispatcher;
//EventDispatcher.prototype.EVTS_HTMLEVENTS = "HTMLEvents";
//EventDispatcher.prototype.EVTS_MOUSEEVENTS = "MouseEvents";
//EventDispatcher.prototype.EVTS_UIEvents= "UIEvents";
//EventDispatcher.prototype.EVTS_MutationEvents= "MutationEvents";
//EventDispatcher.prototype.dispatchCustomEvent=function(evtCategory,evtType,evtData)
//{
//	
//	  if (document.createEvent) {     // all browsers except IE before version 9
//          var evObj = document.createEvent ("HTMLEvents");
//          alert(this.dispatchEvent);
//          evObj.initEvent (evtType, true, false);
//          this.dispatchEvent (changeEvent);
//      }
//      else {
//          alert ("Your browser does not support the createEvent method!");
//      }
//};
var EventDispatcher=function(){
	this.events=[];
	
};

EventDispatcher.prototype= new Object();
EventDispatcher.constructor = EventDispatcher;
EventDispatcher.prototype.addEventListener=function(eventType,handler){
	this.events[eventType] = this.events[eventType] || [];
	trace(this.events[eventType]);
	if ( this.events[eventType] ) {
		
		this.events[eventType].push(handler);
	}
	
};
EventDispatcher.prototype.hasEventListener=function(eventType,handler){
	return this.events[eventType][handler]?true : false;
};

EventDispatcher.prototype.removeEventListener=function(eventType,handler){
	if ( this.events[eventType] ) {
		var listeners = this.events[eventType];
		for ( var i = listeners.length-1; i>=0; --i ){
			if ( listeners[i] === handler ) {
				listeners.splice( i, 1 );
				return true;
			}
		}
	}
	return false;
};
EventDispatcher.prototype.dispatchEvent=function(event){
	
	event.target = this;
	event.currentTarget= arguments.callee.caller;
	if ( this.events[event.type] ) {
		var listeners = this.events[event.type], len = listeners.length;
		while ( len-- ) {
			listeners[len](event);	//callback with self
		}		
	}
};
EventDispatcher.prototype.toString=function(){
	var str="["+(this.__getClassType?this.__getClassType(): "Object")+" ";
	var prop;
	var propVal;
	for(var i in this)
	{
		prop = i;
		propVal = this[i];
		if(this.hasOwnProperty(prop) && prop!=undefined &&prop!=null && propVal.toString){
			if(propVal.toString().indexOf("function")==-1){
			str+=i+":"+propVal+" ";
			};
		};
	};
	str+="]";
	return str;
	
};
