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
Loader.prototype.__defineGetter__("content", function() {
	return this.__contentLoaderInfo.__content;
});
//public property contentLoaderInfo setter and getter
Loader.prototype.__defineGetter__("contentLoaderInfo", function() {
	return this.__contentLoaderInfo;
});
//public property uncaughtErrorEvents setter and getter
Loader.prototype.__defineGetter__("uncaughtErrorEvents", function() {
	//TODO implement Loader.uncaughtErrorEvents
	return;
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
Loader.prototype.__defineGetter__("width", function() {
	//return the height of the container if defined OR the width of the bmp
	return parseInt(this.getStyle("width"))||this.content.__bmp.width;
});

//public property height setter and getter
Loader.prototype.__defineGetter__("height", function() {

	return parseInt(this.getStyle("height"))||this.content.__bmp.height;
});

Loader.prototype.__defineSetter__("width", function(val) {
	this.content.width=val;
});
Loader.prototype.__defineSetter__("height", function(val) {
	this.content.height=val;
});
