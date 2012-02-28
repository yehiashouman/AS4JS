/**
 * @namespace external
 * @requires 
 * @class ExternalInterface
 * @author Yehia Shouman
 */
var ExternalInterface = function(){
	this.__getClassType=function(){return "ExternalInterface";};

};
ExternalInterface.prototype = new Object();
ExternalInterface.__defineGetter__("available",function(){return true;});
ExternalInterface.__defineGetter__("objectID",function(){return "";});
ExternalInterface.marshallExceptions = false;
ExternalInterface.call= function (functionName,args){
	var fn= root[functionName];
	fn.apply(root, arguments.slice(1));
	
	
};
ExternalInterface.addCallBack=function(functionName,closure){
	root[functionName] = closure;
	
};

