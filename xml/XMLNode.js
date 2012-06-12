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
		var xmlDoc="";;
		if(DOMParser){
			try{
			var parser=new DOMParser();
			xmlDoc=parser.parseFromString(src,"text/xml");
			}catch(e){};
		}else{
			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		  	xmlDoc.async="false";
		  	xmlDoc.loadXML(src);
		  	
		};
			
		if(value!=undefined){
			ref.DOMnode = xmlDoc;
			ref.docRoot = ref.DOMnode.documentElement;
		};
	};
	
	this.__parseXMLStr(value);
	this.docRoot.nodeType= type? type : 3;
	
};

XMLNode.prototype = new Object();
XMLNode.constructor= XMLNode;
XMLNode.prototype.DOMnode=undefined;
XMLNode.prototype.docRoot={};
//public property attributes setter and getter
defineAccessorProperty(XMLNode, "attributes", function(val) {
	this.DOMnode.attributes = val;
}, function() {
	return this.DOMnode.attributes;
});
//public property childNodes setter and getter
defineAccessorProperty(XMLNode, "childNodes", function(val) {
	//TODO implement XMLNode.childNodes 
}, function() {
	return this.docRoot.childNodes;
});
//public property firstChild setter and getter
defineAccessorProperty(XMLNode, "firstChild", function(val) {
	this.docRoot = val;
}, function() {
	return this.docRoot;
});
//public property lastChild setter and getter
defineAccessorProperty(XMLNode, "lastChild", function(val) {
	this.docRoot.lastChild = val;
}, function() {
	return this.docRoot.lastChild;
});
//public property localName setter and getter
defineAccessorProperty(XMLNode, "localName", function(val) {
	//TODO implement XMLNode.localName 
}, function() {
	return this.docRoot.localName;
});
//public property namespaceURI setter and getter
defineAccessorProperty(XMLNode, "namespaceURI", function(val) {
	//TODO implement XMLNode.namespaceURI 
}, function() {
	return this.docRoot.namespaceURI;
});
//public property nextSibling setter and getter
defineAccessorProperty(XMLNode, "nextSibling", function(val) {
	this.docRoot.nextSibling = val;
}, function() {
	return this.docRoot.nextSibling;
});
//public property nodeName setter and getter
defineAccessorProperty(XMLNode, "nodeName", function(val) {
	this.docRoot.nodeName = val;
}, function() {
	return this.docRoot.nodeName;
});
//public property nodeType setter and getter
defineAccessorProperty(XMLNode, "nodeType", function(val) {
	this.docRoot.nodeType = val;
}, function() {
	return this.docRoot.nodeType;
});
//public property nodeValue setter and getter
defineAccessorProperty(XMLNode, "nodeValue", function(val) {
	//TODO implement XMLNode.nodeValue 
}, function() {
	return this.docRoot.nodeValue;
});
//public property parentNode setter and getter
defineAccessorProperty(XMLNode, "parentNode", function(val) {
	//TODO implement XMLNode.parentNode 
}, function() {
	return this.docRoot.parentNode;
});
//public property prefix setter and getter
defineAccessorProperty(XMLNode, "prefix", function(val) {
	//TODO implement XMLNode.prefix 
}, function() {
	return this.docRoot.prefix;
});
//public property previousSibling setter and getter
defineAccessorProperty(XMLNode, "previousSibling", function(val) {
	this.docRoot.previousSibling = val;
}, function() {
	return this.docRoot.previousSibling;
});
