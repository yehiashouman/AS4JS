/**
 * @namespace geom
 * @requires 
 * @class Matrix
 * @author Yehia Shouman
 */
function Matrix(a, b, c, d, tx, ty)
{
    this.a  = a !== undefined ? a : 1;
    this.b  = b ? b : 0;
    this.c  = c ? c : 0;
    this.d  = d !== undefined ? d : 1;
    this.tx = tx ? tx : 0;
    this.ty = ty ? ty : 0;
    
	this.__getClassType=function(){return "Matrix";};

    return this;
}

//Returns the result of applying the geometric transformation represented by the Matrix object to the specified point.
Matrix.prototype.transformPoint = function (point) {
    return new Point(
        (point.x*this.a)+(point.y*this.c)+this.tx,
        (point.x*this.b)+(point.y*this.d)+this.ty
    );
};

//Translates the matrix along the x and y axes, as specified by the dx and dy parameters.
Matrix.prototype.translate = function (dx, dy) {
    this.tx += dx;
    this.ty += dy;
};


//Applies a scaling transformation to the matrix.
Matrix.prototype.scale = function (sx, sy) {
    this.concat(new Matrix(sx, 0, 0, sy, 0, 0));
    return this;
};

//Concatenates a matrix with the current matrix, effectively combining the geometric effects of the two.
Matrix.prototype.concat = function (m) {

	 var a1  = this.a;
     var b1  = this.b;
     var c1  = this.c;
     var d1  = this.d;
     var tx1 = this.tx;
     var ty1 = this.ty;
     var a2  = m.a;
     var b2  = m.b;
     var c2  = m.c;
     var d2  = m.d;
     var tx2 = m.tx;
     var ty2 = m.ty;
     
     this.a  = a1  * a2 + b1  * c2;
     this.b  = a1  * b2 + b1  * d2;
     this.c  = c1  * a2 + d1  * c2;
     this.d  = c1  * b2 + d1  * d2;
     this.tx = tx1 * a2 + ty1 * c2 + tx2;
     this.ty = tx1 * b2 + ty1 * d2 + ty2;
};

//Performs the opposite transformation of the original matrix.
Matrix.prototype.invert = function () {

    var adbc = ((this.a*this.d)-(this.b*this.c));

    this.copy(new Matrix(
        (this.d/adbc), (-this.b/adbc),
        (-this.c/adbc), (this.a/adbc),
        (((this.c*this.ty)-(this.d*this.tx))/adbc),
        -(((this.a*this.ty)-(this.b*this.tx))/adbc)
    ));
    
    return this;
};

//Returns a new Matrix object that is a clone of this matrix, with an exact copy of the contained object.
Matrix.prototype.clone = function () {

    return new Matrix(
        this.a, this.b,
        this.c, this.d,
        this.tx, this.ty
    );
    
};

Matrix.prototype.zoomAroundPoint = function (center, zoomFactor) {
    var translateToOrigin = new Matrix();
    translateToOrigin.translate(-center.x, -center.y);
    
    var scale = new Matrix();
    scale.scale(zoomFactor, zoomFactor);
    
    var translateFromOrigin = new Matrix();
    translateFromOrigin.translate(center.x, center.y);

    var zoom = new Matrix();
    zoom.concat(translateToOrigin);
    zoom.concat(scale);
    zoom.concat(translateFromOrigin);
    
    this.concat(zoom);
    return this;
};

//Sets the members of Matrix to the specified values
Matrix.prototype.setTo=function(aa, ba, ca, da, txa, tya){
    this.a = aa;
    this.b = ba;
    this.c = ca;
    this.d = da;
    this.tx = txa;
    this.ty = tya;
    return this;
};

