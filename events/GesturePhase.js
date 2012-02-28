/**
 * @namespace  events
* @requires 
* @class GesturePhase
* @author Nermeen Shoman
*/
var GesturePhase=function(){
	this.__getClassType=function(){return "GesturePhase";};
};
GesturePhase.prototype= new Object();
GesturePhase.constructor = GesturePhase;
//A single value that encompasses all phases of simple gestures like two-finger-tap or swipe.
GesturePhase.ALL = "all";
//The beginning of a new gesture (such as touching a finger to a touch enabled screen).
GesturePhase.BEGIN = "begin"; 
//The completion of a gesture (such as lifting a finger off a touch enabled screen).
GesturePhase.END = "end";
//The progress of a gesture (such as moving a finger across a touch enabled screen).
GesturePhase.UPDATE = "update";
