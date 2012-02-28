/**
 * @namespace filters 
 * @requires 
 * @class BitmapFilter
 * @author Yehia Shouman
 */
var BitmapFilter = function() {

	this.__getClassType = function() {
		return "BitmapFilter";
	};
	this.close = function(){
		return new BitmapFilter();
	};
};
BitmapFilter.prototype = new Object();
BitmapFilter.constructor = BitmapFilter;