/**
 * @namespace display 
 * @requires 
 * @class LineScaleMode
 * @author Yehia Shouman
 */
var LineScaleMode = function() {

	this.__getClassType = function() {
		return "LineScaleMode";
	};
};
LineScaleMode.prototype = new Object();
LineScaleMode.constructor = LineScaleMode;
LineScaleMode.NORMAL = "normal";
LineScaleMode.NONE = "none";
LineScaleMode.VERTICAL = "vertical";
LineScaleMode.HORIZONTAL ="horizontal";
