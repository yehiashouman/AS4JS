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







