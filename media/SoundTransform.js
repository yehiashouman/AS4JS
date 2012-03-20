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

//public property leftToLeft setter and getter
defineAccessorProperty(SoundTransform, "leftToLeft", function(val) {
	//TODO implement SoundTransform.leftToLeft 
}, function() {
});
//public property leftToRight setter and getter
defineAccessorProperty(SoundTransform, "leftToRight", function(val) {
	//TODO implement SoundTransform.leftToRight 
}, function() {
});

//public property pan setter and getter
defineAccessorProperty(SoundTransform, "pan", function(val) {
	//TODO implement SoundTransform.pan 
}, function() {
});
//public property rightToLeft setter and getter
defineAccessorProperty(SoundTransform, "rightToLeft", function(val) {
	//TODO implement SoundTransform.rightToLeft 
}, function() {
});

//public property rightToRight setter and getter
defineAccessorProperty(SoundTransform, "rightToRight", function(val) {
	//TODO implement SoundTransform.rightToRight 
}, function() {
});
//public property volume setter and getter
defineAccessorProperty(SoundTransform, "volume", function(val) {
	//TODO implement SoundTransform.volume 
}, function() {
});
