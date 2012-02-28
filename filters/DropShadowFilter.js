/**
 * @namespace filters 
 * @requires 
 * @class DropShadowFilter
 * @author Yehia Shouman
 */
var DropShadowFilter = function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject) {
	BitmapFilter.call(this);
	this.distance = distance || 4.0;
	this.angle = angle || 45;
	this.color = color || 0;
	this.alpha = alpha || 1;
	this.blurX = blurX ||4.0;
	this.blurY = blurY ||4.0;
	this.strength = strength || 1;
	this.quality = quality || 1;
	this.inner = inner || false;
	this.knockout = knockout || false;
	this.hideObject = hideObject ||false;

	this.__getClassType = function() {
		return "DropShadowFilter";
	};
	var ref=this;
	this.clone = function(){
		return new DropShadowFilter(ref.distance,ref.angle,ref.color,ref.alpha,ref.blurX,ref.blurY,ref.strength,ref.quality,ref.inner,ref.knockout,ref.hideObject);
	};
};
DropShadowFilter.prototype = new BitmapFilter();
DropShadowFilter.constructor = DropShadowFilter;