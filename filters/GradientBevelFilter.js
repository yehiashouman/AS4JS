/**
 * @namespace filters 
 * @requires 
 * @class GradientBevelFilter
 * @author Yehia Shouman
 */
var GradientBevelFilter = function(distance, angle, colors, alphas, ratios, blurX, blurY, strength, quality, type, knockout) {
	BitmapFilter.call(this);
	this.distance=distance|| 4.0;
	this.angle=angle|| 45;
	this.colors=colors|| null;
	this.alphas=alphas|| null;
	this.rations= ratios|| null;
	this.blurX= blurX||4.0;
	this.blurY=blurY||4.0;
	this.strength=strength||1;
	this.quality=quality|| 1;
	this.type=type||"inner";
	this.knockout= knockout||false;
	
	
	this.__getClassType = function() {
		return "GradientBevelFilter";
	};
	var ref=this;
	this.clone = function(){
		return new GradientBevelFilter(ref.distance,ref.angle,ref.colors,ref.alphas,ref.rations,ref.blurX,ref.blurY,ref.strength,ref.quality,ref.type,ref.knockout);
	};
};
GradientBevelFilter.prototype = new BitmapFilter();
GradientBevelFilter.constructor = GradientBevelFilter;