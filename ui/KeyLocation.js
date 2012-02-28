/**
 * @namespace ui 
 * @requires 
 * @class KeyLocation
 * @author Yehia Shouman
 */
var KeyLocation = function() {

	this.__getClassType = function() {
		return "KeyLocation";
	};
};
KeyLocation.prototype = new Object();
KeyLocation.constructor = KeyLocation;
KeyLocation.LEFT = 1;
//[static] Indicates the key activated is in the left key location (there is more than one possible location for this key).
KeyLocation.NUM_PAD = 3;
//[static] Indicates the key activation originated on the numeric keypad or with a virtual key corresponding to the numeric keypad.
KeyLocation.RIGHT = 2;
//[static] Indicates the key activated is in the right key location (there is more than one possible location for this key).
KeyLocation.STANDARD = 0;
//[static] Indicates the key activation is not distinguished as the left or right version of the key, and did not originate on the numeric keypad (or did not originate with a virtual key corresponding to the numeric keypad).