//Copies all of the matrix data from the source Point object into the calling Matrix object.
Matrix.prototype.copyFrom = function(sourceMatrix) {
    this.a = sourceMatrix.a;
    this.b = sourceMatrix.b;
    this.c = sourceMatrix.c;
    this.d = sourceMatrix.d;
    this.tx = sourceMatrix.tx;
    this.ty = sourceMatrix.ty;
    
    return this;
};
//Returns a text value listing the properties of the Matrix object.
Matrix.prototype.toString=function(){
	 var result = '{';
	    result += '"a":'+this.a+',';
	    result += '"b":'+this.b+',';
	    result += '"c":'+this.c+',';
	    result += '"d":'+this.d+',';
	    result += '"tx":'+this.tx+',';
	    result += '"ty":'+this.ty;
	    result += '}';
	    
	    return result;

};
	
 	 	
Matrix.prototype.copyColumnFrom=function(column, vector3D){
	//TODO Matrix.copyColumnFrom
};
//Copies a Vector3D object into specific column of the calling Matrix3D object.
Matrix.prototype.copyColumnTo=function(column, vector3D){
	//TODO Matrix.copyColumnTo
};
//Copies specific column of the calling Matrix object into the Vector3D object.
Matrix.prototype.copyRowFrom=function(row, vector3D){
	//TODO Matrix.copyRowFrom
};
//Copies a Vector3D object into specific row of the calling Matrix object.
Matrix.prototype.copyRowTo=function(row, vector3DD){
	//TODO Matrix.copyRowTo
};
//Copies specific row of the calling Matrix object into the Vector3D object.
Matrix.prototype.createBox=function(scaleX, scaleY, rotation, tx, ty){
	  if (rotation === undefined)
      {
          rotation = 0;
      }
      if (tx === undefined)
      {
          tx = 0;
      }
      if (ty === undefined)
      {
          ty = 0;
      }
      
      var cos = Math.cos(rotation);
      var sin = Math.sin(rotation);
      
      this.a  = cos * scaleX;
      this.b  = sin * scaleY;
      this.c  = sin * scaleX;
      this.d  = cos * scaleY;
      this.tx = tx;
      this.ty = ty;
};
//Includes parameters for scaling, rotation, and translation.
Matrix.prototype.createGradientBox=function(width, height, rotation, tx, ty){
	
	 if (rotation === undefined)
     {
         rotation = 0;
     }
     if (tx === undefined)
     {
         tx = 0;
     }
     if (ty === undefined)
     {
         ty = 0;
     }
     
     //this.createBox((width / 1638.4) , (height / 1638.4) , rotation, tx + width / 2, ty + height / 2);
     var scaleX = width / 1638.4;
     var scaleY = height / 1638.4;
     
     var cos = Math.cos(rotation);
     var sin = Math.sin(rotation);
     
     this.a  = cos * scaleX;
     this.b  = sin * scaleY;
     this.c  = sin * scaleX;
     this.d  = cos * scaleY;
     this.tx = tx + width / 2;
     this.ty = ty + height / 2;
	
};
//Creates the specific style of matrix expected by the beginGradientFill() and lineGradientStyle() methods of the Graphics class.
Matrix.prototype.identity=function(){
	this.a = 1;
    this.c = 0;
    this.tx = 0;
    
    this.b = 0;
    this.d = 1;
    this.ty = 0;
    
    
    
};
//Sets each matrix property to a value that causes a null transformation.
Matrix.prototype.deltaTransformPoint=function(point){
	var x = point.x;
    var y = point.y;
    return new Point(x * this.a + y * this.c,
            x * this.b + y * this.d);
};
//Given a point in the pretransform coordinate space, returns the coordinates of that point after the transformation occurs. 	 	
Matrix.prototype.rotate=function(angle){
	var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var a  = this.a;
    var b  = this.b;
    var c  = this.c;
    var d  = this.d;
    var tx = this.tx;
    var ty = this.ty;

    this.a  = a  * cos - b  * sin;
    this.b  = b  * cos + a  * sin;
    this.c  = c  * cos - d  * sin;
    this.d  = d  * cos + c  * sin;
    this.tx = tx * cos - ty * sin;
    this.ty = ty * cos + tx * sin;
    
};
//Applies a rotation transformation to the Matrix object.
