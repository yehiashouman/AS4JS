/**
 * @namespace display
 * @requires Graphics, InteractiveObject, DisplayObject, EventDispatcher
 * @class Sprite
 * @author Yehia Shouman
 */

var Sprite =function(myDiv){
	InteractiveObject.call(this,myDiv);
	this.instance = this;
	var ref=this;
	this.toCamelCase = function( sInput ) {
		  var oStringList = sInput.split('-');
		  if(oStringList.length == 1)  
		    return oStringList[0];
		  var ret = sInput.indexOf("-") == 0 ?
		      oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1) : oStringList[0];
		  for(var i = 1, len = oStringList.length; i < len; i++){
		    var s = oStringList[i];
		    ret += s.charAt(0).toUpperCase() + s.substring(1);
		  }
		  return ret;
		};
	this.graphics = new Graphics(this.container);
	this.setChildStyle=function(childDiv,style,value){
		childDiv.style[style] = value;
				
		
	};
	this.getChildStyle=function(childDiv,style){
		
		  var value = childDiv.style[toCamelCase(style)];
		  if(!value)
		    if(document.defaultView)
		      value = document.defaultView.
		         getComputedStyle(ref.graphics.context, "").getPropertyValue(style);
		    else if(childDiv.currentStyle)
		      value = childDiv.currentStyle[toCamelCase(style)];
		  return value;
	};
	
	this.graphics.owner=this; 
	this.__getClassType=function(){return "Sprite";};

	
};
Sprite.prototype = new InteractiveObject();
Sprite.constructor = Sprite;
Sprite.prototype.__applyFilters=function(){
	for(var i=0;i<this._filters.length;i++){
		
		var filter = this.filters[i];
		
		switch (filter.__getClassType())
		{
		case "DropShadowFilter":
			var shadowPt = DisplayObject.__findPositionOfRelativeObject(filter.distance,filter.angle);
			var hPos = Math.ceil(shadowPt.x);
			var vPos = Math.ceil(shadowPt.y);
			var blurRad = (Math.max(filter.blurX,filter.blurY));
			var rgba =DisplayObject.intHex2RGBA(filter.color,filter.alpha); 
			this.graphics.context.shadowOffsetX = hPos;   
			this.graphics.context.shadowOffsetY = vPos;   
			this.graphics.context.shadowBlur = blurRad;   
			this.graphics.context.shadowColor = rgba;  
			this.graphics.context.fill();
			this.alpha=filter.hideObject? 0.01:this.alpha;
		break;
		
		
		};
		
		
	}
	
};
//public property buttonMode setter and getter
defineAccessorProperty(Sprite, "buttonMode", function(val) {
	//TODO implement Sprite.buttonMode 
}, function() {
});
//public property dropTarget setter and getter
defineAccessorProperty(Sprite, "dropTarget", function(val) {
	//TODO implement Sprite.dropTarget 
}, function() {
});
//public property hitArea setter and getter
defineAccessorProperty(Sprite, "hitArea", function(val) {
	//TODO implement Sprite.hitArea 
}, function() {
});
//public property soundTransform setter and getter
defineAccessorProperty(Sprite, "soundTransform", function(val) {
	//TODO implement Sprite.soundTransform 
}, function() {
	return null;
});
//public property useHandCursor setter and getter
defineAccessorProperty(Sprite, "useHandCursor", function(val) {
	//TODO implement Sprite.useHandCursor 
}, function() {
	return null;
});

//public property scaleX setter and getter
defineAccessorProperty(Sprite, "scaleX", function(val) {
	this._scaleX = val;
	this.setStyle("width",(this._width * val)+"px");
	this.setChildStyle(ref.graphics.context,"width",(this._width * val)+"px");
}, function() {
	return this._scaleX;
});

//public property scaleY setter and getter
defineAccessorProperty(Sprite, "scaleY", function(val) {
	this._scaleY = val;
	this.setStyle("height",(this._height * val)+"px");
	this.setChildStyle(ref.graphics.context,"height",(this._height * val)+"px");
}, function() {
	return this._scaleY;
});
Sprite.prototype.startDrag = function(lockCenter,bounds,Rectangle){
	
};
Sprite.prototype.stopDrag=function(){
	
	
};
