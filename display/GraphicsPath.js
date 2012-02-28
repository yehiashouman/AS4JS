/**
 * @namespace display 
 * @requires 
 * @class GraphicsPath
 * @author Yehia Shouman
 */
var GraphicsPath = function(commands,data,winding) {
	this.commands = commands ||null;
	this.data = data ||null;
	this.winding = winding || GraphicsPathWinding.EVEN_ODD;
		this.__getClassType = function() {
		return "GraphicsPath";
	};
};
GraphicsPath.prototype = new Object();
GraphicsPath.constructor = GraphicsPath;
GraphicsPath.prototype.curveTo = function (controlX,controlY,anchorX,anchorY){};
GraphicsPath.prototype.lineTo = function(x,y){};
GraphicsPath.prototype.moveTo = function(x,y){};
GraphicsPath.prototype.wideLineTo = function(x,y){};
GraphicsPath.prototype.wideMoveTo = function(x,y){};
