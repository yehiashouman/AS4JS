/**
 * @namespace display
 * @requires 
 * @class Bitmap
 * @author Yehia Shouman
 */
//TODO implement Bitmap Class

var Bitmap =  function(pbitmapData,pixelSnapping,smoothing){
	DisplayObject.call(this);
	this.image = new Image();
	
	this.container.appendChild(this.image);
	this.__bmp= pbitmapData || new BitmapData(100, 100, true, 0x000000);
	this.__bmp.owner =this;
	var ref=this;
	var __handleImageLoad=function(){
		ref.__bmp.canvas.width = ref.image.width;
		ref.__bmp.canvas.height= ref.image.height;
		//this actually fixes a bug in html where it doesn't set the attribute of the html tag .. 
		//the right hand side is the getter data of the image data (not the html tag), when you set it like this it changes the html tag attribute
		//this is important to simulate flash's behavior when you try use the loader and try to change one dimension (width and height and leave the other)
		//and because html's default is to maintain aspect ratio if you didn't specify both dimensions (in case they are different), we need to 
		//make sure the width and height are set on the html tag with the original image width and height so that when we amend one dimension like width
		//it don't maintain aspect ratio (like flash) and not like html (where it maintains it) - Pheeww! can't believe i just attempted to explain that!
		
		ref.image.width = ref.image.width;
		ref.image.height = ref.image.height;
		ref.__bmp.context.drawImage(ref.image,0,0);
	};
	
	this.image.addEventListener("load",__handleImageLoad);
	this.image.src = this.__bmp.canvas.toDataURL();
	var _pixelSnap = pixelSnapping || "auto";
	var _smooth = smoothing || false;
	this.__defineGetter__("bitmapData",function(){
		return this.__bmp;
	});

	this.__defineSetter__("bitmapData",function(val){
		__bmp= val;
		if(!val.__isLocked()){
			var imgURL = __bmp.canvas.toDataURL();
			this.image.src = imgURL;
			
		}
	});
	this.__defineGetter__("pixelSnapping",function(){
		return _pixelSnap;
	});
	this.__defineSetter__("pixelSnapping",function(val){
		_pixelSnap = val;
		
	});
	this.__defineGetter__("smoothing",function(){
		return _smooth;
	});
	this.__defineSetter__("smoothing",function(val){
		_smooth = val;
		//TODO Bitmap smoothing
	});
	this.__getClassType=function(){return "Bitmap";};

	
};
Bitmap.constructor = Bitmap;
Bitmap.prototype = new DisplayObject();


Bitmap.prototype.__defineSetter__("width", function(val) {
	this.image.width = val;
	this.__bmp.canvas.width = this.image.width;

});
Bitmap.prototype.__defineSetter__("height", function(val) {
	this.image.height =val;
	this.__bmp.canvas.height= this.image.height;
});
