/**
 * @namespace media
 * @requires events.EventDispatcher
 * @class SoundTransform
 * @author Yehia Shouman
 */

var SoundTransform = function (volume,panning){
	
	this.volume = volume;
	this.panning = panning;
	this.__getClassType=function(){return "SoundTransform";};

};

SoundTransform.prototype = new Object();
SoundTransform.constructor = SoundTransform;

SoundTransform.prototype.__defineGetter__("leftToLeft",function(){
	//TODO implement SoundTransform.leftToLeft
});
SoundTransform.prototype.__defineSetter__("leftToLeft",function(val){
	//TODO implement SoundTransform.leftToLeft
});

SoundTransform.prototype.__defineGetter__("leftToRight",function(){
	//TODO implement SoundTransform.leftToRight
});
SoundTransform.prototype.__defineSetter__("leftToRight",function(val){
	//TODO implement SoundTransform.leftToRight
});

SoundTransform.prototype.__defineGetter__("pan",function(){
	//TODO implement SoundTransform.pan
});
SoundTransform.prototype.__defineSetter__("pan",function(val){
	//TODO implement SoundTransform.pan
});

SoundTransform.prototype.__defineGetter__("rightToLeft",function(){
	//TODO implement SoundTransform.rightToLeft
});
SoundTransform.prototype.__defineSetter__("rightToLeft",function(val){
	//TODO implement SoundTransform.rightToLeft
});

SoundTransform.prototype.__defineGetter__("rightToRight",function(){
	//TODO implement SoundTransform.rightToRight
});
SoundTransform.prototype.__defineSetter__("rightToRight",function(val){
	//TODO implement SoundTransform.rightToRight
});

SoundTransform.prototype.__defineGetter__("volume",function(){
	//TODO implement SoundTransform.volume
});
SoundTransform.prototype.__defineSetter__("volume",function(val){
	//TODO implement SoundTransform.volume
});
