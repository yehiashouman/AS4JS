/**
 * @namespace display 
 * @requires 
 * @class GraphicsSolidFill
 * @author Yehia Shouman
 */
var GraphicsSolidFill = function(color,alpha) {
	this.color = color||0;
	this.alpha = alpha || 1;
	this.__getClassType=function(){return "GraphicsSolidFill";};

};
GraphicsSolidFill.prototype = new Object();
GraphicsSolidFill.constructor = GraphicsSolidFill;