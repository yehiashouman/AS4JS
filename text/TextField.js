/**
 * @namespace text
 * @requires display.InteractiveObject, display.DisplayObject, events.EventDispatcher
 * @class TextField
 * @author Yehia Shouman
 */

var TextField=function(){
	InteractiveObject.call(this);
	this.setStyle("border","1px solid #ff0000");
	this.setStyle("width",50);
	this.setStyle("height",25);
	var clipStr = "rect("+0+"px, "+this.width+"px, "+this.height+"px, "+0+"px)";
	this.setStyle("position","absolute"); 
	this.setStyle("clip", clipStr);
	//trace("herello");
	this.__getClassType=function(){return "TextField";};

	
};
TextField.prototype = new InteractiveObject();
TextField.constructor = TextField;
DisplayObject.prototype.__defineGetter__("text",function(){
	return this.container.firstChild.value;
});
DisplayObject.prototype.__defineSetter__("text",function(val){
	while(this.container.childNodes.length >= 1) {
		this.container.removeChild(this.container.firstChild);
	 }
	 this.container.appendChild(this.container.ownerDocument.createTextNode(val));
});
DisplayObject.prototype.__defineGetter__("background",function(){
	return this.getStyle("background-color")? true : false;
});
DisplayObject.prototype.__defineSetter__("background",function(val){
	 if(val){
		 this.setStyle("background-color",this.getStyle("backgroundcolorCached"));
	 }else{
		 this.setStyle("backgroundcolorCached",this.getStyle("background-color"));
		 this.removeStyle("background-color");
	 }
});
DisplayObject.prototype.__defineGetter__("backgroundColor",function(){
	return this.opaqueBackground;
	});
DisplayObject.prototype.__defineSetter__("backgroundColor",function(val){
	this.opaqueBackground=val;

});

DisplayObject.prototype.__defineGetter__("length",function(){
	return this.text.length;
});
DisplayObject.prototype.__defineGetter__("htmlText",function(){
	return this.container.innerHTML;
});
DisplayObject.prototype.__defineSetter__("htmlText",function(val){
	 this.container.innerHTML = val;
});

DisplayObject.prototype.__defineGetter__("width",function(){
	return parseInt(this.getStyle("width"));
});
DisplayObject.prototype.__defineSetter__("width",function(val){
	this.setStyle("width",val);
	var clipStr = "rect("+0+"px, "+(this.width+2)+"px, "+(this.height+2)+"px, "+0+"px)";
	this.setStyle("position","absolute"); 
	this.setStyle("clip", clipStr);
});
DisplayObject.prototype.__defineGetter__("height",function(){
	return parseInt(this.getStyle("height"));
});
DisplayObject.prototype.__defineSetter__("height",function(val){
	this.setStyle("height",val);
	var clipStr = "rect("+0+"px, "+(this.width+2)+"px, "+(this.height+2)+"px, "+0+"px)";
	this.setStyle("position","absolute"); 
	this.setStyle("clip", clipStr);
});
DisplayObject.prototype.__defineGetter__("textColor",function(){
	return parseInt(this.getStyle("color"));
});
DisplayObject.prototype.__defineSetter__("textColor",function(val){
	var clr = (val.toString(16));
	while(clr.length<6){
		clr="0"+clr;
	}
	this.setStyle("color","#"+clr);
});
DisplayObject.prototype.__defineGetter__("borderColor",function(){
	return parseInt(this.getStyle("border").substr(9,this.getStyle("border").length));
});
DisplayObject.prototype.__defineSetter__("borderColor",function(val){
	var clr = (val.toString(16));
	while(clr.length<6){
		clr="0"+clr;
	}
	this.setStyle("border","1px solid #"+clr);
});

DisplayObject.prototype.__defineGetter__("alwaysShowSelection",function(){});
DisplayObject.prototype.__defineSetter__("alwaysShowSelection",function(val){});

DisplayObject.prototype.__defineGetter__("antiAliasType",function(){});
DisplayObject.prototype.__defineSetter__("antiAliasType",function(val){});

