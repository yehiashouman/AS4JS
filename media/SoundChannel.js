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
SoundChannel.prototype.__defineSetter__("soundTransform",function(val){
	this.audio.volume = val.volume;
	this._soundTransform = val;
});
SoundChannel.prototype.__defineGetter__("soundTransform",function(){
	return this._soundTransform;
});

//[read-only] The current amplitude (volume) of the left channel, from 0 (silent) to 1 (full amplitude).
SoundChannel.prototype.__defineGetter__("leftPeak",function(){
	//TODO implement SoundChannel.leftPeak
});
//[read-only] When the sound is playing, the position property indicates in milliseconds the current point that is being played in the sound file.
SoundChannel.prototype.__defineGetter__("position",function(){
	//TODO implement SoundChannel.position
});
//[read-only] The current amplitude (volume) of the right channel, from 0 (silent) to 1 (full amplitude).
SoundChannel.prototype.__defineGetter__("rightPeak",function(){
	//TODO implement SoundChannel.rightPeak
});

