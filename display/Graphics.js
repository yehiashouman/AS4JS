/**
 * @namespace display
 * @requires Capabilities, Sprite, InteractiveObject, DispalyObject, EventDispatcher, Bitmap, Vector
 * @class Graphics
 * @author Yehia Shouman
 */

var Graphics = function(container){
	this.container = container;
	this.canvas = document.createElement("canvas");
	this.canvas.id = "_canvas"+Math.ceil(Math.random()*1000);
//	this.canvas.width = Capabilities.screenResolutionX;
	//this.canvas.height = Capabilities.screenResolutionY;
	this.container.appendChild(this.canvas);
	this.context = this.canvas.getContext("2d");
	this.__getClassType=function(){return "Graphics";};
	
};

Graphics.prototype = new Object();
Graphics.constructor = Graphics;

Graphics.prototype.beginBitmapFill=function(bitmap, matrix, repeat, smooth){
	//TODO Graphics.beginBitmapFill
	var args = [bitmap.image];
	if(repeat){args.push("repeat");};
	this.context.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
	this.context.createPattern.call(this.context,args);
	this.context.fillStyle="pattern";
	this.context.fill();
	
};
Graphics.prototype.beginFill=function(color, alpha ){
	this.context.fillStyle=this.owner.intHex2RGBA(color,alpha);
	
};
Graphics.prototype.beginGradientFill=function(type, colors, alphas, ratios, matrix, spreadMethod , interpolationMethod , focalPointRatio ){
	//TODO Graphics.beginGradientFill
};
Graphics.prototype.beginShaderFill=function(shader, matrix){
	//TODO Graphics.beginShaderFill
};
Graphics.prototype.clear=function(){

	//this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
	this.context.globalCompositeOperation = 'source-over';
	this.context.fillStyle = 'rgba(255,255,255,1)';
	this.context.fillRect (0,0,this.canvas.width,this.canvas.height);
	for (var i = 0; i < 100; i++) {
		//this.context.fillRect(0, 0, 1, 1);
		//this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	
};
Graphics.prototype.copyFrom=function(sourceGraphics){
	//TODO drawGraphicsData.copyFrom
};
Graphics.prototype.curveTo=function(controlX, controlY, anchorX, anchorY){
	
	this.context.quadraticCurveTo(controlX,controlY,anchorX,anchorY);
	this.context.stroke();
	
};
Graphics.prototype.drawCircle=function(x, y, radius){
	this.context.beginPath();
	this.context.arc(x,y,radius,0*Math.PI,2*Math.PI);
	this.context.closePath();
	
};
Graphics.prototype.drawEllipse=function(centerX, centerY, width, height){
	this.context.beginPath();
	this.context.moveTo(centerX, centerY - height/2);
	
	this.context.bezierCurveTo(
		    centerX + width/2, centerY - height/2, // C1
		    centerX + width/2, centerY + height/2, // C2
		    centerX, centerY + height/2); // A2

	this.context.bezierCurveTo(
			centerX - width/2, centerY + height/2, // C3
			centerX - width/2, centerY - height/2, // C4
			centerX, centerY - height/2); // A1
	this.context.closePath();
};
Graphics.prototype.drawGraphicsData=function(graphicsData){
	//TODO Graphics.drawGraphicsData
};
Graphics.prototype.drawPath=function(commands, data, winding ){
	//TODO Graphics.drawPath
};
Graphics.prototype.drawRect=function(x, y, width, height){
	this.context.beginPath();
	this.context.rect(x,y,width,height);
	this.context.closePath();
};
Graphics.prototype.drawRoundRect=function(x, y, width, height, ellipseWidth, ellipseHeight ){
	this.context.beginPath();
	  this.context.moveTo(x + ellipseWidth, y);
	  this.context.lineTo(x + width - ellipseWidth, y);
	  this.context.quadraticCurveTo(x + width, y, x + width, y + ellipseHeight);
	  this.context.lineTo(x + width, y + height - ellipseHeight);
	  this.context.quadraticCurveTo(x + width, y + height, x + width - ellipseWidth, y + height);
	  this.context.lineTo(x + ellipseWidth, y + height);
	  this.context.quadraticCurveTo(x, y + height, x, y + height - ellipseHeight);
	  this.context.lineTo(x, y + ellipseHeight);
	  this.context.quadraticCurveTo(x, y, x + ellipseWidth, y);
	  this.context.closePath();
};
Graphics.prototype.drawTriangles=function(vertices, indices, uvtData, culling ){
	//TODO Graphics.drawTriangles
};
Graphics.prototype.endFill=function(){
	this.context.fill();
	this.context.stroke();

};
Graphics.prototype.lineBitmapStyle=function(bitmap, matrix, repeat, smooth){
	//TODO Graphics.lineBitmapStyle
};
Graphics.prototype.lineGradientStyle=function(type, colors, alphas, ratios, matrix, spreadMethod , interpolationMethod , focalPointRatio ){
	//TODO Graphics.lineGradientStyle
};
Graphics.prototype.lineShaderStyle=function(shader, matrix){
	//TODO Graphics.lineShaderStyle
};
Graphics.prototype.lineStyle=function(thickness , color, alpha , pixelHinting, scaleMode , caps , joints , miterLimit ){
	
	this.context.lineWidth = thickness;
	this.context.lineCap = caps=="none"? "butt": caps;
	this.context.miterLimit = !miterLimit? "3" : miterLimit.toString();
	this.context.lineJoin = joints;
	this.context.strokeStyle = this.owner.intHex2RGBA(color,alpha); 
	
};
Graphics.prototype.lineTo=function(xPos, yPos){
	this.context.lineTo(xPos,yPos);
	this.context.stroke();
};
Graphics.prototype.moveTo=function(xPos, yPos){
	this.context.moveTo(xPos,yPos);
	
};
