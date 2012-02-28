/**
 * @namespace geom
 * @requires 
 * @class Point
 * @author Yehia Shouman
 */
var Point = function(x,y){
	 this.x = x || 0;
	 this.y = y || 0;
		this.__getClassType=function(){return "Point";};

};
//Creates a new point.
Point.prototype = new Object();
Point.constructor = Point;
Point.prototype.add= function(v){
	
	return new Point(this.x + v.x, this.y + v.y);
};
//Adds the coordinates of another point to the coordinates of this point to create a new point.
	 	
Point.prototype.clone= function(){
	return new Point(this._x,this._y);
};
//Creates a copy of this Point object.
	 	
Point.prototype.copyFrom= function(sourcePoint){
	this._x = sourcePoint.x;
	this._y = sourcePoint.y;
	
};
//Copies all of the point data from the source Point object into the calling Point object.
	 	
Point.distance= function(pt1, pt2){
	var x = pt1.x - pt2.x;
    var y = pt1.y - pt2.y;
    return Math.sqrt(x * x + y * y);
};
//[static] Returns the distance between pt1 and pt2.
	 	
Point.prototype.equals= function(toCompare){
	return (this.x == toCompare.x && this.y == toCompare.y);
};
//Determines whether two points are equal.
	 	
Point.interpolate= function(pt1, pt2, f){
	return new Point((pt1.x + pt2.x) * f, (pt1.y + pt2.y) * f);
	
};
//[static] Determines a point between two specified points.
	 	
Point.prototype.normalize= function(thickness){
	  var l = this.length();
	  this.x = this.x / l * thickness;
	  this.y = this.y / l * thickness;
};
//Scales the line segment between (0,0) and the current point to a set length.
	 	
Point.prototype.offset= function(dx, dy){
	 this.x += dx;
	  this.y += dy;
};
//Offsets the Point object by the specified amount.
	 	
Point.polar= function(len, angle){
	 return new Point(len * Math.sin(angle), len * Math.cos(angle));
	
};
//[static] Converts a pair of polar coordinates to a Cartesian point coordinate.
	 	
Point.prototype.setTo= function(xa, ya){
	this.x = xa;
	this.y = xa;
};
//Sets the members of Point to the specified values
	 	
Point.prototype.subtract= function(v){
	return new Point(this.x - v.x, this.y - v.y);
	
};
//Subtracts the coordinates of another point from the coordinates of this point to create a new point.
	 	
Point.prototype.toString= function(){
	return "x:"+this._x+",y:"+this._y;
	
};
//Returns a string that contains the values of the x and y coordinates.

Point.prototype.__defineGetter__("x",function(){
	return this._x;
});

Point.prototype.__defineSetter__("x",function(val){
	this._x = val;
});
Point.prototype.__defineGetter__("y",function(){
	return this._y;
});

Point.prototype.__defineSetter__("y",function(val){
	this._y = val;
});
Point.prototype.__defineGetter__("length",function(){
	return Math.sqrt( (this._x^2)+ (this._y^2))  ;
});
