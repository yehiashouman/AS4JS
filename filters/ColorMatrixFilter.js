/**
 * @namespace filters 
 * @requires 
 * @class ColorMatrixFilter
 * @author Yehia Shouman
 */
var ColorMatrixFilter = function(matrix) {
	BitmapFilter.call(this);
	this.matrix = matrix||null;
	this.__getClassType = function() {
		return "ColorMatrixFilter";
	};
	var ref=this;
	this.clone = function(){
		return new ColorMatrixFilter(ref.matrix);
	};
};
ColorMatrixFilter.prototype = new BitmapFilter();
ColorMatrixFilter.constructor = ColorMatrixFilter;