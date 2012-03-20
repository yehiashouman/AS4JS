/**
 * @namespace display
 * @requires Capabilities, Sprite, InteractiveObject, DispalyObject, EventDispatcher, Bitmap, Vector
 * @class BitmapData
 * @author Yehia Shouman
 */

//TODO implement BitmapData Class
var BitmapData= function(width,height, transparent, fillColor ){
	this.image = new Image();
	this.canvas = document.createElement("canvas");
	this.canvas.width = viewport().width;
	this.canvas.height = viewport().width;
	this.context = this.canvas.getContext("2d");
	this.transparent = transparent;
	if(transparent==false){
		this.context.fillStyle=DisplayObject.intHex2RGBA(0xFFFFFF,1);
		this.context.beginPath();
		this.context.rect(0,0,width,height);
		this.context.closePath();
		this.context.fill();
	}
	this.fillColor= fillColor;
	if(fillColor!=undefined){
	this.context.fillStyle=DisplayObject.intHex2RGBA(fillColor,1);
	this.context.beginPath();
	this.context.rect(0,0,width,height);
	this.context.closePath();
	this.context.fill();
	}
	this.__getClassType=function(){return "BitmapData";};
	this.locked= false;
	var ref=this;
	this.__isLocked = function(){
		return ref.locked;
	};
	
	
};

BitmapData.prototype = new Object();
BitmapData.constructor = BitmapData;
//public property height setter and getter
defineAccessorProperty(BitmapData, "height", function(val) {
	//TODO implement BitmapData.height 
}, function() {
	return this.canvas.height;
});
//public property rect setter and getter
defineAccessorProperty(BitmapData, "rect", function(val) {
	//TODO implement BitmapData.rect 
}, function() {
	return new Rectangle(0,0,this.canvas.width,this.canvas.height);
});
/*
BitmapData.prototype.__defineGetter__("transparent",function(){
	return false;
});
*/
//public property width setter and getter
defineAccessorProperty(BitmapData, "width", function(val) {
	//TODO implement BitmapData.width 
}, function() {
	return this.canvas.width;
});

 	 	
//Takes a source image and a filter object and generates the filtered image.

 	 	
BitmapData.prototype.clone=function(){
	var newBmp = new BitmapData(this.canvas.width,this.canvas.height,this.transparent,this.fillColor);
	newBmp.putImageData(this.getImageData());
	return newBmp;
};
//Returns a new BitmapData object that is a clone of the original instance with an exact copy of the contained bitmap.
 	 	
BitmapData.prototype.colorTransform=function(rect, colorTransform){
		var data = 	this.context.getImageData(rect.x,rect.y,rect.width,rect.height);
		var len = rect.width*rect.height*4;
		var i =len;
		while(i>0){
			
			/*data.data[i+0] = Math.min(Math.max((data.data[i+0]*colorTransform.redMultiplier)+(0.5*(colorTransform.redOffset)),0),255);
			data.data[i+1] = Math.min(Math.max((data.data[i+1]*colorTransform.greenMultiplier)+(0.5*(colorTransform.greenOffset)),0),255);
			data.data[i+2] = Math.min(Math.max((data.data[i+2]*colorTransform.blueMultiplier)+(0.5*(colorTransform.blueOffset)),0),255);
			data.data[i+3] = Math.min(Math.max((data.data[i+3]*colorTransform.alphaMultiplier)+(0.5*(colorTransform.alphaOffset)),0),255);
			*/
			data.data[i+0] = data.data[i+0]*colorTransform.redMultiplier+colorTransform.redOffset;
			data.data[i+1] = data.data[i+1]*colorTransform.greenMultiplier+colorTransform.greenOffset;
			data.data[i+2] = data.data[i+2]*colorTransform.blueMultiplier+colorTransform.blueOffset;
			data.data[i+3] = data.data[i+3]*colorTransform.alphaMultiplier+colorTransform.alphaOffset;
			
			i-=4;
		};
		this.context.putImageData(data,0,0);
	
};
//Adjusts the color values in a specified area of a bitmap image by using a ColorTransform object.
 	 	
