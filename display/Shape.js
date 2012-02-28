/**
 * @namespace display
 * @requires Graphics, InteractiveObject, Shape, EventDispatcher
 * @class Shape
 * @author Yehia Shouman
 */

var Shape =function(myDiv){
	InteractiveObject.call(this,myDiv);
	this.graphics = new Graphics(this.container);
	this.graphics.owner=this; 
	this.__getClassType=function(){return "Shape";};

	
};
Shape.prototype = new InteractiveObject();
Shape.constructor = Shape;


