/**
 * @namespace filters 
 * @requires 
 * @class ConvolutionFilter
 * @author Yehia Shouman
 */
var ConvolutionFilter = function(matrixX,matrixY,matrix,divisor,bias,preserveAlpha,clamp,color,alpha) {
	BitmapFilter.call(this);
	this.matrixX = matrixX||0;
	this.matrixY =matrixY ||0;
	this.matrix = matrix || null;
	this.divisor = divisor || 1.0;
	this.bias = bias || 0.0;
	this.preserveAlpha = preserveAlpha || true;
	this.clamp = clamp || true;
	this.color = color || 0;
	this.alpha = alpha || 0.0;
	

	this.__getClassType = function() {
		return "ConvolutionFilter";
	};
	var ref=this;
	this.clone = function(){
		return new ConvolutionFilter(ref.matrixX,ref.matrixY,ref.matrix,ref.divisor,ref.bias,ref.preserveAlpha,ref.clamp,ref.color,ref.alpha);
	};
};
ConvolutionFilter.prototype = new BitmapFilter();
ConvolutionFilter.constructor = ConvolutionFilter;