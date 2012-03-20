/**	
 * @namespace Events
 * @requires Events.EventDispatcher
 * @class Event
 * @author Yehia Shouman
 */


var Event=function (evtType,bubbles,cancelable){
	this.type = evtType;
	this.bubbles = bubbles||true;
	this.cancelable = cancelable||false;
	
};
Event.prototype = new Object();
Event.constructor = Event;
Event.prototype.type ="";
Event.prototype.target = null;
Event.ACTIVATE = "activate";
Event.ADDED = "added";
Event.ADDED_TO_STAGE = "addedToStage";
Event.CANCEL="cancel";
Event.CLEAR="clear";
Event.CLOSE="close";
Event.CLOSING="closing";
Event.COMPLETE = "complete";
Event.CONNECT = "connect";
Event.COPY= "copy";
Event.CUT= "cut";
Event.DEACTIVATE= "deactivate";
Event.ENTER_FRAME= "enterFrame";
Event.EXIT_FRAME= "exitFrame";
Event.EXITING= "exiting";
Event.FRAME_CONSTRUCTED= "frameConstructed";
Event.FULLSCREEN= "fullScreen";
Event.HTML_BOUNDS_CHANGE= "htmlBoundsChange";
Event.HTML_DOM_INTIALIZE= "htmlDOMInitialize";
Event.HTML_RENDER= "htmlRender";
Event.ID3= "id3";
Event.INIT= "init";
Event.LOCATION_CHANGE= "locationChange";
Event.MOUSE_LEAVE= "mouseLeave";
Event.NETWORK_CHANGE= "networkChange";
Event.OPEN= "open";
Event.PASTE= "paste";
Event.REMOVED= "removed";
Event.REMOVE_FROM_STAGE= "removedFromStage";
Event.RENDER= "render";
Event.RESIZE= "resize";
Event.SCROLL= "scroll";
Event.SELECT= "select";
Event.SELECT_ALL= "selectAll";
Event.SOUND_COMPLETE = "soundComplete";
Event.STANDARD_ERRROR_CLOSE= "standardErrorClose";
Event.STANDARD_INPUT_CLOSE= "standardInputClose";
Event.STANDARD_OUTPUT_CLOSE= "standardOutputClose";
Event.TAB_CHILDREN_CHANGE= "tabChildrenChange";
Event.TAB_ENABLED_CHANGE= "tabEnabledChange";
Event.TAB_INDEX_CHANGE= "tabIndexChange";
Event.UNLOAD= "unload";
Event.USER_IDLE= "userIdle";
Event.USER_PRESENT= "userPresent";

/*
var EventClass=function (evtType,bubbles,cancelable){
	this.type = evtType;
	this.bubbles = bubbles||true;
	this.cancelable = cancelable||false;
	
};

EventClass.prototype = new Object();
EventClass.constructor = EventClass;
EventClass.prototype.type ="";
EventClass.prototype.target = null;
EventClass.ACTIVATE = "activate";
EventClass.ADDED = "added";
EventClass.ADDED_TO_STAGE = "addedToStage";
EventClass.CANCEL="cancel";
EventClass.CLEAR="clear";
EventClass.CLOSE="close";
EventClass.CLOSING="closing";
EventClass.COMPLETE = "complete";
EventClass.CONNECT = "connect";
EventClass.COPY= "copy";
EventClass.CUT= "cut";
EventClass.DEACTIVATE= "deactivate";
EventClass.ENTER_FRAME= "enterFrame";
EventClass.EXIT_FRAME= "exitFrame";
EventClass.EXITING= "exiting";
EventClass.FRAME_CONSTRUCTED= "frameConstructed";
EventClass.FULLSCREEN= "fullScreen";
EventClass.HTML_BOUNDS_CHANGE= "htmlBoundsChange";
EventClass.HTML_DOM_INTIALIZE= "htmlDOMInitialize";
EventClass.HTML_RENDER= "htmlRender";
EventClass.ID3= "id3";
EventClass.INIT= "init";
EventClass.LOCATION_CHANGE= "locationChange";
EventClass.MOUSE_LEAVE= "mouseLeave";
EventClass.NETWORK_CHANGE= "networkChange";
EventClass.OPEN= "open";
EventClass.PASTE= "paste";
EventClass.REMOVED= "removed";
EventClass.REMOVE_FROM_STAGE= "removedFromStage";
EventClass.RENDER= "render";
EventClass.RESIZE= "resize";
EventClass.SCROLL= "scroll";
EventClass.SELECT= "select";
EventClass.SELECT_ALL= "selectAll";
EventClass.SOUND_COMPLETE = "soundComplete";
EventClass.STANDARD_ERRROR_CLOSE= "standardErrorClose";
EventClass.STANDARD_INPUT_CLOSE= "standardInputClose";
EventClass.STANDARD_OUTPUT_CLOSE= "standardOutputClose";
EventClass.TAB_CHILDREN_CHANGE= "tabChildrenChange";
EventClass.TAB_ENABLED_CHANGE= "tabEnabledChange";
EventClass.TAB_INDEX_CHANGE= "tabIndexChange";
EventClass.UNLOAD= "unload";
EventClass.USER_IDLE= "userIdle";
EventClass.USER_PRESENT= "userPresent";
*/