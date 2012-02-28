/**
 * @namespace display 
 * @requires 
 * @class GraphicsTrianglePath
 * @author Yehia Shouman
 */
var GraphicsTrianglePath = function(vertices, indices, uvData, culling) {
	this.vertices = vertices || null;
	this.indices = indices || null;
	this.uvData  = uvData || null;
	this.culling = culling || "none";
	this.__getClassType=function(){return "GraphicsTrianglePath";};

};
GraphicsTrianglePath.prototype = new Object();
GraphicsTrianglePath.constructor = GraphicsTrianglePath;