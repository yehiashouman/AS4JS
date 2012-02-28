/**
 * @namespace display 
 * @requires 
 * @class GraphicsStroke
 * @author Yehia Shouman
 */
var GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	this.thickness = thickness||Number.NaN;
	this.pixelHinting = pixelHinting||false;
	this.scaleMode = scaleMode || LineScaleMode.NORMAL;
	this.caps = caps || CapsStyle.NONE;
	this.joints = joints || JointStyle.ROUND;
	this.miterLimit = miterLimit || 3;
	this.fill = fill || null;
	this.__getClassType=function(){return "GraphicsStroke";};

};
GraphicsStroke.prototype = new Object();
GraphicsStroke.constructor = GraphicsStroke;