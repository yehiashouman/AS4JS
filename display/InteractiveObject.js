/**
 * @namespace display
 * @requires DisplayObject
 * @class InteractiveObject
 * @author Yehia Shouman
 */

var InteractiveObject = function(myDiv){
	DisplayObject.call(this,myDiv);
	this.__getClassType=function(){return "InteractiveObject";};

};
InteractiveObject.prototype = new DisplayObject();
InteractiveObject.constructor = InteractiveObject;
DisplayObject.prototype.__defineGetter__("accessibilityImplementation",function(){
	//TODO implement accessibilityImplementation
	return null;
});
DisplayObject.prototype.__defineSetter__("accessibilityImplementation",function(val){
});
DisplayObject.prototype.__defineGetter__("contextMenu",function(){
	return null;
	//TODO context menu
});
DisplayObject.prototype.__defineSetter__("contextMenu",function(val){
});
DisplayObject.prototype.__defineGetter__("doubleClickEnabled",function(){
	return null;
	//TODO implement doubleClickEnabled
});
DisplayObject.prototype.__defineSetter__("doubleClickEnabled",function(val){
});
DisplayObject.prototype.__defineGetter__("focusRect",function(){
	return null;
	//TODO implement focusRect
});
DisplayObject.prototype.__defineSetter__("focusRect",function(val){
});
DisplayObject.prototype.__defineGetter__("mouseEnabled",function(){
	return this.getStyle("pointer-events")=="auto"? true : false;
});
DisplayObject.prototype.__defineSetter__("mouseEnabled",function(val){
	this.setStyle("pointer-events",val? "auto": "none");
});
DisplayObject.prototype.__defineGetter__("tabEnabled",function(){
	return this.container.tabIndex > -1? true : false;;
});
DisplayObject.prototype.__defineSetter__("tabEnabled",function(val){
	this.container.tabIndex = -1;
});
DisplayObject.prototype.__defineGetter__("tabIndex",function(){
	return this.container.tabIndex;
});
DisplayObject.prototype.__defineSetter__("tabIndex",function(val){
	this.container.tabIndex = val;
});