BitmapData.prototype.compare=function(otherBitmapData){
	return otherBitmapData.context.getImageData(0,0,otherBitmapData.canvas.width,otherBitmapData.canvas.height).data==
		this.context.getImageData(0,0,this.canvas.width,this.canvas.height).data;
};
//Compares two BitmapData objects.
BitmapData.prototype.copyChannel=function(sourceBitmapData, sourceRect, destPoint, sourceChannel, destChannel){
	//TODO TEST BitmapData.copyChannel
	var fromData= 	sourceBitmapData.context.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
	var toData= this.context.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
	var len = sourceRect.width*sourceRect.height*4;
	var i =len;
	var sourceIdx=BitmapDataChannel.MAP[sourceChannel];
	var destIdx=BitmapDataChannel.MAP[destChannel];
	while(i>0){
		toData.data[i+destIdx] = fromData.data[i+sourceIdx];
		i-=4;
	};
	this.context.putImageData(toData,destPoint.x,destPoint.y);
	
};
//Transfers data from one channel of another BitmapData object or the current BitmapData object into a channel of the current BitmapData object.
 	 	
BitmapData.prototype.copyPixels=function(sourceBitmapData, sourceRect, destPoint, alphaBitmapData , alphaPoint , mergeAlpha){
	this.context.putImageData(sourceBitmapData.context.getImageData(0,0,sourceBitmapData.canvas.width,sourceBitmapData.canvas.height)
			, destPoint.x, destPoint.y , sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height);
	
	
};
//Provides a fast routine to perform pixel manipulation between images with no stretching, rotation, or color effects.
 	 	
BitmapData.prototype.dispose=function(){
	this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
	
};
//Frees memory that is used to store the BitmapData object.
 	 	
BitmapData.prototype.draw=function(source, matrix , colorTransform, blendMode , clipRect , smoothing){

	
	this.dispose();
	switch(source.__getClassType()){
	case "Bitmap" :
		this.putImageData(source.bitmapData.context.getImageData(0,0,source.bitmapData.canvas.width,source.bitmapData.canvas.height));
		
		break;
	case "BitmapData":
		var data = source.getImageData();
		
		this.putImageData(data);
		
		break;
	case "Loader":
		this.context.restore();
		//var biggerDimension = Math.max(source.content.bitmapData.canvas.width,source.content.bitmapData.canvas.height);
		this.canvas.width = source.content.bitmapData.canvas.width;
		this.canvas.height= source.content.bitmapData.canvas.height;
		this.context.translate(this.canvas.width/2,this.canvas.height/2);
		this.context.transform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
		//this.context.drawImage(source.content.image,-this.canvas.width/2,-this.canvas.height/2,this.canvas.width,this.canvas.height);
		this.context.putImageData(source.content.bitmapData.context.getImageData(0,0,source.content.bitmapData.canvas.width,source.content.bitmapData.canvas.height),0,0);
		
		
		break;
	default:
		this.context.drawImage(source);
		break;
	}
	
	if(colorTransform!=undefined){
		
	this.colorTransform(new Rectangle(0,0,this.canvas.width,this.canvas.height), colorTransform);
	};
	
	try{
		//update bitmap image if there is a bitmap owner
		this.owner.image.src = this.canvas.toDataURL();
	}catch(e){};
	
};
//Draws the source display object onto the bitmap image, using the Flash runtime vector renderer.
 	 	
BitmapData.prototype.fillRect=function(rect, color){
	this.context.fillStyle=this.owner.intHex2RGBA(color,1);
	this.context.beginPath();
	this.context.rect(x,y,width,height);
	this.context.closePath();
	this.context.fill();
	
	
};
BitmapData.prototype.putImageData = function(data)
{
	this.context.putImageData(data,0,0);
};
BitmapData.prototype.getImageData = function(){
	return this.context.getImageData(0,0,this.canvas.width,this.canvas.height);
};
//Fills a rectangular area of pixels with a specified ARGB color.
BitmapData.prototype.floodFill=function(x, y, color){};
//Performs a flood fill operation on an image starting at an (x, y) coordinate and filling with a certain color.
	 	
BitmapData.prototype.generateFilterRect=function(sourceRect, filter){};
//Determines the destination rectangle that the applyFilter() method call affects, given a BitmapData object, a source rectangle, and a filter object.
 	 	
BitmapData.prototype.getColorBoundsRect=function(mask, color, findColor){};
//Determines a rectangular region that either fully encloses all pixels of a specified color within the bitmap image (if the findColor parameter is set to true) or fully encloses all pixels that do not include the specified color (if the findColor parameter is set to false).
 	 	
