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
	var ref=this;
	this.typeFilter  =[];
	this.__selectedFile = "";
	this.__reader = new FileReader();
	this.__reader.onerror = function (e) {
			
		var errorEvt = new IOErrorEvent(IOErrorEvent.IO_ERROR);
	    switch(e.target.error.code) {
			      case e.target.error.NOT_FOUND_ERR:
			    	  errorEvt.text=('File Not Found!');
			        break;
			      case e.target.error.NOT_READABLE_ERR:
			    	  errorEvt.text=('File is not readable');
			        break;
			      case e.target.error.ABORT_ERR:
			        break; 
			      case e.target.error.SECURITY_ERR:
			    	  errorEvt.text=("File loading error because of security.");
				        break; 
			      default:
			    	  
			    	// alert('An error occurred reading this file.');
			    	break;
		    };
		    
		    ref.dispatchEvent(errorEvt);
	  };
	this.__reader.onprogress = function(evt){
    	 // evt is an ProgressEvent.
	    if (evt.lengthComputable) {
	     // var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
	      
	    };
    };
    this.__reader.onabort = function(e) {
    	//trace("reader  onabort");
    };
    this.__reader.onloadstart = function(e) {
    	//trace("reader on load start");
    };
    this.__reader.onload = function(e) {
    	ref._data = new ByteArray();
    	ref._data.writeBytes(ref.__reader.result);
    	
    	ref.dispatchEvent(new Event(Event.COMPLETE,true,false));
    };
    this.__extension = "";
    this.__name = "";
    this.__type = "";
    this.__size = "";
    this.__modificationDate = "";
    this.__creationDate = "";
    this.__creator = null;
    this.inputFile.onchange = function (e){
    	
		var f = e.target.files[0];
		 ref.__size = f.size;
		ref.__name = f.name;
		ref.__extension = f.name.substr(f.name.lastIndexOf(".")+1,f.name.length);
		ref.__type = ref.__extension;
		ref.__modificationDate =  (f.lastModifiedDate)? f.lastModifiedDate : new Date();
		ref.__creationDate = (f.lastModifiedDate)? f.lastModifiedDate : new Date();
		
		ref.dispatchEvent(new Event(Event.SELECT,true,false));
		ref.__reader.readAsBinaryString(e.target.files[0]);
	};
	
	
	
};
FileReference.prototype = new EventDispatcher();
FileReference.constructor = FileReference;

//public property creationDate setter and getter ([read-only] The creation date of the file on the local disk.)
defineAccessorProperty(FileReference, "creationDate", function(val) {
;
}, function() {
	return this.__creationDate;
});

//public property creator setter and getter ([read-only] The Macintosh creator type of the file, which is only used in Mac OS versions prior to Mac OS X.)
defineAccessorProperty(FileReference, "creator", function(val) {
;
}, function() {
	return this.__creator;
});


//public property data setter and getter([read-only] The ByteArray object representing the data from the loaded file after a successful call to the load() method.)
defineAccessorProperty(FileReference, "data", function(val) {
;
}, function() {
	return this._data;
});


//public property extension setter and getter([read-only] The filename extension.)
defineAccessorProperty(FileReference, "extension", function(val) {
;
}, function() {
	return this.__extension;
});


//public property modificationDate setter and getter([read-only] The date that the file on the local disk was last modified.)
defineAccessorProperty(FileReference, "modificationDate", function(val) {
;
}, function() {
	return this.__modificationDate;
});


//public property name setter and getter([read-only] The name of the file on the local disk.)
defineAccessorProperty(FileReference, "name", function(val) {
;
}, function() {
	return this.__name;
});



//public property size setter and getter([read-only] The size of the file on the local disk in bytes.)
defineAccessorProperty(FileReference, "size", function(val) {
;
}, function() {
	return this.__size;
});

//public property type setter and getter([read-only] The file type.)
defineAccessorProperty(FileReference, "type", function(val) {
;
}, function() {
	return this.__type;
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
	
    // Read in the image file as a binary string.
   // this.__reader.readAsBinaryString(this.__selectedFile);

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
