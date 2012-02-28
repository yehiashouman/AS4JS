/**
 * @namespace ui 
 * @requires 
 * @class MouseCursorData
 * @author Yehia Shouman
 */
var MouseCursorData = function() {

	this.__getClassType = function() {
		return "MouseCursorData";
	};
	this.data = {};
	this.frameRate = 0;
	this.hotSpot = new Point();
};
MouseCursorData.prototype = new Object();
MouseCursorData.constructor = MouseCursorData;