DisplayObject.prototype.__defineGetter__("autoSize",function(){});
DisplayObject.prototype.__defineSetter__("autoSize",function(val){});

DisplayObject.prototype.__defineGetter__("bottomScrollV",function(){});
DisplayObject.prototype.__defineGetter__("caretIndex",function(){});

DisplayObject.prototype.__defineGetter__("condenseWhite",function(){});
DisplayObject.prototype.__defineSetter__("condenseWhite",function(val){});

DisplayObject.prototype.__defineGetter__("defaultTextFormat",function(){});
DisplayObject.prototype.__defineSetter__("defaultTextFormat",function(val){});

DisplayObject.prototype.__defineGetter__("displayAsPassword",function(){});
DisplayObject.prototype.__defineSetter__("displayAsPassword",function(val){});

DisplayObject.prototype.__defineGetter__("embedFonts",function(){});
DisplayObject.prototype.__defineSetter__("embedFonts",function(val){});

DisplayObject.prototype.__defineGetter__("gridFitType",function(){});
DisplayObject.prototype.__defineSetter__("gridFitType",function(val){});

DisplayObject.prototype.__defineGetter__("maxChars",function(){});
DisplayObject.prototype.__defineSetter__("maxChars",function(val){});

DisplayObject.prototype.__defineGetter__("maxScrollH",function(){});
DisplayObject.prototype.__defineSetter__("maxScrollH",function(val){});

DisplayObject.prototype.__defineGetter__("maxScrollV",function(){});
DisplayObject.prototype.__defineSetter__("maxScrollV",function(val){});

DisplayObject.prototype.__defineGetter__("mouseWheelEnabled",function(){});
DisplayObject.prototype.__defineSetter__("mouseWheelEnabled",function(val){});

DisplayObject.prototype.__defineGetter__("multiline",function(){});
DisplayObject.prototype.__defineSetter__("multiline",function(val){});

DisplayObject.prototype.__defineGetter__("numLines",function(){});
DisplayObject.prototype.__defineSetter__("numLines",function(val){});

DisplayObject.prototype.__defineGetter__("restrict",function(){});
DisplayObject.prototype.__defineSetter__("restrict",function(val){});

DisplayObject.prototype.__defineGetter__("scrollH",function(){});
DisplayObject.prototype.__defineSetter__("scrollH",function(val){});

DisplayObject.prototype.__defineGetter__("scrollV",function(){});
DisplayObject.prototype.__defineSetter__("scrollV",function(val){});

DisplayObject.prototype.__defineGetter__("selectable",function(){});
DisplayObject.prototype.__defineSetter__("selectable",function(val){});

DisplayObject.prototype.__defineGetter__("selectionBeginIndex",function(){});
DisplayObject.prototype.__defineSetter__("selectionBeginIndex",function(val){});

DisplayObject.prototype.__defineGetter__("selectionEndIndex",function(){});
DisplayObject.prototype.__defineSetter__("selectionEndIndex",function(val){});

DisplayObject.prototype.__defineGetter__("sharpness",function(){});
DisplayObject.prototype.__defineSetter__("sharpness",function(val){});

DisplayObject.prototype.__defineGetter__("styleSheet",function(){});
DisplayObject.prototype.__defineSetter__("styleSheet",function(val){});

DisplayObject.prototype.__defineGetter__("textHeight",function(){});

DisplayObject.prototype.__defineGetter__("textInteractionMode",function(){});

DisplayObject.prototype.__defineGetter__("textWidth",function(){});

DisplayObject.prototype.__defineGetter__("thickness",function(){});
DisplayObject.prototype.__defineSetter__("thickness",function(val){});

DisplayObject.prototype.__defineGetter__("type",function(){});
DisplayObject.prototype.__defineSetter__("type",function(val){});

DisplayObject.prototype.__defineGetter__("useRichTextClipboard",function(){});
DisplayObject.prototype.__defineSetter__("useRichTextClipboard",function(val){});

DisplayObject.prototype.__defineGetter__("wordWrap",function(){});
DisplayObject.prototype.__defineSetter__("wordWrap",function(val){});

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
