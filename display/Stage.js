/**
 * @namespace display 
 * @requires 
 * @class Stage
 * @author Yehia Shouman
 */
var Stage = function(myDiv) {
	DisplayObjectContainer.call(this,myDiv);
	this.__getClassType = function() {
		return "Stage";
	};
	var ref=this;
	//ctrl 17 
	//lshift 16
	//alt 18
	var isCTRLDown=false;
	var isSHIFTDown = false;
	var isALTDown =false;
	document.onkeypress=function(e){
		//	var evt  = (e) ? e : ((event) ? event : null);
		//	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
			
	};
	document.onkeydown = function(e){
		var evt  = (e) ? e : ((event) ? event : null);
		var keyCode = parseInt(evt.which);
		if(keyCode==16) isSHIFTDown =true;
		if(keyCode==17) isCTRLDown =true;
		if(keyCode==18) isALTDown =true;
									
		var newEvt = new KeyboardEvent(KeyboardEvent.KEY_DOWN, true, false, evt.charCode, evt.keyCode, 0, isCTRLDown, isALTDown, isSHIFTDown, isCTRLDown, isALTDown);
		ref.dispatchEvent(newEvt);
		
		return false;
		
	};
	document.onkeyup = function(e){
		var evt  = (e) ? e : ((e) ? event : null);
		var keyCode = parseInt(evt.which);
		if(keyCode==16) isSHIFTDown =false;
		if(keyCode==17) isCTRLDown =false;
		if(keyCode==18) isALTDown =false;
		
		var newEvt = new KeyboardEvent(KeyboardEvent.KEY_UP, true, false, evt.charCode, evt.keyCode, 0, isCTRLDown, isALTDown, isSHIFTDown, isCTRLDown, isALTDown);
		ref.dispatchEvent(newEvt);
	
		return false;
	};
	
	
};
Stage.prototype = new DisplayObjectContainer();
Stage.constructor = Stage;
//public property align setter and getter
defineAccessorProperty(Stage, "align", function(val) {

}, function() {
	return;
},true);

//public property allowsFullScreen setter and getter
//[read-only] Specifies whether this stage allows the use of the full screen mode
defineAccessorProperty(Stage, "allowsFullScreen", function(val) {}, function() {
	return;
},true);

//public property allowsFullScreenInteractive setter and getter
//[read-only] Specifies whether this stage allows the use of the full screen with text input mode
defineAccessorProperty(Stage, "allowsFullScreenInteractive", function(val) {}, function() {
	return;
},true);

//public property autoOrients setter and getter
//Specifies whether the stage automatically changes orientation when the device orientation changes.
defineAccessorProperty(Stage, "autoOrients", function(val) {
	
}, function() {
	return;
},true);

//public property color setter and getter
//The SWF background color.
defineAccessorProperty(Stage, "color", function(val) {
	
}, function() {
	return;
},true);

//public property colorCorrection setter and getter
//Controls Flash runtime color correction for displays.
defineAccessorProperty(Stage, "colorCorrection", function(val) {
	
}, function() {
	return;
},true);	 	   

//public property colorCorrectionSupport setter and getter
//[read-only] Specifies whether the Flash runtime is running on an operating system that supports color correction and whether the color profile of the main (primary) monitor can be read and understood by the Flash runtime.
defineAccessorProperty(Stage, "colorCorrectionSupport", function(val) {
	
}, function() {
	return;
},true);	 	   


//public property deviceOrientation setter and getter
//[read-only] The physical orientation of the device.
defineAccessorProperty(Stage, "deviceOrientation", function(val) {
	
}, function() {
	return;
},true);

//public property displayState setter and getter
//A value from the StageDisplayState class that specifies which display state to use.
defineAccessorProperty(Stage, "displayState", function(val) {
	
}, function() {
	return;
},true);


//public property focus setter and getter
//The interactive object with keyboard focus; or null if focus is not set or if the focused object belongs to a security sandbox to which the calling object does not have access.
defineAccessorProperty(Stage, "focus", function(val) {
	
}, function() {
	return;
},true);


//public property frameRate setter and getter
//Gets and sets the frame rate of the stage.
defineAccessorProperty(Stage, "frameRate", function(val) {
	
}, function() {
	return;
},true);

//public property fullScreenHeight setter and getter
//[read-only] Returns the height of the monitor that will be used when going to full screen size, if that state is entered immediately.
defineAccessorProperty(Stage, "fullScreenHeight", function(val) {
	
}, function() {
	return;
},true);

//public property fullScreenSourceRect setter and getter
//Sets the Flash runtime to scale a specific region of the stage to full-screen mode.
defineAccessorProperty(Stage, "fullScreenSourceRect", function(val) {
	
}, function() {
	return;
},true);

//public property fullScreenWidth setter and getter
//[read-only] Returns the width of the monitor that will be used when going to full screen size, if that state is entered immediately.
defineAccessorProperty(Stage, "fullScreenWidth", function(val) {
	
}, function() {
	return;
},true);

