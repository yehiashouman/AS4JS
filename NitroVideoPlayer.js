/**
 * @namespace 
 * @requires events.EventDispatcher, display.DisplayObjectContainer, display.DisplayObject, events.ProgressEvent, 
 * @class NitroVideoPlayer
 * @author Yehia Shouman
 */

var NitroVideoPlayer = function(divID){
	DisplayObjectContainer.call(this,divID);
	this.video = this.getChildByName("myVideo").getDIVContainer();
	this.volume = this.video.volume;
	this.progressTimer = -1;
	var instance=this;
	
	function progressHandler(){
			var evt= new ProgressEvent(ProgressEvent.PROGRESS);
			instance.dispatchEvent.call(instance,evt);

		};
	this.startTimer = function(){
		this.progressTimer = window.setInterval(progressHandler,100);
		
	};
	this.stopTimer = function(){
		
		window.clearInterval(this.progressTimer);
		
	};
	
};

NitroVideoPlayer.prototype = new DisplayObjectContainer();
NitroVideoPlayer.constructor = NitroVideoPlayer;
NitroVideoPlayer.prototype.setSource=function(src){
	this.video.src = src;
	
};
NitroVideoPlayer.prototype.play=function(){
	this.startTimer();
	this.video.play();
};
NitroVideoPlayer.prototype.pause=function(){
	this.stopTimer();
	this.video.pause();
};


NitroVideoPlayer.prototype.isPaused=function(){
	return this.video.paused;
};
NitroVideoPlayer.prototype.setVolume=function(vol){
	this.video.volume=vol;
	this.volume = this.video.volume;
};
NitroVideoPlayer.prototype.getVolume=function(vol){
	return this.video.volume;
};
NitroVideoPlayer.prototype.toggleMute=function(){
	if(this.video.volume!=0){
		this.volume = this.video.volume;
		this.video.volume = 0;
	}else{
		
		this.video.volume = this.volume;
	}
};
NitroVideoPlayer.prototype.getCurrentTime=function(){
	return this.video.currentTime;
};
NitroVideoPlayer.prototype.getDuration=function(){
	return this.video.duration;
};
NitroVideoPlayer.prototype.getVideo=function(){
	return this.video;
};
NitroVideoPlayer.prototype.setSize=function(w,h){
	this.video.width = w;
	this.video.height = h;
	
};