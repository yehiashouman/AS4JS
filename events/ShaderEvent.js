/**
 * @namespace  events
* @requires events.Event
* @class ShaderEvent
* @author Nermeen Shoman
*/
var ShaderEvent=function(type, bubbles, cancelable, bitmap , array, vector){
	Event.call(this, type, bubbles, cancelable, bitmap , array, vector);
 	//The BitmapData object that was passed to the ShaderJob.start() method
	this.bitmapData = bitmap;
 	//The ByteArray object that was passed to the ShaderJob.start() method.
	this.byteArray = array;
	//The Vector.<Number> object that was passed to the ShaderJob.start() method
	this.vector = vector;
	var ref=this;
	this.clone = function(){
		return new ShaderEvent(ref.type, ref.bubbles, ref.cancelable, ref.bitmap , ref.array, ref.vector);
	};
	this.toString=function(){
		return "[ShaderEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable+
				" bitmap="+ref.bitmap+" array="+ref.array+" vector="+ref.vector+"]";
	};
	this.__getClassType=function(){return "ShaderEvent";};
};
ShaderEvent.prototype= new Event();
ShaderEvent.constructor = ShaderEvent;
//Defines the value of the type property of a complete event object.
ShaderEvent.COMPLETE = "complete";