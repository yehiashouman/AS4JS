/**
 * @namespace net
 * @requires 
 * @class URLRequest
 * @author Yehia Shouman
 */

var URLRequest = function(url){
	this.url = url;
	this.__getClassType=function(){return "URLRequest";};
	this.__contentType = null;
    this.__data = null;
    this.__method = URLRequestMethod.GET;
    this.__requestHeaders = [];
    this.__url = (url !== undefined) ? url : null;
	
	this.toString = function()
    {
        return '[object URLRequest]';
    };
    
};
URLRequest.prototype =new Object();
URLRequest.constructor = URLRequest;
URLRequest.prototype.toString=function(){
	var str="["+("URLRequest Object")+" ";
	for(var i in this)
		{
			if(this.hasOwnProperty(i) && this[i].toString().indexOf("function")==-1){
				str+=i+":"+this[i]+" ";
			};
		};
	str+="]";
	return str;
	
};

//public property contentType setter and getter
defineAccessorProperty(URLRequest, "contentType", function(val) {
	this.__contentType=val;
}, function() {
	return this.__contentType;	
});
//public property data setter and getter
defineAccessorProperty(URLRequest, "data", function(val) {
	this.__data=val;
}, function() {
	return this.__data;	
});
//public property method setter and getter
defineAccessorProperty(URLRequest, "method", function(val) {
	this.__method=val;
}, function() {
	return this.__method;	
});
//public property requestHeaders setter and getter
defineAccessorProperty(URLRequest, "requestHeaders", function(val) {
//TODO implement URLRequest.requestHeaders 
}, function() {
this.__requestHeaders=val;
});
//public property url setter and getter
defineAccessorProperty(URLRequest, "url", function(val) {
this.__url=val;
}, function() {
return this.__url;	
});
