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
//public property cursor setter and getter
defineAccessorProperty(Mouse, "cursor", function(val) {
	var htmlCursorEquivalent = "";
	switch(val.toLowerCase()){
	case "arrow":
		htmlCursorEquivalent = "default";
		break;
	case "auto":
		htmlCursorEquivalent = "auto";
		break;
	case "button":
		htmlCursorEquivalent = "pointer";
		break;
	case "hand":
		htmlCursorEquivalent = "hand";
		break;
	case "ibeam":
		htmlCursorEquivalent = "text";
		break;
		
	
	
	};
	var body = document.body;
	body.style["cursor"]=htmlCursorEquivalent;
	
}, function() {
	var htmlValue=stage.getStyle("cursor");
	var as3CursorEquivalent = MouseCursor.Arrow;
	switch(htmlValue.toLowerCase()){
		case "default":
			as3CursorEquivalent = MouseCursor.ARROW;
			break;
		case "auto":
			as3CursorEquivalent = MouseCursor.AUTO;
			break;
		case "pointer":
			as3CursorEquivalent = MouseCursor.BUTTON;
			break;
		case "hand":
			as3CursorEquivalent = MouseCursor.HAND;
			break;
		case "text":
			as3CursorEquivalent = MouseCursor.IBEAM;
			break;
		
	};
	return as3CursorEquivalent;
},true);
Mouse.supportsCursor=false;
Mouse.supportsNativeCursor = false;
Mouse.hide = function(){};
Mouse.registerCursor=function(name,cursor){};
Mouse.show = function(){};
Mouse.unregisterCursor=function(name){};