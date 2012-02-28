/**
 * @namespace filters 
 * @requires 
 * @class BitmapFilterType
 * @author Yehia Shouman
 */
var BitmapFilterType = function() {

	this.__getClassType = function() {
		return "BitmapFilterType";
	};
};
BitmapFilterType.prototype = new Object();
BitmapFilterType.constructor = BitmapFilterType;
BitmapFilterType.FULL = "full";
BitmapFilterType.INNER = "inner";
BitmapFilterType.OUTER = "outer";