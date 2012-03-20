/**
 * @namespace geom
 * @requires Point
 * @class Rectangle
 * @author Yehia Shouman
 */
var Rectangle = function(x,y,width,height){
	if (typeof x==='undefined')
        x = 0;

    if (typeof y==='undefined')
        y = 0;
        
    if (typeof width==='undefined')
        width = 0;

    if (typeof height==='undefined')
        height = 0;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
	this.__getClassType=function(){return "Rectangle";};

};

Rectangle.prototype = new Object();
Rectangle.constructor = Rectangle;
Rectangle.prototype.clone = function(){
	return new Rectangle(this._x,this._y,this._width,this._height);
};

	 	
Rectangle.prototype.contains=function(x, y){
	return (x>=this.x)&&(y>=this.y)&&(x<=this.right)&&(y<=this.bottom);
	
	
};
//Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
	 	
Rectangle.prototype.containsPoint=function(point){
	return this.contains(point.x, point.y);
	
};
//Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
	 	
Rectangle.prototype.containsRect=function(rect){
	return (rect.x>=this.x)&& (rect.y>=this.y) && (rect.right<=this.right)&&(rect.bottom<=this.bottom);
};
//Determines whether the Rectangle object specified by the rect parameter is contained within this Rectangle object.
	 	
Rectangle.prototype.copyFrom=function(sourceRect){
	this.x = sourceRect.x;
	this.y = sourceRect.y;
	this.width = sourceRect.width;
	this.height = sourceRect.height;
	
};
//Copies all of rectangle data from the source Rectangle object into the calling Rectangle object.
	 	
Rectangle.prototype.equals=function(toCompare){
	return (toCompare.x===this.x)&& (toCompare.y===this.y)&&(toCompare.width===this.width)&&(toCompare.height===this.height);
};
//Determines whether the object specified in the toCompare parameter is equal to this Rectangle object.
	 	
Rectangle.prototype.inflate=function(dx, dy){
	
	this.x -= dx;
    this.y -= dy;
    this.width += (2*dx);
    this.height += (2*dy);
};
//Increases the size of the Rectangle object by the specified amounts, in pixels.
	 	
Rectangle.prototype.inflatePoint=function(point){
	this.inflate(point.x, point.y);
};
//Increases the size of the Rectangle object.
	 	
Rectangle.prototype.intersection=function(toIntersect){
	var xSpan = this.intersectRange(
	        this.x, this.right,
	        toIntersect.x, toIntersect.right);
	    
	    if (!xSpan)
	        return null;
	        
	    var ySpan = this.intersectRange(
	        this.y, this.bottom,
	        toIntersect.y, toIntersect.bottom);
	    
	    if (!ySpan)
	        return null;
	        
	    var result = new Rectangle(
	        xSpan.min,
	        ySpan.min,
	        (xSpan.max-xSpan.min),
	        (ySpan.max-ySpan.min));
	    
	    return result;
};
//If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object.
	 	
Rectangle.prototype.intersects=function(toIntersect){    
    return (this.intersection(toIntersect)!== null);
	
};
//Determines whether the object specified in the toIntersect parameter intersects with this Rectangle object.
	 	
Rectangle.prototype.isEmpty=function(){
	return ((this.width<=0)||(this.height<=0));
	
};
//Determines whether or not this Rectangle object is empty.
	 	
Rectangle.prototype.offset=function(dx, dy){
	 this.x += dx;
	 this.y += dy;
	
};
//Adjusts the location of the Rectangle object, as determined by its top-left corner, by the specified amounts.
	 	
Rectangle.prototype.offsetPoint=function(point){
	this.offset(point.x, point.y);
};
//Adjusts the location of the Rectangle object using a Point object as a parameter.
	 	
Rectangle.prototype.setEmpty=function(){
	 this.x = 0;
	 this.y = 0;
	 this.width = 0;
	 this.height = 0;
	
};
//Sets all of the Rectangle object's properties to 0.
	 	
Rectangle.prototype.setTo=function(xa, ya, widtha, heighta){
	this.x = xa;
	this.y = ya;
	this.width = widtha;
	this.height = heighta;
};
//Sets the members of Rectangle to the specified values
	 	
Rectangle.prototype.toString=function(){
	 var result = '{';
	    result += '"x":'+this.x+',';
	    result += '"y":'+this.y+',';
	    result += '"width":'+this.width+',';
	    result += '"height":'+this.height+'}';
	    
	    return result;
};
//Builds and returns a string that lists the horizontal and vertical positions and the width and height of the Rectangle object.
	 	
Rectangle.prototype.union=function(toUnion){
	 	var minX = Math.min(toUnion.x, this.x);
	    var maxX = Math.max(toUnion.right, this.right);
	    var minY = Math.min(toUnion.y, this.y);
	    var maxY = Math.max(toUnion.bottom, this.bottom);

	    var result = new Rectangle(
	        minX,
	        minY,
	        (maxX-minX),
	        (maxY-minY));
	    
	    return result;
	
};
//Adds two rectangles together to create a new Rectangle object, by filling in the horizontal and vertical space between the two rectangles.

//public property "bottom" setter and getter
defineAccessorProperty(Rectangle, "bottom", function(val) {
	//TODO implement Rectangle."bottom" 
}, function() {
	return (this.y+this.height);
});

defineAccessorProperty(Rectangle, "bottomRight", function(val) {
	//TODO implement Rectangle."bottomRight" 
}, function() {
    return new Point(this.right, this.bottom);
});
defineAccessorProperty(Rectangle, "left", function(val) {
	//TODO implement Rectangle."left" 
}, function() {
    return this.x;
});
defineAccessorProperty(Rectangle, "right", function(val) {
	//TODO implement Rectangle."right" 
}, function() {
    return this.x+this.width;
});
defineAccessorProperty(Rectangle, "size", function(val) {
	//TODO implement Rectangle."size" 
}, function() {
	 return new Point(this.width, this.height);
});
defineAccessorProperty(Rectangle, "top", function(val) {
	//TODO implement Rectangle."top" 
}, function() {
	 return this.y;
});
defineAccessorProperty(Rectangle, "topLeft", function(val) {
	//TODO implement Rectangle."topLeft" 
}, function() {
    return new Point(this.x, this.y);
});
