/**
 * @namespace system
 * @requires events.EventDispatcher, global
 * @class Capabilities,SystemCapabilities
 * @author Yehia Shouman
 */

var SystemCapabilities = function(){
	//traceObj(navigator);
	//traceObj(window.screen);
	this.__getClassType=function(){return "SystemCapabilities";};

};
SystemCapabilities.prototype = new Object();
SystemCapabilities.constructor = Capabilities;
////[static] [read-only] Specifies whether access to the user's camera and microphone has been administratively prohibited (true) or allowed (false).
SystemCapabilities.prototype.__defineGetter__("avHardwareDisable",function(){
		return false;
});
//[static] [read-only] Specifies the current CPU architecture.
SystemCapabilities.prototype.__defineGetter__("cpuArchitecture",function(){
		return null;
});

//[static] [read-only] Specifies whether the system supports (true) or does not support (false) communication with accessibility aids.
SystemCapabilities.prototype.__defineGetter__("hasAccessibility",function(){
		return null;
});
//[static] [read-only] Specifies whether the system has audio capabilities.
SystemCapabilities.prototype.__defineGetter__("hasAudio",function(){
		return null;
});
//[static] [read-only] Specifies whether the system can (true) or cannot (false) encode an audio stream, such as that coming from a microphone.
SystemCapabilities.prototype.__defineGetter__("hasAudioEncoder",function(){
		return null;
});


//[static] [read-only] Specifies whether the system supports (true) or does not support (false) embedded video.
SystemCapabilities.prototype.__defineGetter__("hasAudioEncoder",function(){
		return null;
});
//[static] [read-only] Specifies whether the system does (true) or does not (false) have an input method editor (IME) installed.
SystemCapabilities.prototype.__defineGetter__("hasEmbeddedVideo",function(){
		return null;
});
//[static] [read-only] Specifies whether the system does (true) or does not (false) have an MP3 decoder.
SystemCapabilities.prototype.__defineGetter__("hasAudioEncoder",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasIME",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasMP3",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasPrinting",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasScreenBroadcast",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasScreenPlayback",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasStreamingAudio",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasStreamingVideo",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasTLS",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("hasVideoEncoder",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("isDebugger",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("isEmbeddedInAcrobat",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("language",function(){
		return null;
});
SystemCapabilities.prototype.__defineGetter__("languages",function(){
		return navigator.language;
});

SystemCapabilities.prototype.__defineGetter__("localFileReadDisable",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("manufacturer",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("maxLevelIDC",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("os",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("pixelAspectRatio",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("playerType",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("screenColor",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("screenDPI",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("screenResolutionX",function(){
	return viewport().width;
});

SystemCapabilities.prototype.__defineGetter__("screenResolutionY",function(){
	return viewport().height;
});

SystemCapabilities.prototype.__defineGetter__("serverString",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("supports32BitProcesses",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("supports64BitProcesses",function(){
	return null;
});

SystemCapabilities.prototype.__defineGetter__("touchscreenType",function(){
	return null;
});

SystemCapabilities.prototype.version = 3.0;

var Capabilities = function(){};
Capabilities = new SystemCapabilities();