BitmapData.prototype.getPixel=function(x, y){
	var pixel= this.context.getImageData(x,y,1,1).data;
	return DisplayObject.RGBComp2intHex(pixel[0],pixel[1],pixel[2]);
	
};
//Returns an integer that represents an RGB pixel value from a BitmapData object at a specific point (x, y).
 	 	
BitmapData.prototype.getPixel32=function(x, y){
	var pixel= this.context.getImageData(x,y,1,1).data;
	return DisplayObject.RGBComp2intHex(pixel[0],pixel[1],pixel[2],pixel[3]);
};
//Returns an ARGB color value that contains alpha channel data and RGB data.

BitmapData.prototype.getPixels=function(rect){
	
};
//Generates a byte array from a rectangular region of pixel data.
 	 	
BitmapData.prototype.getVector=function(rect){};
//Generates a vector array from a rectangular region of pixel data.
 	 	
BitmapData.prototype.histogram=function(hRect ){};
//Computes a 256-value binary number histogram of a BitmapData object.
 	 	
BitmapData.prototype.hitTest=function(firstPoint, firstAlphaThreshold, secondObject, secondBitmapDataPoint , secondAlphaThreshold ){};
//Performs pixel-level hit detection between one bitmap image and a point, rectangle, or other bitmap image.
 	 	
BitmapData.prototype.lock=function(){
	this.locked =true;
};
//Locks an image so that any objects that reference the BitmapData object, such as Bitmap objects, are not updated when this BitmapData object changes.
 	 	
BitmapData.prototype.merge=function(sourceBitmapData, sourceRect, destPoint, redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier){};
//Performs per-channel blending from a source image to a destination image.
 	 	
BitmapData.prototype.noise=function(randomSeed, low , high , channelOptions , grayScale){
	
	
};
//Fills an image with pixels representing random noise.
 	 	
BitmapData.prototype.paletteMap=function(sourceBitmapData, sourceRect, destPoint, redArray, greenArray, blueArray, alphaArray){};
//Remaps the color channel values in an image that has up to four arrays of color palette data, one for each channel.
 	 	
BitmapData.prototype.perlinNoise=function(baseX, baseY, numOctaves, randomSeed, stitch, fractalNoise, channelOptions , grayScale, offsets){};
//Generates a Perlin noise image.
 	 	
BitmapData.prototype.pixelDissolve=function(sourceBitmapData, sourceRect, destPoint, randomSeed , numPixels , fillColor ){};
//Performs a pixel dissolve either from a source image to a destination image or by using the same image.
 	 	
BitmapData.prototype.scroll=function(x, y){};
//Scrolls an image by a certain (x, y) pixel amount.
 	 	
BitmapData.prototype.setPixel=function(x, y, color){
	var pixel= this.context.getImageData(x,y,1,1);
	var hex= DisplayObject.intHex2HexStr(color,true);
	pixel.data[0] = parseInt("0x"+hex.substr(2,2));
	pixel.data[1] = parseInt("0x"+hex.substr(4,2));
	pixel.data[2] = parseInt("0x"+hex.substr(6,2));
	pixel.data[3] = 255;
	this.context.putImageData(pixel,x,y);
};
//Sets a single pixel of a BitmapData object.
 	 	
BitmapData.prototype.setPixel32=function(x, y, color){
	var pixel= this.context.getImageData(x,y,1,1);
	var hex= DisplayObject.intHex2HexStr(color,true);
	pixel.data[0] = parseInt("0x"+hex.substr(2,2));
	pixel.data[1] = parseInt("0x"+hex.substr(4,2));
	pixel.data[2] = parseInt("0x"+hex.substr(6,2));
	pixel.data[3] = parseInt("0x"+hex.substr(0,2));
	this.context.putImageData(pixel,x,y);
	
};
//Sets the color and alpha transparency values of a single pixel of a BitmapData object.
 	 	
BitmapData.prototype.setPixels=function(rect, inputByteArray){};
//Converts a byte array into a rectangular region of pixel data.
	 	
BitmapData.prototype.setVector=function(rect, inputVector){};
//Converts a Vector into a rectangular region of pixel data.
 	 	
BitmapData.prototype.threshold=function(sourceBitmapData, sourceRect, destPoint, operation, threshold, color , mask, copySource){};
//Tests pixel values in an image against a specified threshold and sets pixels that pass the test to new color values.
 	 	
BitmapData.prototype.unlock=function(changeRect ){
	this.locked = false;
};
//Unlocks an image so that any objects that reference the BitmapData object, such as Bitmap objects, are updated when this BitmapData object changes.