//public property height setter and getter
//[override] Indicates the height of the display object, in pixels.
defineAccessorProperty(Stage, "height", function(val) {
	
}, function() {
	return;
},true);


//public property mouseChildren setter and getter
//[override] Determines whether or not the children of the object are mouse, or user input device, enabled.
defineAccessorProperty(Stage, "mouseChildren", function(val) {
	
}, function() {
	return;
},true);


//public property nativeWindow setter and getter
//[read-only] A reference to the NativeWindow object containing this Stage.
defineAccessorProperty(Stage, "nativeWindow", function(val) {
	
}, function() {
	return;
},true);



//public property numChildren setter and getter
//[override] [read-only] Returns the number of children of this object.
defineAccessorProperty(Stage, "numChildren", function(val) {
	
}, function() {
	return;
},true);





//public property orientation setter and getter
//[read-only] The current orientation of the stage.
defineAccessorProperty(Stage, "orientation", function(val) {
	
}, function() {
	return;
},true);


//public property quality setter and getter
//A value from the StageQuality class that specifies which rendering quality is used.
defineAccessorProperty(Stage, "quality", function(val) {
	
}, function() {
	return;
},true);

//public property scaleMode setter and getter
//A value from the StageScaleMode class that specifies which scale mode to use.
defineAccessorProperty(Stage, "scaleMode", function(val) {
	
}, function() {
	return;
},true);

//public property showDefaultContextMenu setter and getter
//Specifies whether to show or hide the default items in the Flash runtime context menu.
defineAccessorProperty(Stage, "showDefaultContextMenu", function(val) {
	
}, function() {
	return;
},true);


//public property softKeyboardRect setter and getter
//[read-only] A Rectangle specifying the area of the stage that is currently covered by a soft keyboard.
defineAccessorProperty(Stage, "softKeyboardRect", function(val) {
	
}, function() {
	return;
},true);

//public property softKeyboardRect setter and getter
//Specifies whether or not objects display a glowing border when they have focus.
defineAccessorProperty(Stage, "stageFocusRect", function(val) {
	
}, function() {
	return;
},true);
	 	
//public property stageHeight setter and getter
//The current height, in pixels, of the Stage.
defineAccessorProperty(Stage, "stageHeight", function(val) {
	
}, function() {
	return;
},true);
	 	
//public property stageVideos setter and getter
//[read-only] A list of StageVideo objects available for playing external videos.
defineAccessorProperty(Stage, "stageVideos", function(val) {
	
}, function() {
	return;
},true);

//public property stageWidth setter and getter
//Specifies the current width, in pixels, of the Stage.
defineAccessorProperty(Stage, "stageWidth", function(val) {
	
}, function() {
	return;
},true);

//public property supportedOrientations setter and getter
//[read-only] The orientations supported by the current device.
defineAccessorProperty(Stage, "supportedOrientations", function(val) {
	
}, function() {
	return;
},true);

//public property supportsOrientationChange setter and getter
//[static] [read-only] Whether the application supports changes in the stage orientation (and device rotation).
defineAccessorProperty(Stage, "supportsOrientationChange", function(val) {
	
}, function() {
	return;
},true);


//public property tabChildren setter and getter
//[override] Determines whether the children of the object are tab enabled.
defineAccessorProperty(Stage, "tabChildren", function(val) {
	
}, function() {
	return;
},true);	


//public property textSnapshot setter and getter
//[override] [read-only] Returns a TextSnapshot object for this DisplayObjectContainer instance.
defineAccessorProperty(Stage, "textSnapshot", function(val) {
	
}, function() {
	return;
},true);


//public property width setter and getter
//[override] [read-only] Returns a TextSnapshot object for this DisplayObjectContainer instance.
defineAccessorProperty(Stage, "width", function(val) {
	
}, function() {
	return;
},true);	


//public property wmodeGPU setter and getter
//[read-only] Indicates whether GPU compositing is available and in use.
defineAccessorProperty(Stage, "wmodeGPU", function(val) {
	
}, function() {
	return;
},true);	


//Sets keyboard focus to the interactive object specified by objectToFocus, with the focus direction specified by the direction parameter.
Stage.prototype.assignFocus=function(objectToFocus,direction){};
	
//Calling the invalidate() method signals Flash runtimes to alert display objects on the next opportunity it has to render the display list (for example, when the playhead advances to a new frame).
Stage.prototype.invalidate=function(){};
 	 	
//Determines whether the Stage.focus property returns null for security reasons.
Stage.prototype.isFocusInaccessible=function(){};
  	
//Sets the stage to an orientation with the specified aspect ratio.
Stage.prototype.setAspectRatio=function(newAspectRatio){};
  	
//Sets the stage to the specified orientation.
Stage.prototype.setOrientation=function(newOrientation){};
 	
//[override] Checks whether an event listener is registered with this EventDispatcher object or any of its ancestors for the specified event type.
Stage.prototype.willTrigger=function(type){};

root.stage= new Stage(document.body);
