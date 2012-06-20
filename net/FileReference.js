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
	var doc = document;
	var containerForm = doc.createElement("Form");
	var containerFormNewName = "upload-form"+Math.ceil(1000*Math.random());
	containerForm.name = containerFormNewName;
	this.inputFile = doc.createElement("input");
	this.inputFile.style.display="none";
	var newName = "file-upload"+Math.ceil(1000*Math.random());
	this.inputFile.name = newName;
	this.inputFile.type = "file";
	this.typeFilter  =[];
	var ref=this;
	this.inputFile.onchange=function(e){
		traceObj(ref.inputFile.files[0]);
		ref.dispatchEvent(new Event(Event.SELECT,true,false));
		
		
	};
	this.__selectedFile = "";
	
};
FileReference.prototype = new EventDispatcher();
FileReference.constructor = FileReference;

//public property creationDate setter and getter ([read-only] The creation date of the file on the local disk.)
defineAccessorProperty(FileReference, "creationDate", function(val) {

}, function() {
	return new Date();
});

//public property creator setter and getter ([read-only] The Macintosh creator type of the file, which is only used in Mac OS versions prior to Mac OS X.)
defineAccessorProperty(FileReference, "creator", function(val) {

}, function() {
	return "";
});


//public property data setter and getter([read-only] The ByteArray object representing the data from the loaded file after a successful call to the load() method.)
defineAccessorProperty(FileReference, "data", function(val) {

}, function() {
	return new ByteArray();
});


//public property extension setter and getter([read-only] The filename extension.)
defineAccessorProperty(FileReference, "extension", function(val) {

}, function() {
	return "";
});


//public property modificationDate setter and getter([read-only] The date that the file on the local disk was last modified.)
defineAccessorProperty(FileReference, "modificationDate", function(val) {
;
}, function() {
	return new Date();
});


//public property name setter and getter([read-only] The name of the file on the local disk.)
defineAccessorProperty(FileReference, "name", function(val) {
;
}, function() {
	return "";
});

//public property prototype setter and getter([static] A reference to the prototype object of a class or function object.)
defineAccessorProperty(FileReference, "prototype", function(val) {
;
}, function() {
	return new Object();
});

//public property size setter and getter([read-only] The size of the file on the local disk in bytes.)
defineAccessorProperty(FileReference, "size", function(val) {
;
}, function() {
	return 0;
});

//public property type setter and getter([read-only] The file type.)
defineAccessorProperty(FileReference, "type", function(val) {
;
}, function() {
	return "";
});

//Displays a file-browsing dialog box that lets the user select a file to upload.
FileReference.prototype.browse=function(typeFilter){
	this.typeFilter = typeFilter;
	
	this.inputFile.click();
	return true;
	
};
//Cancels any ongoing upload or download operation on this FileReference object.
FileReference.prototype.cancel=function(){
	
	return true;
};



//Opens a dialog box that lets the user download a file from a remote server.
FileReference.prototype.download=function(request,defaultFileName){
	//request:requestURL, defaultFileName:String=null
	;
};
//Starts the load of a local file selected by a user.
FileReference.prototype.load=function(){
	;
};

//Opens a dialog box that lets the user save a file to the local filesystem.
FileReference.prototype.save=function(data,defaultFileName){
	//data:*, defaultFileName:String=null
	;
};
//Starts the upload of the file to a remote server.
FileReference.prototype.upload=function(request, uploadDataFieldName, testUpload){
	//request:URLRequest, uploadDataFieldName:String = "Filedata", testUpload:Boolean = false
	
};
//Initiate uploading a file to a URL without any encoding.
FileReference.prototype.uploadUnencoded=function(request){
	//request:URLRequest;
	;
};
