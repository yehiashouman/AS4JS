/**
 * @namespace filters 
 * @requires 
 * @class GradientGlowFilter
 * @author Yehia Shouman
 */
var GradientGlowFilter = function(distance, angle, colors, alphas, ratios, blurX, blurY, strength, quality, type, knockout) {
	BitmapFilter.call(this);
	this.distance = distance || 4.0;
	this.angle = angle || 45;
	this.colors = colors || null;
	this.alphas = alphas || null;
	this.ratios = ratios ||null;
	this.blurX = blurX || 4.0;
	this.blurY = blurY || 4.0;
	this.strength = strength || 1;
	this.quality = quality || 1;
	this.type = type || "inner";
	this.knockout = knockout || false;
	
	this.__getClassType = function() {
		return "GradientGlowFilter";
	};
	var ref=this;
	this.clone = function(){
		return new GradientGlowFilter(ref.distance,ref.angle,ref.colors,ref.alphas,ref.ratios,ref.blurX,ref.blurY,ref.strength,ref.quality,ref.type,ref.knockout);
	};
};
GradientGlowFilter.prototype = new BitmapFilter();
GradientGlowFilter.constructor = GradientGlowFilter;