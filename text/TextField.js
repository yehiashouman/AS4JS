/**
 * @namespace text
 * @requires display.InteractiveObject, display.DisplayObject, events.EventDispatcher
 * @class TextField
 * @author Yehia Shouman
 */

var TextField=function(){
	InteractiveObject.call(this);
	this.setStyle("border","1px solid #000000");
	this.setStyle("width",50);
	this.setStyle("height",25);
	var clipStr = "rect("+0+"px, "+this.width+"px, "+this.height+"px, "+0+"px)";
	this.setStyle("position","absolute"); 
	this.setStyle("clip", clipStr);
	//trace("herello");
	this.__getClassType=function(){return "TextField";};
	this.__olderBorderWidth =1;
	
};
TextField.prototype = new InteractiveObject();
TextField.constructor = TextField;
//public property text setter and getter
defineAccessorProperty(TextField, "text", function(val) {
	while(this.container.childNodes.length >= 1) {
		this.container.removeChild(this.container.firstChild);
	 }
	 this.container.appendChild(this.container.ownerDocument.createTextNode(val));
}, function() {
	return this.container.firstChild? this.container.firstChild.nodeValue : "";
});

//public property background setter and getter
defineAccessorProperty(TextField, "background", function(val) {
	 if(val){
		 this.setStyle("background-color",this.getStyle("backgroundcolorCached"));
	 }else{
		 this.setStyle("backgroundcolorCached",this.getStyle("background-color"));
		 this.removeStyle("background-color");
	 }
}, function() {
	return this.getStyle("background-color")? true : false;
});
//public property backgroundColor setter and getter
defineAccessorProperty(TextField, "backgroundColor", function(val) {
	this.opaqueBackground=val;
}, function() {
	return this.opaqueBackground;
});
//public property length setter and getter
defineAccessorProperty(TextField, "length", function(val) {
	//TODO implement TextField.length 
}, function() {
	return this.text.length;
});
//public property htmlText setter and getter
defineAccessorProperty(TextField, "htmlText", function(val) {
	 this.container.innerHTML = val;
}, function() {
	return this.container.innerHTML;
});
//public property width setter and getter
defineAccessorProperty(TextField, "width", function(val) {
	this.setStyle("width",val);
	var clipStr = "rect("+0+"px, "+(this.width+2)+"px, "+(this.height+2)+"px, "+0+"px)";
	this.setStyle("position","absolute"); 
	this.setStyle("clip", clipStr);
}, function() {
	return parseInt(this.getStyle("width"));
});
//public property height setter and getter
defineAccessorProperty(TextField, "height", function(val) {
	this.setStyle("height",val);
	var clipStr = "rect("+0+"px, "+(this.width+2)+"px, "+(this.height+2)+"px, "+0+"px)";
	this.setStyle("position","absolute"); 
	this.setStyle("clip", clipStr);
}, function() {
	return parseInt(this.getStyle("height"));
});
//public property textColor setter and getter
defineAccessorProperty(TextField, "textColor", function(val) {
	var clr = (val.toString(16));
	while(clr.length<6){
		clr="0"+clr;
	}
	this.setStyle("color","#"+clr);
}, function() {
	return parseInt(this.getStyle("color"));
});
//public property border setter and getter
defineAccessorProperty(TextField, "border", function(val) {
	
	this.setStyle("border",(val? 1 : 0)+"px solid #"+(parseInt(this.getStyle("border").substr(9,this.getStyle("border").length))));
}, function() {
	
	return parseInt(this.getStyle("border").substr(0,1))==0? false : true;
});

