/**
 * @namespace filters 
 * @requires 
 * @class DisplacementMapFilter
 * @author Yehia Shouman
 */
var DisplacementMapFilter = function(mapBitmap,mapPoint,componentX,componentY,scaleX,scaleY,mode,color,alpha) {
	BitmapFilter.call(this);
	this.mapBitmap = mapBitmap || null;
	this.mapPoint = mapPoint || null;
	this.componentX = componentX || 0;
	this.componentY = componentY || 0;
	this.scaleX = scaleX || 0;
	this.scaleY = scaleY || 0;
	this.mode = mode || "wrap";
	this.color = color || 0;
	this.alpha = alpha || 0;
	

	this.__getClassType = function() {
		return "DisplacementMapFilter";
	};
	var ref=this;
	this.clone = function(){
		return new DisplacementMapFilter(ref.mapBitmap,ref.mapPoint,ref.componentX,ref.componentY,ref.scaleX,ref.scaleY,ref.mode,ref.color,ref.alpha);
	};
};
DisplacementMapFilter.prototype = new BitmapFilter();
DisplacementMapFilter.constructor = DisplacementMapFilter;