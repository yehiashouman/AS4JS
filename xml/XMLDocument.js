/**
 * @namespace xml
 * @requires events.EventDispatcher
 * @class XMLDocument
 * @author Yehia Shouman
 */
//TODO normalize XML childnodes and attributes with custom classes to have them return results as in AS3
//http://pixelfumes.blogspot.com/2007/05/easy-xml-parsing-using-as3-actionscript.html
var XMLDocument = function(source){
	
	var ref=this;
	var src=source||"<?xml version='1.0' encoding='UTF-8'?><root/>";
	XMLNode.call(this,XMLNodeType.ELEMENT_NODE,src);
	this.__getClassName=function(){return "XMLDocument";};
	this.__ignoreWhiteSpace=false;
	this.__removeWhiteSpace=function(xmlNode){
		//alert(ref.ignoreWhite);
		if(ref.ignoreWhite){
		var notWhitespace=/\S/;
		for (var i=0;i<xmlNode.childNodes.length;i++){
			
			if ((xmlNode.childNodes[i].nodeType==XMLNodeType.TEXT_NODE) && (!notWhitespace.test(xmlNode.childNodes[i].nodeValue))) {
				xmlNode.removeChild(xmlNode.childNodes[i]);
				i--;
			}else{
				this.__removeWhiteSpace(xmlNode.childNodes[i]);
			}
		}
		}
	};
	this.createElement=function(name){
		return this.DOMnode.createElement(name);

	};
	this.createTextNode=function(name){
		return this.DOMnode.createTextNode(name);
		
	};
	this.parseXML= function(source){
		this.__parseXMLStr(source);
		this.__removeWhiteSpace(this.DOMnode);
	//	traceObj(this.toString());
		
	};
	this.__defineSetter__("idMap",function(val){
		
	});
	this.__defineGetter__("ignoreWhite",function(){
		return this.__ignoreWhiteSpace;
		
	});
	this.__defineSetter__("ignoreWhite",function(val){
		trace("setting set el setat");
		this.__ignoreWhiteSpace=val;
		
	});
	this.__defineGetter__("xmlDecl",function(){
		return this.docRoot.doctype;	
	});
	this.__defineSetter__("xmlDecl",function(val){
		this.docRoot.doctype=val;
	});

	this.__defineGetter__("test",function(){
		return "test";
		
	});

	this.__defineGetter__("docTypeDecl",function(){
		return this.docRoot.doctype;
		
	});
	this.__defineSetter__("docTypeDecl",function(val){
		this.docRoot.doctype=val;
	});
	this.__defineGetter__("idMap",function(){
		/*
		function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue){
		    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
		    var arrReturnElements = new Array();
		    var oAttributeValue = (typeof strAttributeValue != "undefined")? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)", "i") : null;
		    var oCurrent;
		    var oAttribute;
		    for(var i=0; i<arrElements.length; i++){
		        oCurrent = arrElements[i];
		        oAttribute = oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
		        if(typeof oAttribute == "string" && oAttribute.length > 0){
		            if(typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute))){
		                arrReturnElements.push(oCurrent);
		            }
		       }
		    }
		    return arrReturnElements;
		}*/
		return ;
		
	});

	//this.DOMnode = this.DOMnode.documentElement;
};
XMLDocument.prototype = new XMLNode();
XMLDocument.constructor = XMLDocument;
