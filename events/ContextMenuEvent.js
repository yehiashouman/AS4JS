/**
 * @namespace  events
* @requires events.Event
* @class ContextMenuEvent
* @author Nermeen Shoman
*/
var ContextMenuEvent=function(type, bubbles, cancelable, mouseTarget, contextMenuOwner){
	Event.call(this, type, bubbles, cancelable, mouseTarget, contextMenuOwner);
	//The display list object to which the menu is attached.
	this.contextMenuOwner = contextMenuOwner;
	//Indicates whether the mouseTarget property was set to null for security reasons.
	this.isMouseTargetInaccessible = "";
	//The display list object on which the user right-clicked to display the context menu
	this.mouseTarget = mouseTarget;
	var ref=this;
	this.clone = function(){
		return new ContextMenuEvent(ref.type,ref.bubbles,ref.cancelable,ref.mouseTarget, ref.contextMenuOwner);
	};
	this.toString = function(){
		return "[ContextMenuEvent type="+ref.type+" bubbles="+ref.bubbles+" cancelable="+ref.cancelable +
				" mouseTarget="+ref.mouseTarget+" contextMenuOwner="+ref.contextMenuOwner+"]";
	};
	this.__getClassType=function(){return "ContextMenuEvent";};
};
ContextMenuEvent.prototype= new Event();
ContextMenuEvent.constructor = ContextMenuEvent;
// Defines the value of the type property of a menuItemSelect event object.
ContextMenuEvent.MENU_ITEM_SELECT = "menuItemSelect";
//Defines the value of the type property of a menuSelect event object.
ContextMenuEvent.MENU_SELECT = "menuSelect";
