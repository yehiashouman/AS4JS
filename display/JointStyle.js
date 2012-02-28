/**
 * @namespace display
 * @requires Graphics
 * @class JointStyle
 * @author Yehia Shouman
 */

var JointStyle=function(){
	this.__getClassType=function(){return "JointStyle";};

};
JointStyle.prototype = new Object();
JointStyle.BEVEL ="bevel";
JointStyle.MITER = "miter";
JointStyle.ROUND = "round";