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
//public property available setter and getter
defineAccessorProperty(ExternalInterface, "available", null, function(){return true;},true);
//public property objectID setter and getter
defineAccessorProperty(ExternalInterface, "objectID", null, function(){return "";});
ExternalInterface.marshallExceptions = false;
ExternalInterface.call= function (functionName,args){
	var fn= root[functionName];
	fn.apply(root, arguments.slice(1));
	
	
};
ExternalInterface.addCallBack=function(functionName,closure){
	root[functionName] = closure;
	
};

