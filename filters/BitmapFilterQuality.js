/**
 * @namespace filters 
 * @requires 
 * @class BitmapFilterQuality
 * @author Yehia Shouman
 */
var BitmapFilterQuality = function() {
	
	this.__getClassType = function() {
		return "BitmapFilterQuality";
	};
};
BitmapFilterQuality.prototype = new Object();
BitmapFilterQuality.constructor = BitmapFilterQuality;
BitmapFilterQuality.HIGH = 3;
BitmapFilterQuality.LOW = 1;
BitmapFilterQuality.MEDIUM = 2;
