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
	var ref=this;   
	var doc = document;
	this.containerForm = doc.createElement("Form");
	this.containerForm.name = "upload-form"+Math.ceil(1000*Math.random());
	this.containerForm.enctype="multipart/form-data";
	this.formdata = false;
	this.inputFile = doc.createElement("input");
	this.inputFile.style.display="none";
	this.inputFile.name = "file-upload"+Math.ceil(1000*Math.random());
	this.inputFile.type = "file";
	this.containerForm.appendChild(this.inputFile);

	this.typeFilter  =[];
	this.__selectedFile = "";
	this.__reader = new FileReader();
	this._upload_xmlHttpReq = undefined;
		try{
			//Firefox, opera 8.0+, safari
			this._upload_xmlHttpReq= new XMLHttpRequest();
		}catch(e){
			//microsoft and the IE sister browsers
			try{
				
				this._upload_xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
			}catch(err){
					try{
						this._upload_xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
					}catch(err2){
						 throwCustomError(ref,1001);
						//	throw new Error("Browser doesn't support AJAX!");
					}
			}
		};
	
	this.__reader.onerror = function (e) {
			
		switch(e.target.error.code) {
			      case e.target.error.NOT_FOUND_ERR:
			    	  throwCustomError(ref,2044,'File Not Found!');
			        break;
			      case e.target.error.NOT_READABLE_ERR:
			    	  throwCustomError(ref,3315,'File is not readable');
			      break;
			      case e.target.error.ABORT_ERR:
			        break; 
			      case e.target.error.SECURITY_ERR:
			    	  throwCustomError(ref,3315,'File is not readable');
				        break; 
			      default:
			    	  
			    	// alert('An error occurred reading this file.');
			    	break;
		    };
		    
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
    this.__rawData=null;
    this.__reader.onload = function(e) {
    	ref._data = new ByteArray();
    	ref.__rawData = ref.__reader.result;
    	ref._data.writeBytes(ref.__rawData);
    	
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
		if(!f || !f.name) {
			throwCustomError(ref,2038);
		};
		
		ref.__size = f.size;
		ref.__name = f.name;
		ref.__extension = f.name.substr(f.name.lastIndexOf(".")+1,f.name.length);
		ref.__type = ref.__extension;
		ref.__modificationDate =  (f.lastModifiedDate)? f.lastModifiedDate : new Date();
		ref.__creationDate = (f.lastModifiedDate)? f.lastModifiedDate : new Date();
		this.__selectedFile = e.target.files[0];
		
		ref.__reader.readAsBinaryString(e.target.files[0]);
		 if (window.FormData) {  
			 ref.formdata = new FormData();  
		 }
		 ref.dispatchEvent(new Event(Event.SELECT,true,false));
		 ref.formdata.append("file", e.target.files[0]);  
		
	};
	
	
	 
		var onprogress =function(evt) 
		{
			   if (evt.lengthComputable) 
			   {  //evt.loaded the bytes browser receive
			      //evt.total the total bytes seted by the header
			      //
				  var toFireEvt = new ProgressEvent(ProgressEvent.PROGRESS,true,false, evt.loaded,evt.total);
				 
				  ref.dispatchEvent.call(ref,toFireEvt);
			     
			   } 
		};  
		this._upload_xmlHttpReq.addEventListener("progress",onprogress);
		this._upload_xmlHttpReq.onreadystatechange= function(){
			//alert(" "+ref._upload_xmlHttpReq.readyState);
			
			//0: request not initialized 
			//1: server connection established
			//2: request received 
			//3: processing request 
			//4: request finished and response is ready
			//trace(ref._upload_xmlHttpReq.readyState);
			switch(ref._upload_xmlHttpReq.readyState){
			case 0:
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			
			case 4:
				
				if(ref._upload_xmlHttpReq.status==200 || ref._upload_xmlHttpReq.status==0){
						ref.dispatchEvent.call(ref,new DataEvent(DataEvent.UPLOAD_COMPLETE_DATA, true, false, ref.data));
						
					}else {
						throwCustomError(ref,2038);
						
					}
				break;
			
			
			}
			
			
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
	//TODO: implement Filreference.cancel
	
	return true;
};



//Opens a dialog box that lets the user download a file from a remote server.
FileReference.prototype.download=function(request,defaultFileName){
	//request:requestURL, defaultFileName:String=null
	;
	//TODO: implement Filreference.download
	
};
//Starts the load of a local file selected by a user.
FileReference.prototype.load=function(){
	
    // Read in the image file as a binary string.
   // this.__reader.readAsBinaryString(this.__selectedFile);

};

//Opens a dialog box that lets the user save a file to the local filesystem.
FileReference.prototype.save=function(data,defaultFileName){
	//TODO: implement Filreference.save
	
};
//Starts the upload of the file to a remote server.
FileReference.prototype.upload=function(request, uploadDataFieldName, testUpload){
	//request:URLRequest, uploadDataFieldName:String = "Filedata", testUpload:Boolean = false
	this.containerForm.method = request.method;
	this.containerForm.action = request.url;
	
	//this.formdata.append("file", this.__selectedFile);  
	this._upload_xmlHttpReq.open(request.method, request.url,true);//, async, username, password)
	this._upload_xmlHttpReq.send(this.formdata);
	
};
//Initiate uploading a file to a URL without any encoding.
FileReference.prototype.uploadUnencoded=function(request){
	//request:URLRequest;
	this.upload(request);

};
