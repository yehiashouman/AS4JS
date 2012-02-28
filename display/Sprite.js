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

Sprite.prototype.__defineGetter__("buttonMode",function(){
	return null;
	
});
Sprite.prototype.__defineSetter__("buttonMode",function(val){

});

Sprite.prototype.__defineGetter__("dropTarget",function(){
	return null;
});


Sprite.prototype.__defineGetter__("hitArea",function(){
	return null;
});
Sprite.prototype.__defineSetter__("hitArea",function(val){
});

Sprite.prototype.__defineGetter__("soundTransform",function(){
	return null;
});
Sprite.prototype.__defineSetter__("soundTransform",function(val){
	return null;
});

Sprite.prototype.__defineGetter__("useHandCursor",function(){
	return null;
});
Sprite.prototype.__defineSetter__("useHandCursor",function(val){
	return null;
});
Sprite.prototype.startDrag = function(lockCenter,bounds,Rectangle){
	
};
Sprite.prototype.stopDrag=function(){
	
	
};
