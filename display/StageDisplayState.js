/**
 * @namespace display
 * @requires 
 * @class StageDisplayState
 * @author Yehia Shouman
 */
var StageDisplayState = function(){
	this.__getClassType=function(){return "StageDisplayState";};

};
StageDisplayState.prototype = new Object();
StageDisplayState.FULL_SCREEN= "fullScreen";
StageDisplayState.FULL_SCREEN_INTERACTIVE= "fullScreenInteractive";
StageDisplayState.NORMAL = "normal";