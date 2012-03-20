/**
 * @namespace media
 * @requires events.EventDispatcher, media.Sound, events.Event, media.SoundTransform
 * @class SoundChannel
 * @author Yehia Shouman
 */

var SoundChannel=function(audio){
	var ref = this;
	var soundComplete = function (){
		ref.dispatchEvent(new Event(Event.SOUND_COMPLETE));
		
	};
	this.audio = audio;
	this.audio.addEventListener("ended",soundComplete);
	this._soundTransform=new SoundTransform(1,0);
	this.__getClassType=function(){return "SoundChannel";};

};
SoundChannel.prototype = new EventDispatcher();
SoundChannel.constructor = SoundChannel;
SoundChannel.prototype.stop=function(){
	this.audio.pause();
	
};
//public property soundTransform setter and getter
defineAccessorProperty(SoundChannel, "soundTransform", function(val) {
	this.audio.volume = val.volume;
	this._soundTransform = val;
}, function() {
	return this._soundTransform;
});


//[read-only] The current amplitude (volume) of the left channel, from 0 (silent) to 1 (full amplitude).
//public property leftPeak setter and getter
defineAccessorProperty(SoundChannel, "leftPeak", function(val) {
}, function() {
	//TODO implement SoundChannel.leftPeak getter
});
//public property position setter and getter
defineAccessorProperty(SoundChannel, "position", function(val) {
	
}, function() {
	//TODO implement SoundChannel.position getter
});
//public property rightPeak setter and getter
defineAccessorProperty(SoundChannel, "rightPeak", function(val) {
	
}, function() {
	//TODO implement SoundChannel.rightPeak getter
});
