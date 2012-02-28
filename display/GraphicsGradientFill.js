/**
 * @namespace display 
 * @requires 
 * @class GraphicsGradientFill
 * @author Yehia Shouman
 */
var GraphicsGradientFill = function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
	this.type= type || "linear";
	this.colors = colors || null;
	this.alphas= alphas|| null;
	this.ratios=ratios|| null;
	this.matrix= matrix||null;
	this.spreadMethod= spreadMethod||SpreadMethod.PAD;
	this.interpolationMethod=interpolationMethod||InterpolationMethod.RGB;
	this.focalPointRatio= focalPointRatio||0.0;
			
	this.__getClassType = function() {
		return "GraphicsGradientFill";
	};
};
GraphicsGradientFill.prototype = new Object();
GraphicsGradientFill.constructor = GraphicsGradientFill;