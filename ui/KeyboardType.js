/**
 * @namespace ui 
 * @requires 
 * @class KeyboardType
 * @author Yehia Shouman
 */
var KeyboardType = function() {

	this.__getClassType = function() {
		return "KeyboardType";
	};
};
KeyboardType.prototype = new Object();
KeyboardType.constructor = KeyboardType;
KeyboardType.ALPHANUMERIC = "alphanumeric";
KeyboardType.KEYPAD = "keypad";
KeyboardType.NONE = "none";