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
//public property accessibilityImplementation setter and getter
defineAccessorProperty(InteractiveObject, "accessibilityImplementation", function(val) {
	//TODO implement InteractiveObject.accessibilityImplementation 
}, function() {
});
//public property contextMenu setter and getter
defineAccessorProperty(InteractiveObject, "contextMenu", function(val) {
	//TODO implement InteractiveObject.contextMenu 
}, function() {
});
//public property doubleClickEnabled setter and getter
defineAccessorProperty(InteractiveObject, "doubleClickEnabled", function(val) {
	//TODO implement InteractiveObject.doubleClickEnabled 
}, function() {
});
//public property focusRect setter and getter
defineAccessorProperty(InteractiveObject, "focusRect", function(val) {
	//TODO implement InteractiveObject.focusRect 
}, function() {
});
//public property mouseEnabled setter and getter
defineAccessorProperty(InteractiveObject, "mouseEnabled", function(val) {
	this.setStyle("pointer-events",val? "auto": "none");
}, function() {
	return this.getStyle("pointer-events")=="auto"? true : false;
});
//public property tabEnabled setter and getter
defineAccessorProperty(InteractiveObject, "tabEnabled", function(val) {
	this.container.tabIndex = -1;
}, function() {
	return this.container.tabIndex > -1? true : false;;
});
//public property tabIndex setter and getter
defineAccessorProperty(InteractiveObject, "tabIndex", function(val) {
	this.container.tabIndex = val;
}, function() {
	return this.container.tabIndex;
});


