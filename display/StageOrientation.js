/**
 * @namespace display
 * @requires 
 * @class StageOrientation
 * @author Yehia Shouman
 */
var StageOrientation = function(){
	this.__getClassType=function(){return "StageOrientation";};

};
StageOrientation.prototype = new Object();
StageOrientation.DEFAULT = "default";
StageOrientation.ROTATED_LEFT= "rotatedLeft";
StageOrientation.ROTATED_RIGHT = "rotatedRight";
StageOrientation.UNKNOWN= "unknown";
StageOrientation.UPSIDE_DOWN= "upsideDown";
