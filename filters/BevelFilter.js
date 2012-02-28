/**
 * @namespace filters 
 * @requires 
 * @class BevelFilter
 * @author Yehia Shouman
 */
var BevelFilter = function(distance,angle,highlightColor,highlightAlpha,shadowColor,shadowAlpha,blurX,blurY,strength,quality,type,knockout) {
	BitmapFilter.call(this);
	this.distance = distance || 4.0;
	this.angle = angle || 45;
	this.highlightColor = highlightColor || 0xFFFFFF;
	this.highlightAlpha = highlightAlpha|| 1.0;
	this.shadowColor = shadowColor || 0x000000;
	this.shadowAlpha = shadowAlpha || 1.0;
	this.blurX = blurX || 4;
	this.blurY = blurY || 4;
	this.strength = strength || 1;
	this.quality = quality || 1;
	this.type = type || BitmapFilterType.INNER;
	this.knockout = knockout || false;
	this.__getClassType = function() {
		return "BevelFilter";
	};
	var ref=this;
	this.clone= function(){
		return new BevelFilter(ref.distance,ref.angle,ref.highlightColor,ref.highlightAlpha,ref.shadowColor,ref.shadowAlpha,ref.blurX,ref.blurY,ref.strength,ref.quality,ref.type,ref.knockout);
		
	};
	
	
};
BevelFilter.prototype = new Object();
BevelFilter.constructor = BevelFilter;