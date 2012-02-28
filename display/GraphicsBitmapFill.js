/**
 * @namespace display 
 * @requires 
 * @class GraphicsBitmapFill
 * @author Yehia Shouman
 */
var GraphicsBitmapFill = function(bitmapData,matrix,repeat,smooth) {
	this.bitmapData = bitmapData||null;
	this.matrix = matrix||null;
	this.repeat = repeat||true;
	this.smooth = smooth||false;
	this.__getClassType=function(){return "GraphicsBitmapFill";};

};
GraphicsBitmapFill.prototype = new Object();
GraphicsBitmapFill.constructor = GraphicsBitmapFill;