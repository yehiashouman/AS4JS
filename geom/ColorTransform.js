/**
 * @namespace geom
 * @requires 
 * @class ColorTransform
 * @author Yehia Shouman
 */
var ColorTransform= function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset){

	this.redMultiplier = redMultiplier!=undefined? redMultiplier :1;
	this.greenMultiplier = greenMultiplier!=undefined ?greenMultiplier: 1;
	this.blueMultiplier = blueMultiplier!=undefined ?blueMultiplier : 1;
	this.alphaMultiplier = alphaMultiplier!=undefined?alphaMultiplier: 1;
	
	this.redOffset= redOffset!=undefined?redOffset: 0;
	this.greenOffset= greenOffset!=undefined?greenOffset : 0;
	this.blueOffset= blueOffset!=undefined?blueOffset : 0;
	this.alphaOffset= alphaOffset!=undefined?alphaOffset: 0;
	this.__getClassType=function(){return "ColorTransform";};
	
};

ColorTransform.prototype= new Object();
ColorTransform.constructor = ColorTransform;
//Concatenates the ColorTranform object specified by the second parameter with the current ColorTransform object and sets the current object as the result, which is an additive combination of the two color transformations.
ColorTransform.prototype.concat = function(second){
	this.redOffset += second.redOffset * this.redMultiplier;
    this.greenOffset += second.greenOffset * this.greenMultiplier;
    this.blueOffset += second.blueOffset * this.blueMultiplier;
    this.alphaOffset += second.alphaOffset * this.alphaMultiplier;
    this.redMultiplier *= second.redMultiplier;
    this.greenMultiplier *= second.greenMultiplier;
    this.blueMultiplier *= second.blueMultiplier;
    this.alphaMultiplier *= second.alphaMultiplier;
	
};
ColorTransform.prototype.toString=function(){
	var str="["+(this.__getClassType?this.__getClassType(): "Object")+" ";
	for(var i in this)
		{
			if(this.hasOwnProperty(i) && this[i].toString().indexOf("function")==-1){
				str+=i+"="+this[i]+" ";
			};
		};
	str+="]";
	return str;
	
};
