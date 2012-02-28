/**
 * @namespace filters 
 * @requires 
 * @class DisplacementMapFilterMode
 * @author Yehia Shouman
 */
var DisplacementMapFilterMode = function() {

	this.__getClassType = function() {
		return "DisplacementMapFilterMode";
	};
	
};
DisplacementMapFilterMode.prototype = new BitmapFilter();
DisplacementMapFilterMode.constructor = DisplacementMapFilterMode;
DisplacementMapFilterMode.CLAMP="clamp";
DisplacementMapFilterMode.COLOR = "color";
DisplacementMapFilterMode.IGNORE = "ignore";
DisplacementMapFilterMode.WRAP = "wrap";