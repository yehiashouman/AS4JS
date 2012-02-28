/**
 * @namespace ui 
 * @requires 
 * @class MouseCursor
 * @author Yehia Shouman
 */
var MouseCursor = function() {

	this.__getClassType = function() {
		return "MouseCursor";
	};
};
MouseCursor.prototype = new Object();
MouseCursor.constructor = MouseCursor;
MouseCursor.ARROW = "arrow";
MouseCursor.AUTO = "auto";
MouseCursor.BUTTON = "button";
MouseCursor.HAND = "hand";
MouseCursor.IBEAM = "ibeam";