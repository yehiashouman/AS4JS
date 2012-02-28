/**
 * @namespace ui 
 * @requires 
 * @class Mouse
 * @author Yehia Shouman
 */
var Mouse = function() {

	this.__getClassType = function() {
		return "Mouse";
	};
};
Mouse.prototype = new Object();
Mouse.constructor = Mouse;
Mouse.cursor="arrow";
Mouse.supportsCursor=false;
Mouse.supportsNativeCursor = false;
Mouse.hide = function(){};
Mouse.registerCursor=function(name,cursor){};
Mouse.show = function(){};
Mouse.unregisterCursor=function(name){};