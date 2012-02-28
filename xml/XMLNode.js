/**
 * @namespace xml
 * @requires events.EventDispatcher
 * @class XMLNode
 * @author Yehia Shouman
 */
var XMLNode = function(type,value){
	var ref=this;
	
	this.appendChild = function(node){
		return this.DOMnode.appendChild(node);
	};
	this.cloneNode = function(deep){
		return this.DOMnode.cloneNode(deep);
	};
	this.getNamespaceForPrefix=function(ns){
		return this.lookupPrefix(ns);
	};
	this.hasChildNodes = function(){
		return this.DOMnode.hasChildNodes();
	};
	this.insertBefore=function(node,before){
		return this.DOMnode.insertBefore(node,before);
	};
	this.removeNode=function(){
		return this.DOMnode.parentNode.removeChild(this.DOMnode);
	};
	this.toString=function(){
		return this.DOMnode.xml ? this.DOMnode.xml : (new XMLSerializer()).serializeToString(this.DOMnode);
		  
	};
	this.__parseXMLStr=function(src){
		var xmlDoc;
		if (window.DOMParser)
		  {
		 var parser=new DOMParser();
		  xmlDoc=parser.parseFromString(src,"text/xml");
		  
		  }
		else // Internet Explorer
		  {
		  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		  xmlDoc.async="false";
		  xmlDoc.loadXML(src); 
		  }
		if(value!=undefined){
		ref.DOMnode = xmlDoc;
		ref.docRoot = ref.DOMnode.documentElement;
		};
	};

	this.__defineGetter__("attributes",function(){
		return this.DOMnode.attributes;
		
	});
	this.__defineSetter__("attributes",function(val){
		
		this.DOMnode.attributes = val;
	});

	this.__defineGetter__("childNodes",function(){
		return this.docRoot.childNodes;
		
	});


	this.__defineGetter__("firstChild",function(){
		return this.docRoot;
	});
	this.__defineSetter__("firstChild",function(val){
		this.docRoot = val;
	});
	this.__defineGetter__("lastChild",function(){
		return this.docRoot.lastChild;
		
	});
	this.__defineSetter__("lastChild",function(val){
		this.docRoot.lastChild = val;
	});


	this.__defineGetter__("localName",function(){
		return this.docRoot.localName;
		
	});
	this.__defineGetter__("namespaceURI",function(){
		return this.docRoot.namespaceURI;
		
	});
	this.__defineSetter__("nextSibling",function(val){
		this.docRoot.nextSibling = val;
	});
	this.__defineGetter__("nextSibling",function(){
		return this.docRoot.nextSibling;
		
	});
	this.__defineSetter__("nodeName",function(val){
		this.docRoot.nodeName = val;
	});
	this.__defineGetter__("nodeName",function(){
		return this.docRoot.nodeName;
		
	});
	this.__defineSetter__("nodeType",function(val){
		this.docRoot.nodeType = val;
	});
	this.__defineGetter__("nodeType",function(){
		return this.docRoot.nodeType;
		
	});

	this.__defineGetter__("nodeValue",function(){
		return this.docRoot.nodeValue;
		
	});
	this.__defineGetter__("parentNode",function(){
		return this.docRoot.parentNode;
		
	});
	this.__defineGetter__("prefix",function(){
		return this.docRoot.prefix;
		
	});
	this.__defineSetter__("previousSibling",function(val){
		this.docRoot.previousSibling = val;
	});
	this.__defineGetter__("previousSibling",function(){
		return this.docRoot.previousSibling;
		
	});
	this.__parseXMLStr(value);
	this.docRoot.nodeType= type || 3;
	
};

XMLNode.prototype = new Object();
XMLNode.constructor= XMLNode;
XMLNode.prototype.DOMnode=undefined;
XMLNode.prototype.docRoot=undefined;