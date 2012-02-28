/**
 * @namespace net
 * @requires events.EventDispatcher, Event.HTTPStatusEvent, URLRequest
 * @class URLLoader
 * @author Yehia Shouman
 */

var URLLoader = function(urlRequest){
	this._urlRequest = urlRequest;
	this._xmlHttpReq = undefined;
	try{
		//Firefox, opera 8.0+, safari
		this._xmlHttpReq= new XMLHttpRequest();
	}catch(e){
		//microsoft and the IE sister browsers
		try{
			
			this._xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(err){
				try{
					this._xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
				}catch(err2){
						throw new Error("Browser doesn't support AJAX!");
				}
		}
	}
	var ref = this;
	this._xmlHttpReq.onreadystatechange= function(){
		//alert(" "+ref._xmlHttpReq.readyState);
		
		//0: request not initialized 
		//1: server connection established
		//2: request received 
		//3: processing request 
		//4: request finished and response is ready
		switch(ref._xmlHttpReq.readyState){
		case 0:
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		
		case 4:
			
			if(ref._xmlHttpReq.status==200 || ref._xmlHttpReq.status==0){
					switch(ref.dataFormat){
					case "text":
						ref.data = ref._xmlHttpReq.responseText;
						
						break; 
					case "xml": 
						ref.data = ref._xmlHttpReq.responseXML;
						break;
					
					}
					ref.dispatchEvent(new HTTPStatusEvent(Event.COMPLETE, 200, "", []));
					
				}else {
					throw new Error("Page not found!");
				}
			break;
		
		
		}
		
		
	};
	
	
	this.__getClassType=function(){return "URLLoader";};

};
URLLoader.prototype = new EventDispatcher();
URLLoader.constructor = URLLoader;
URLLoader.prototype.bytesLoaded=0;
URLLoader.prototype.bytesTotal=0;
URLLoader.prototype.data = null;
URLLoader.prototype.dataFormat = "text";
URLLoader.prototype.close = function(){
	this.xmlHttpReq.abort();
	
	
	
};
URLLoader.prototype.load= function(urlRequest){
	var urlReqToLoad = urlRequest? urlRequest : this._urlRequest;
	if(!urlReqToLoad){
		throw new Error("URL Request not defined");
	}
	this._xmlHttpReq.open("GET", urlReqToLoad.url,false);//, async, username, password)
	this._xmlHttpReq.overrideMimeType('text/plain; charset=x-user-defined');
	this._xmlHttpReq.setRequestHeader('Content-Type', 'text/plain');
	this._xmlHttpReq.send();
	//alert(this._xmlHttpReq.);
};
