/**
 * @namespace  events
* @requires event
* @class TextEvent
* @author Nermeen Shoman
*/
var TextEvent=function(type, bubbles, cancelable, text){
	Event.call(this,type, bubbles, cancelable, text);
	this.text = text;
	var ref=this;
	this.clone = function(){
		return new TextEvent(ref.type, ref.bubbles, ref.cancelable, ref.text);
	};
	this.toString=function(){
		return "[TextEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" text="+ref.text+"]";
	};
	this.__getClassType=function(){return "TextEvent";};
};
TextEvent.prototype= new Event();
TextEvent.constructor = TextEvent;
//Defines the value of the type property of a link event object.
TextEvent.LINK = "link";
//Defines the value of the type property of a textInput event objec
TextEvent.TEXT_INPUT  = "textInput";
