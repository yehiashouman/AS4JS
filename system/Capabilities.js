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
defineAccessorProperty(SystemCapabilities,"avHardwareDisable",undefined,function(){return null;});
//[static] [read-only] Specifies the current CPU architecture.
defineAccessorProperty(SystemCapabilities,"cpuArchitecture",undefined,function(){return null;});
//[static] [read-only] Specifies whether the system supports (true) or does not support (false) communication with accessibility aids.
defineAccessorProperty(SystemCapabilities,"hasAccessibility",undefined,function(){return null;});
//[static] [read-only] Specifies whether the system has audio capabilities.
defineAccessorProperty(SystemCapabilities,"hasAudio",undefined,function(){return null;});
//[static] [read-only] Specifies whether the system can (true) or cannot (false) encode an audio stream, such as that coming from a microphone.
defineAccessorProperty(SystemCapabilities,"hasAudioEncoder",undefined,function(){return null;});
//[static] [read-only] Specifies whether the system supports (true) or does not support (false) embedded video.
//[static] [read-only] Specifies whether the system does (true) or does not (false) have an input method editor (IME) installed.
defineAccessorProperty(SystemCapabilities,"hasEmbeddedVideo",undefined,function(){return null;});
//[static] [read-only] Specifies whether the system does (true) or does not (false) have an MP3 decoder.
defineAccessorProperty(SystemCapabilities,"hasIME",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"hasMP3",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"hasPrinting",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"hasScreenBroadcast",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"hasScreenPlayback",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"hasStreamingAudio",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"hasStreamingVideo",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"hasTLS",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"hasVideoEncoder",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"isDebugger",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"isEmbeddedInAcrobat",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"language",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"languages",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"localFileReadDisable",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"manufacturer",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"maxLevelIDC",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"os",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"pixelAspectRatio",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"playerType",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"screenColor",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"screenDPI",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"screenResolutionX",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"screenResolutionY",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"serverString",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"supports32BitProcesses",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"supports64BitProcesses",undefined,function(){return null;});
defineAccessorProperty(SystemCapabilities,"touchscreenType",undefined,function(){return null;});

defineAccessorProperty(SystemCapabilities,"version",undefined,function(){return "3.0";});

var Capabilities = function(){};
Capabilities = new SystemCapabilities();
