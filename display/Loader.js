/**
 * @namespace display 
 * @requires 
 * @class Loader
 * @author Yehia Shouman
 */
var Loader = function(myDiv) {
	DisplayObjectContainer.call(this,myDiv);
	this.__getClassType = function() {
		return "Loader";
	};
	this.__contentLoaderInfo= new LoaderInfo();
	this.__contentLoaderInfo.owner = this;
};
Loader.prototype = new DisplayObjectContainer();
Loader.constructor = Loader;
//public property content setter and getter
defineAccessorProperty(Loader, "content", function(val) {
	//TODO implement Loader.content 
}, function() {
	return this.__contentLoaderInfo.__content;
});
//public property contentLoaderInfo setter and getter
defineAccessorProperty(Loader, "contentLoaderInfo", function(val) {
	//TODO implement Loader.contentLoaderInfo 
}, function() {
	return this.__contentLoaderInfo;
});
//public property uncaughtErrorEvents setter and getter
defineAccessorProperty(Loader, "uncaughtErrorEvents", function(val) {
	//TODO implement Loader.uncaughtErrorEvents 
}, function() {
	return null;
});

Loader.prototype.close = function() {
	//TODO implement Loader.close
	this.__contentLoaderInfo.__close();
};
Loader.prototype.load = function(request,context) {
	this.__contentLoaderInfo.__loadContent(request.url);
};
Loader.prototype.loadBytes = function() {
	//TODO implement Loader.loadBytes

};
Loader.prototype.unload = function() {
	//TODO implement Loader.unload

};
Loader.prototype.unloadAndStop = function(gc) {
	
	//TODO implement Loader.unloadAndStop

};
//public property width setter and getter
defineAccessorProperty(Loader, "width", function(val) {
	this.content.width=val;
}, function() {
	//return the height of the container if defined OR the width of the bmp
	return parseInt(this.getStyle("width"))||this.content.__bmp.width;
});
//public property height setter and getter
defineAccessorProperty(Loader, "height", function(val) {
	this.content.height=val;
}, function() {
	return parseInt(this.getStyle("height"))||this.content.__bmp.height;
});
