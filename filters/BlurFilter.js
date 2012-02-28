/**
 * @namespace filters 
 * @requires 
 * @class BlurFilter
 * @author Yehia Shouman
 */
var BlurFilter = function(blurX,blurY,quality) {
	BitmapFilter.call(this);
	this.blurX = blurX || 4.0;
	this.blurY = blurY ||4.0;
	this.quality = quality || 1;
	this.__getClassType = function() {
		return "BlurFilter";
	};
	var ref=this;
	this.clone = function(){
		return new BlurFilter(ref.blurX,ref.blurY,ref.quality);
	};
};
BlurFilter.prototype = new BitmapFilter();
BlurFilter.constructor = BlurFilter;