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
    this.__defineGetter__("contentType",function(){
		return this.__contentType;	
	});
	this.__defineSetter__("contentType",function(val){
		this.__contentType=val;
	});
	this.__defineGetter__("data",function(){
		return this.__data;	
	});
	this.__defineSetter__("data",function(val){
		this.__data=val;
	});
	this.__defineGetter__("method",function(){
		return this.__method;	
	});
	this.__defineSetter__("method",function(val){
		this.__method=val;
	});
	this.__defineGetter__("requestHeaders",function(){
		return this.__requestHeaders;	
	});
	this.__defineSetter__("requestHeaders",function(val){
		this.__requestHeaders=val;
	});
	this.__defineGetter__("url",function(){
		return this.__url;	
	});
	this.__defineSetter__("url",function(val){
		this.__url=val;
	});
	
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