//public property borderColor setter and getter
defineAccessorProperty(TextField, "borderColor", function(val) {
	var clr = (val.toString(16));
	while(clr.length<6){
		clr="0"+clr;
	}
	this.setStyle("border","1px solid #"+clr);
}, function() {
	return parseInt(this.getStyle("border").substr(9,this.getStyle("border").length));
});
//public property alwaysShowSelection setter and getter
defineAccessorProperty(TextField, "alwaysShowSelection", function(val) {
	//TODO implement TextField.alwaysShowSelection 
}, function() {
	return null;
});
//public property antiAliasType setter and getter
defineAccessorProperty(TextField, "antiAliasType", function(val) {
	//TODO implement TextField.antiAliasType 
}, function() {
	return null;
});
//public property autoSize setter and getter
defineAccessorProperty(TextField, "autoSize", function(val) {
	if(val){
	var h = this.getStyle("height");
	var clipStr = "rect("+0+"px, 100%, "+h+"px, "+0+"px)";
	this.setStyle("height",""); 
	this.setStyle("clip", "");
	};
	//TODO implement TextField.autoSize 
}, function() {
	return null;
});
//public property bottomScrollV setter and getter
defineAccessorProperty(TextField, "bottomScrollV", function(val) {
	//TODO implement TextField.bottomScrollV 
}, function() {
	return null;
});
//public property caretIndex setter and getter
defineAccessorProperty(TextField, "caretIndex", function(val) {
	//TODO implement TextField.caretIndex 
}, function() {
	return null;
});
//public property condenseWhite setter and getter
defineAccessorProperty(TextField, "condenseWhite", function(val) {
	//TODO implement TextField.condenseWhite 
}, function() {
	return null;
});
//public property defaultTextFormat setter and getter
defineAccessorProperty(TextField, "defaultTextFormat", function(val) {
	//TODO implement TextField.defaultTextFormat 
}, function() {
	return null;
});
//public property displayAsPassword setter and getter
defineAccessorProperty(TextField, "displayAsPassword", function(val) {
	//TODO implement TextField.displayAsPassword 
}, function() {
	return null;
});
//public property embedFonts setter and getter
defineAccessorProperty(TextField, "embedFonts", function(val) {
	//TODO implement TextField.embedFonts 
}, function() {
	return null;
});
//public property gridFitType setter and getter
defineAccessorProperty(TextField, "gridFitType", function(val) {
	//TODO implement TextField.gridFitType 
}, function() {
	return null;
});
//public property maxChars setter and getter
defineAccessorProperty(TextField, "maxChars", function(val) {
	//TODO implement TextField.maxChars 
}, function() {
	return null;
});
//public property maxScrollH setter and getter
defineAccessorProperty(TextField, "maxScrollH", function(val) {
	//TODO implement TextField.maxScrollH 
}, function() {
	return null;
});
//public property maxScrollV setter and getter
defineAccessorProperty(TextField, "maxScrollV", function(val) {
	//TODO implement TextField.maxScrollV 
}, function() {
	return null;
});
//public property mouseWheelEnabled setter and getter
defineAccessorProperty(TextField, "mouseWheelEnabled", function(val) {
	//TODO implement TextField.mouseWheelEnabled 
}, function() {
	return null;
});
//public property multiline setter and getter
defineAccessorProperty(TextField, "multiline", function(val) {
	//TODO implement TextField.multiline 
}, function() {
	return null;
});
//public property numLines setter and getter
defineAccessorProperty(TextField, "numLines", function(val) {
	//TODO implement TextField.numLines 
}, function() {
	return null;
});
//public property restrict setter and getter
defineAccessorProperty(TextField, "restrict", function(val) {
	//TODO implement TextField.restrict 
}, function() {
	return null;
});
//public property scrollH setter and getter
defineAccessorProperty(TextField, "scrollH", function(val) {
	//TODO implement TextField.scrollH 
}, function() {
	return null;
});
//public property scrollV setter and getter
defineAccessorProperty(TextField, "scrollV", function(val) {
	//TODO implement TextField.scrollV 
}, function() {
	return null;
});
//public property selectable setter and getter
defineAccessorProperty(TextField, "selectable", function(val) {
	//TODO implement TextField.selectable 
}, function() {
	return null;
});
//public property selectionBeginIndex setter and getter
defineAccessorProperty(TextField, "selectionBeginIndex", function(val) {
	//TODO implement TextField.selectionBeginIndex 
}, function() {
	return null;
});
//public property selectionEndIndex setter and getter
defineAccessorProperty(TextField, "selectionEndIndex", function(val) {
	//TODO implement TextField.selectionEndIndex 
}, function() {
	return null;
});
//public property sharpness setter and getter
defineAccessorProperty(TextField, "sharpness", function(val) {
	//TODO implement TextField.sharpness 
}, function() {
	return null;
});

//public property styleSheet setter and getter
defineAccessorProperty(TextField, "styleSheet", function(val) {
	//TODO implement TextField.styleSheet 
}, function() {
	return null;
});
//public property textHeight setter and getter
defineAccessorProperty(TextField, "textHeight", function(val) {
	//TODO implement TextField.textHeight 
}, function() {
	return null;
});
//public property textInteractionMode setter and getter
defineAccessorProperty(TextField, "textInteractionMode", function(val) {
	//TODO implement TextField.textInteractionMode 
}, function() {
	return null;
});
//public property textWidth setter and getter
defineAccessorProperty(TextField, "textWidth", function(val) {
	//TODO implement TextField.textWidth 
}, function() {
	return null;
});
//public property thickness setter and getter
defineAccessorProperty(TextField, "thickness", function(val) {
	//TODO implement TextField.thickness 
}, function() {
	return null;
});
//public property type setter and getter
defineAccessorProperty(TextField, "type", function(val) {
	//TODO implement TextField.type 
}, function() {
	return null;
});
//public property useRichTextClipboard setter and getter
defineAccessorProperty(TextField, "useRichTextClipboard", function(val) {
	//TODO implement TextField.useRichTextClipboard 
}, function() {
	return null;
});
//public property wordWrap setter and getter
defineAccessorProperty(TextField, "wordWrap", function(val) {
	//TODO implement TextField.wordWrap 
}, function() {
	return null;
});

DisplayObject.prototype.appendText = function(newText){
	this.text+=newText;	
};
//TODO Text Class Properties and Methods
DisplayObject.prototype.getCharBoundaries = function(charIndex){};
DisplayObject.prototype.getCharIndexAtPoint = function(x,y){};
DisplayObject.prototype.getFirstCharInParagraph = function(charIndex){};
DisplayObject.prototype.getImageReference = function(id){};
DisplayObject.prototype.getLineIndexAtPoint = function(x,y){};
DisplayObject.prototype.getLineIndexOfChar = function(charIndex){};
DisplayObject.prototype.getLineLength = function(lineIndex){};
DisplayObject.prototype.getLineMetrics = function(lineIndex){};
DisplayObject.prototype.getLineOffset = function(lineIndex){};
DisplayObject.prototype.getLineText = function(lineIndex){};
DisplayObject.prototype.getParagraphLength = function(charIndex){};
DisplayObject.prototype.getTextFormat = function(beginIndex,endIndex){};
DisplayObject.prototype.isFontCompatible= function(fontName,fontStyle){};
DisplayObject.prototype.replaceSelectedText= function(value){};
DisplayObject.prototype.replaceText= function(beginIndex,endIndex,newText){};
DisplayObject.prototype.setSelection= function(beginIndex,endIndex){};
DisplayObject.prototype.setTextFormat= function(format,beginIndex,endIndex){};
