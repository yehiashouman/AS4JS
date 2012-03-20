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

//public property actionscriptVersion setter and getter
defineAccessorProperty(LoaderInfo, "actionscriptVersion", function(val) {
	//TODO implement LoaderInfo.actionscriptVersion 
}, function() {
	return 10;
});
//public property applicationDomain setter and getter
defineAccessorProperty(LoaderInfo, "applicationDomain", function(val) {
	//TODO implement LoaderInfo.applicationDomain 
}, function() {
	return null;
});
//public property bytes setter and getter
defineAccessorProperty(LoaderInfo, "bytes", function(val) {
	//TODO implement LoaderInfo.bytes 
}, function() {
	return null;
});
//public property bytesLoaded setter and getter
defineAccessorProperty(LoaderInfo, "bytesLoaded", function(val) {
	//TODO implement LoaderInfo.bytesLoaded 
}, function() {
	return null;
});
//public property bytesTotal setter and getter
defineAccessorProperty(LoaderInfo, "bytesTotal", function(val) {
	//TODO implement LoaderInfo.bytesTotal 
}, function() {
	return null;
});
//public property childAllowsParent setter and getter
defineAccessorProperty(LoaderInfo, "childAllowsParent", function(val) {
	//TODO implement LoaderInfo.childAllowsParent 
}, function() {
	return null;
});
//public property content setter and getter
defineAccessorProperty(LoaderInfo, "content", function(val) {
	//TODO implement LoaderInfo.content 
}, function() {
	return this.__content;
});
//public property contentType setter and getter
defineAccessorProperty(LoaderInfo, "contentType", function(val) {
	//TODO implement LoaderInfo.contentType 
}, function() {
	return this.__contentType;
});

//public property frameRate setter and getter
defineAccessorProperty(LoaderInfo, "frameRate", function(val) {
	//TODO implement LoaderInfo.frameRate 
}, function() {
	return $as4js____core_____timeline.frameRate;
});
//public property isURLInaccessible setter and getter
defineAccessorProperty(LoaderInfo, "isURLInaccessible", function(val) {
	//TODO implement LoaderInfo.isURLInaccessible 
}, function() {
	return null;
});


//public property loader setter and getter
defineAccessorProperty(LoaderInfo, "loader", function(val) {
	//TODO implement LoaderInfo.loader 
}, function() {
	return this.owner;
});
//public property loaderURL setter and getter
defineAccessorProperty(LoaderInfo, "loaderURL", function(val) {
	//TODO implement LoaderInfo.loaderURL 
}, function() {
	return this.owner.url;
});
//public property parentAllowsChild setter and getter
defineAccessorProperty(LoaderInfo, "parentAllowsChild", function(val) {
	//TODO implement LoaderInfo.parentAllowsChild 
}, function() {
	return true;
});
//public property parameters setter and getter
LoaderInfo.prototype.parameters = null;
//public property sameDomain setter and getter
defineAccessorProperty(LoaderInfo, "sameDomain", function(val) {
	//TODO implement LoaderInfo.sameDomain 
}, function() {
	return true;
});
//public property sharedEvents setter and getter
defineAccessorProperty(LoaderInfo, "sharedEvents", function(val) {
	//TODO implement LoaderInfo.sharedEvents 
}, function() {
	return new EventDispatcher();
});
//public property uncaughtErrors setter and getter
defineAccessorProperty(LoaderInfo, "uncaughtErrors", function(val) {
	//TODO implement LoaderInfo.uncaughtErrors 
}, function() {
	return null;
});
//public property url setter and getter
LoaderInfo.prototype.url = "";
//public property width setter and getter
//public property width setter and getter
defineAccessorProperty(LoaderInfo, "width", function(val) {
	this.__content.image.width= val;
	this.__content.width = val;
}, function() {
	return this.content.width;
});
//public property height setter and getter
defineAccessorProperty(LoaderInfo, "height", function(val) {
	this.__content.image.height = val;
	this.__content.height = val;
}, function() {
	return this.height;
});

LoaderInfo.prototype.getLoaderInfoByDefinition = function(object) {
	//TODO implement LoaderInfo.getLoaderInfoByDefinition

};