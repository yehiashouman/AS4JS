/**
 * @namespace display 
 * @requires 
 * @class GraphicsPathCommand
 * @author Yehia Shouman
 */
var GraphicsPathCommand = function() {
	this.__getClassType=function(){return "GraphicsPathCommand";};
};
GraphicsPathCommand.prototype = new Object();
GraphicsPathCommand.constructor = GraphicsPathCommand;
GraphicsPathCommand.CURVE_TO=3;
GraphicsPathCommand.LINE_TO=2;
GraphicsPathCommand.MOVE_TO=1;
GraphicsPathCommand.NO_OP = 0;
GraphicsPathCommand.WIDE_LINE_TO = 5;
GraphicsPathCommand.WIDE_MOVE_TO = 4;

