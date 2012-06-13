/**
 * @namespace events
 * @requires URLRequest, Event, IOErrorEvent, HTTPStatusEvent, ProgressEvent, events.EventDispatcher
 * @class Sound
 * @author Yehia Shouman
 */

var Sound = function(urlRequest)
{
	
	this._url = urlRequest? urlRequest.url : null;
	this.audio = document.createElement('Audio');
	var ref=this;
	
	this.fixProgressEvent = function(ref){
		var getConcerningRange 			= function(){
				var time 		= ref.audio.currentTime || 0,
					buffered 	= ref.audio.buffered,
					bufLen 		= buffered.length,
					ret 		= {}
				;

				for(var i = 0; i < bufLen; i++){
					ret.start = buffered.start(i);
					ret.end = buffered.end(i);
					if(ret.start <= time && ret.end >= time){
						break;
					}
				}
				return ret;
			};

			var calculateProgress 	= function(e){
				//trace("calculate yalla"+this.buffered);
				
				var evt = new ProgressEvent(ProgressEvent.PROGRESS, true, false, 0, 0);

				//current implementation -> chrome 5/safari 5
				if(this.buffered && this.buffered.length){
					//trace("#1");
					var dur = this.duration;
					if(dur){
						bufRange = getConcerningRange();
						//evt.relStart = bufRange.start / dur * 100;
						//evt.relLoaded = bufRange.end / dur * 100;
						evt.bytesLoaded = bufRange.end;
						evt.bytesTotal = dur;
						//alert(bufRange.end+" "+dur);
					}
					ref.dispatchEvent(evt);
				//ff + safari4 implementation
				} else if(e.originalEvent && 'lengthComputable' in e.originalEvent && e.originalEvent.loaded){
					//trace("#2");
					
					if(e.originalEvent.lengthComputable && e.originalEvent.total){
						//evt.relStart = 0;
						//evt.relLoaded = e.originalEvent.loaded / e.originalEvent.total * 100;
						evt.bytesLoaded = e.originalEvent.loaded;
						evt.bytesTotal = e.originalEvent.total;
						
						
					}
					ref.dispatchEvent(evt);
				} 
				//opera fallback
				if( !evt.bytesLoaded && this.readyState === 4 ){
					//trace("#3");
					
					//evt.relStart = 0;
					//evt.relLoaded = 100;
					evt.bytesLoaded = 0;
					evt.bytesTotal = 100;

					ref.dispatchEvent(evt);
				}
				return evt.relLoaded;
			};
			
			var progressInterval = function(){
				if( calculateProgress.call(ref.audio, { type: 'ipadprogress' }) >= 100 || ref.audio.readyState === 1  ){
					clearInterval(timer);
				}
			};
		ref.audio.addEventListener('progress', calculateProgress);

		//iPad has no progress event
		if ('buffered' in ref.audio) {
			ref.audio.addEventListener('play waiting loadstart', function(){
				clearInterval(timer);
				if (true) {
					timer = setInterval(progressInterval, 333);
					progressInterval();
				}
			});
		}
	};
	
	
	this._eventsHandler=function(evt){
		//traceObj(evt);
		switch(evt.type){
			case "load":
				ref.dispatchEvent(new Event(Event.OPEN));
			break;
			case "loadeddata":
				ref.dispatchEvent(new Event(Event.COMPLETE));
			break;
			case "error":
				throwCustomError(ref,2044,"IOErrorEvent");
			break;
		};
	};
	this.audio.addEventListener("load", this._eventsHandler);
	this.audio.addEventListener("error",this._eventsHandler);
	this.audio.addEventListener("loadeddata", this._eventsHandler);
	this.__getClassType=function(){return "Sound";};
	this.fixProgressEvent(this);
};

Sound.prototype = new EventDispatcher();
Sound.constructor = Sound;
//public property bytesLoaded setter and getter
defineAccessorProperty(Sound, "bytesLoaded", function(val) {
}, function() {
	//TODO implement Sound.bytesLoaded getter
});
//public property bytesTotal setter and getter
defineAccessorProperty(Sound, "bytesTotal", function(val) {
	//TODO implement Sound.bytesTotal 
}, function() {
});
//public property id3 setter and getter
defineAccessorProperty(Sound, "id3", function(val) {
	//TODO implement Sound.id3 
}, function() {
});
//public property isBuffering setter and getter
defineAccessorProperty(Sound, "isBuffering", function(val) {
	//TODO implement Sound.isBuffering 
}, function() {
});
//public property isURLInaccessible setter and getter
defineAccessorProperty(Sound, "isURLInaccessible", function(val) {
	//TODO implement Sound.isURLInaccessible 
}, function() {
});
//public property length setter and getter
defineAccessorProperty(Sound, "length", function(val) {
	//TODO implement Sound.length 
}, function() {
	return this.audio.duration? this.audio.duration : 0;
});
//public property url setter and getter
defineAccessorProperty(Sound, "url", function(val) {
	//TODO implement Sound.url 
}, function() {
	return this._url;
});

Sound.prototype.url = null;
Sound.prototype.close = function(){
	this.audio.pause();
	this.audio.setAttribute('src',''); 
	
};
Sound.prototype.extract= function(targetByteArray,length,startPosition){
	//TODO implement Sound.extract
	
	
};
Sound.prototype.load = function(urlRequest){
	this._url = urlRequest? urlRequest.url : this._url;
	this.audio.setAttribute('src',this._url); 
	this.audio.load();
};
Sound.prototype.play = function(startTime,loops,sndTransform){
	if(startTime) this.audio.currentTime=startTime;
	this.audio.play();
	
	return new SoundChannel(this.audio);
	
};
Sound.prototype.stop = function(){
	this.audio.pause();
	
};


