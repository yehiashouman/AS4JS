/**
 * @namespace net 
 * @requires 
 * @class FileReference
 * @author Yehia Shouman
 */
var FileReference = function() {
	EventDispatcher.call(this);
	//http://robertnyman.com/2010/12/16/utilizing-the-html5-file-api-to-choose-upload-preview-and-see-progress-for-multiple-files/
	this.__getClassType = function() {
		return "FileReference";
	};
};
FileReference.prototype = new EventDispatcher();
FileReference.constructor = FileReference;