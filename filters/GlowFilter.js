/**
 * @namespace filters 
 * @requires 
 * @class GlowFilter
 * @author Yehia Shouman
 */
var GlowFilter = function(color,alpha,blurX,blurY,strength,quality,inner,knockout) {
	BitmapFilter.call(this);
	this.color = color ||0xFF0000;
	this.alpha = alpha ||1.0;
	this.blurX = blurX || 6.0;
	this.blurY = blurY || 6.0;
	this.strength = strength || 2;
	this.quality = quality || 1;
	this.inner = inner || false;
	this.knockout = knockout || false;
	this.__getClassType = function() {
		return "GlowFilter";
	};
	var ref=this;
	this.clone = function(){
		return new GlowFilter(ref.color,ref.alpha,ref.blurX,ref.blurY,ref.strength,ref.quality,ref.inner,ref.knockout);
	};
};
GlowFilter.prototype = new BitmapFilter();
GlowFilter.constructor = GlowFilter;