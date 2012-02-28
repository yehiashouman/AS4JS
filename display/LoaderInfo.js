/**
 * @namespace display 
 * @requires 
 * @class LoaderInfo
 * @author Yehia Shouman
 */
var LoaderInfo = function() {
	EventDispatcher.call(this);
	var ref=this;
	this.__content = new Bitmap();
	
	this.__imgLoader_eventsHandler=function(e){
		switch(e.type){
			case "load":
				ref.dispatchEvent(new Event(Event.COMPLETE,true,false));
			break;
			case "error":
				throwCustomError(ref,2035,"IOErrorEvent");
			break;
			
		};
	};
	this.__loadContent = function(src){
		ref.url = src;
		ext = src.substr(src.lastIndexOf(".")+1,src.length);
		switch(ext.toLowerCase())
		{
		case "jpg":
			ref.__contentType="image/jpeg";
			ref.__content.image.addEventListener("error",ref.__imgLoader_eventsHandler);
			ref.__content.image.addEventListener("load",ref.__imgLoader_eventsHandler);
			ref.__content.image.src = src;
			break;
		case "png":
			ref.__contentType="image/png";
			ref.__content.image.addEventListener("error",ref.__imgLoader_eventsHandler);
			ref.__content.image.addEventListener("load",ref.__imgLoader_eventsHandler);
			ref.__content.image.src = src;
			break;
		case "gif":
			ref.__contentType="image/gif";
			ref.__content.image.addEventListener("error",ref.__imgLoader_eventsHandler);
			ref.__content.image.addEventListener("load",ref.__imgLoader_eventsHandler);
			ref.__content.image.src = src;
			break;
		case "swf":
			ref.__contentType="application/x-shockwave-flash";
			break;
		case "htm":
			ref.__contentType="text/html";
			break;
		
		}
	};
	this.__getClassType = function() {
		return "LoaderInfo";
	};
	
};
LoaderInfo.prototype = new EventDispatcher();
LoaderInfo.constructor = LoaderInfo;

//public property actionScriptVersion setter and getter
LoaderInfo.prototype.__defineGetter__("actionScriptVersion", function() {
	//TODO implement LoaderInfo.actionScriptVersion
	return 10;
});
//public property applicationDomain setter and getter
LoaderInfo.prototype.__defineGetter__("applicationDomain", function() {
	//TODO implement LoaderInfo.applicationDomain
	return;
});
//public property bytes setter and getter
LoaderInfo.prototype.__defineGetter__("bytes", function() {
	//TODO implement LoaderInfo.bytes//bytearray
	return;
});
//public property bytesLoaded setter and getter
LoaderInfo.prototype.__defineGetter__("bytesLoaded", function() {
	//TODO implement LoaderInfo.bytesLoaded uint
	return;
});
//public property bytesTotal setter and getter
LoaderInfo.prototype.__defineGetter__("bytesTotal", function() {
	//TODO implement LoaderInfo.bytesTotal
	return;
});
//public property childAllowsParent setter and getter
LoaderInfo.prototype.__defineGetter__("childAllowsParent", function() {
	//TODO implement LoaderInfo.childAllowsParent
	return;
});
//public property content setter and getter
LoaderInfo.prototype.__defineGetter__("content", function() {
	return this.__content;
});
//public property contentType setter and getter
LoaderInfo.prototype.__defineGetter__("contentType", function() {
	//TODO implement LoaderInfo.contentType
	return this.__contentType;
});
//public property frameRate setter and getter
LoaderInfo.prototype.__defineGetter__("frameRate", function() {
	//TODO implement LoaderInfo.frameRate
	return $as4js____core_____timeline.frameRate;
});
//public property height setter and getter
LoaderInfo.prototype.__defineGetter__("height", function() {
	return this.height;
});
//public property isURLInaccessible setter and getter
LoaderInfo.prototype.__defineGetter__("isURLInaccessible", function() {
	//TODO implement loaderInfo.isURLInaccessible
	return ;
});
//public property loader setter and getter
LoaderInfo.prototype.__defineGetter__("loader", function() {
	return this.owner;
});
//public property loaderURL setter and getter
LoaderInfo.prototype.__defineGetter__("loaderURL", function() {
	return this.owner.url;
});
//public property parameters setter and getter
LoaderInfo.prototype.parameters = null;
//public property parentAllowsChild setter and getter
LoaderInfo.prototype.__defineGetter__("parentAllowsChild", function() {
	return true;
});
//public property sameDomain setter and getter
LoaderInfo.prototype.__defineGetter__("sameDomain", function() {
	//TODO LoaderInfo.sameDomain
	return ;
});
//public property sharedEvents setter and getter
LoaderInfo.prototype.__defineGetter__("sharedEvents", function() {
	//TODO implement LoaderInfo.sharedEvents
	return new EventDispatcher();
});
//public property uncaughtErrors setter and getter
LoaderInfo.prototype.__defineGetter__("uncaughtErrors", function() {
	//TODO implement LoaderInfo.uncaughtErrors
	return;
});
//public property url setter and getter
LoaderInfo.prototype.url = "";
//public property width setter and getter
LoaderInfo.prototype.__defineGetter__("width", function() {
	//TODO implement LoaderInfo.width
	return this.content.width;
});
LoaderInfo.prototype.__defineSetter__("width", function(val) {
	this.__content.image.width= val;
	this.__content.width = val;
});
LoaderInfo.prototype.__defineSetter__("height", function(val) {
	this.__content.image.height = val;
	this.__content.height = val;
});

LoaderInfo.prototype.getLoaderInfoByDefinition = function(object) {
	//TODO implement LoaderInfo.getLoaderInfoByDefinition

};