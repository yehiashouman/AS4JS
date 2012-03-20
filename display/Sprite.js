/**
 * @namespace display
 * @requires Graphics, InteractiveObject, DisplayObject, EventDispatcher
 * @class Sprite
 * @author Yehia Shouman
 */

var Sprite =function(myDiv){
	InteractiveObject.call(this,myDiv);
	this.instance = this;
	this.graphics = new Graphics(this.container);
	
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
Sprite.prototype.startDrag = function(lockCenter,bounds,Rectangle){
	
};
Sprite.prototype.stopDrag=function(){
	
	
};
