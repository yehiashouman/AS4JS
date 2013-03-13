/**
 * @namespace display
 * @requires
 * @class DisplayObject, EventDispatcher
 * @author Yehia Shouman
 */

var DisplayObject = function(myDiv){
	EventDispatcher.call(this);
	this._filters = [];
	this._scaleX = 1;
	this._scaleY = 1;
	var ref = this;
	if(myDiv){
		this.container = typeof(myDiv)=="string"? document.getElementById(myDiv): myDiv;
		
	}else{
		this.container = document.createElement("div");
		this.container.id="_instance"+Math.ceil(Math.random()*1000);
		
	};
	//alert(this.name+" "+this.container.id);
	
	this.stage = root.stage;
	this.__isMouseInBounds=function(){
		
		return (ref.mouseX<ref.width && ref.mouseY<ref.height && ref.mouseX>0 && ref.mouseY>0);
		
	};
	this.__handleclick = function(e){
		//if(ref.__isMouseInBounds())
		ref.dispatchEvent.call(ref,new MouseEvent(MouseEvent.CLICK,true,true));
	};
	this.__handleMU = function(e){
		//if(this.__isMouseInBounds())
			ref.dispatchEvent.call(ref,new MouseEvent(MouseEvent.MOUSE_UP,true,true));
		return;
	};	
	this.__handleMove=function(e){
		ref.dispatchEvent.call(ref,new MouseEvent(MouseEvent.MOUSE_MOVE,true,true));
		return;
		
	};
	this.__handleMD = function(e){
		//if(this.__isMouseInBounds())
		ref.dispatchEvent.call(ref,new MouseEvent(MouseEvent.MOUSE_DOWN,true,true));
		return;
	};
	this.__handleMout = function(e){
		ref.dispatchEvent.call(ref,new MouseEvent(MouseEvent.ROLL_OUT,true,true));
		return;
		
	};
	this.__handleMover = function(e){
		//if(ref.__isMouseInBounds())
		ref.dispatchEvent.call(ref,new MouseEvent(MouseEvent.ROLL_OVER,true,true));
		return;
		
	};
	
	this.getDIVContainer().addEventListener("click",this.__handleclick);
	this.getDIVContainer().addEventListener("mousedown",this.__handleMD);
	this.getDIVContainer().addEventListener("mouseup",this.__handleMU);
	this.getDIVContainer().addEventListener("mouseover",this.__handleMover);
	this.getDIVContainer().addEventListener("mouseout",this.__handleMout);
	this.getDIVContainer().addEventListener("mousemove",this.__handleMove);
	

	this.toCamelCase = function( sInput ) {
		  var oStringList = sInput.split('-');
		  if(oStringList.length == 1)  
		    return oStringList[0];
		  var ret = sInput.indexOf("-") == 0 ?
		      oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1) : oStringList[0];
		  for(var i = 1, len = oStringList.length; i < len; i++){
		    var s = oStringList[i];
		    ret += s.charAt(0).toUpperCase() + s.substring(1);
		  }
		  return ret;
		};
		
		this.degreesToRadians = function (num) {
			return (num) * Math.PI / 180;
		};
		this.createIEMatrixString=function (M) {
			return 'M11=' + M.e(1, 1) + ', M12=' + M.e(1,2) + ', M21=' + M.e(2,1) + ', M22=' + M.e(2,2);
		};
		this.RGB2HexStr=function (color) {
		    if (color.substr(0, 1) === '#') {
		        return color;
		    }
		    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
		    
		    var red = parseInt(digits[2]);
		    var green = parseInt(digits[3]);
		    var blue = parseInt(digits[4]);
		    
		    var rgb = blue | (green << 8) | (red << 16);
		    return parseInt("0x"+digits[1] + rgb.toString(16));
		};
		this.intHex2HexStr= function(hex){
			var clr = (hex.toString(16));
			while(clr.length<6){
				clr="0"+clr;
			}
			return "#"+clr;
		};
		this.intHex2RGB = function (hex){
			var clr = (hex.toString(16));
			while(clr.length<6){
				clr="0"+clr;
			}//"FFFFFF"
			var r= parseInt(clr.substring(0,2),16);
			var g= parseInt(clr.substring(3,4),16);
			var b= parseInt(clr.substring(5, 6),16);
			return "rgb(" + r + "," + g + "," + b + ")";
		};
		this.intHex2RGBA = function(hex,alpha)
		{
			var clr = (hex.toString(16));
			while(clr.length<6){
				clr="0"+clr;
			}//"FFFFFF"
			var r= parseInt(clr.substring(0,2),16);
			var g= parseInt(clr.substring(2,4),16);
			var b= parseInt(clr.substring(4, 6),16);
			return "rgba(" + r + "," + g + "," + b + ","+alpha+")";
		};
	//	this.rotation = 90;
	//this.alpha = 1;
		
		this.getStyle = function(style) {
		if(!document.getElementById) return;
		if(!ref.container) return;
		if(!ref.container.style) return 0;
			   var value = ref.container.style[toCamelCase(style)];
			  if(!value)
			    if(document.defaultView)
			      value = document.defaultView.
			         getComputedStyle(ref.container, "").getPropertyValue(style);
			    else if(ref.container.currentStyle)
			      value = ref.container.currentStyle[toCamelCase(style)];
			  return value;
		
			  
		};
		this.setStyle=function (style, value) {
			if(!ref.container) return;
			if(!ref.container.style) return 0;
				  ref.container.style[style] = value;
		};
		this.removeStyle= function(style){
			ref.container.style[style]='';
		};
		
		w = parseInt(this.getStyle("width"));
		h= parseInt(this.getStyle("height"));
		this._width = w? w : 0;
		this._height = h? h: 0;
		this.setStyle("position","absolute");
		this.__getClassType=function(){return "DisplayObject";};
		$as4js____core_____timeline.registerEnterFrame(this);
		//alert("aiwa");
};
DisplayObject.prototype = new EventDispatcher();
DisplayObject.constructor = DisplayObject;
DisplayObject.prototype.name = null;
DisplayObject.prototype.container =null;

defineAccessorProperty(DisplayObject,"visible",function(val){this.setStyle("display", val? "block" : "none");},function(){
	if(this.getStyle("display")){
		return (this.getStyle("display")=="block")? true: false ;
			
	}else{
		return true;
	};
});

/*DisplayObject.prototype.__defineGetter__("visible",function(){
	if(this.getStyle("display")){
		return (this.getStyle("display")=="block")? true: false ;
			
	}else{
		return true;
	};
});
DisplayObject.prototype.__defineSetter__("visible",function(val){this.setStyle("display", val? "block" : "none");});
*/
DisplayObject.prototype.getDIVContainer = function(){
	return this.container;	

};
//public property alpha setter and getter
defineAccessorProperty(DisplayObject, "alpha", function(val) {
	this.setStyle("filter", "alpha(opacity="+(val*100)+")" );
	this.setStyle("-moz-opacity", val);
	this.setStyle("-khtml-opacity", val);
	this.setStyle("opacity", val);
}, function() {
	
	return (parseInt(this.getStyle("opacity")));
});

//public property filters setter and getter
defineAccessorProperty(DisplayObject, "filters", function(val) {
	this._filters=(val);
	this.__applyFilters();
	
	//alert(val);
	//TODO implement filters http://placenamehere.com/article/384/css3boxshadowininternetexplorerblurshadow/
	
}, function() {
	return this._filters;
});

DisplayObject.__findAngleOfRelativeObject=function(x,y)
{
	var rads= Math.atan2(y, x);
	var degs = (rads) * (180 / Math.PI);
	return degs;
};
DisplayObject.__findPositionOfRelativeObject=function(radius,angle)
{
	var rad=angle * (Math.PI/180);
	return new Point(radius*Math.cos(rad), radius*Math.sin(rad));
};

DisplayObject.prototype.__applyFilters=function(){
	for(var i=0;i<this._filters.length;i++){
		
		var filter = this.filters[i];
		switch (filter.__getClassType())
		{
		case "DropShadowFilter":
				var inset = filter.inset? "inset": "";
				var shadowPt = DisplayObject.__findPositionOfRelativeObject(filter.distance,filter.angle);
				var hPos = Math.ceil(shadowPt.x)+"px";
				var vPos = Math.ceil(shadowPt.y)+"px";
				var blurRad = (Math.max(filter.blurX,filter.blurY))+"px";
				var spread = (filter.strength*10)+"px";
				var clr = DisplayObject.intHex2HexStr(filter.color);
				var val = [inset,hPos,vPos,blurRad,spread,clr].join(" ");
				
				this.setStyle("-moz-box-shadow", val);
				this.setStyle("-webkit-box-shadow",val);
				this.setStyle("box-shadow",val);
				/* For IE 8 */
				this.setStyle("-ms-filter","'progid:DXImageTransform.Microsoft.Shadow(Strength="+filter.strength+", Direction="+(filter.angle+90)+", Color=\'"+clr+"\')'");
				/* For IE 5.5 - 7 */
				this.setStyle("filter","progid:DXImageTransform.Microsoft.Shadow(Strength="+filter.strength+", Direction="+(filter.angle+90)+", Color=\'"+clr+"\')");
				

			break;
		
		
		};
		
		
	}
	
};
//public property name setter and getter
defineAccessorProperty(DisplayObject, "name", function(val) {
	this.container.id=val;
}, function() {
	 return this.container.id;
});
//public property width setter and getter
defineAccessorProperty(DisplayObject, "width", function(val) {
	this.setStyle("width",w+"px");
}, function() {
	 return parseInt(this.getStyle("width"));
		
});
//public property height setter and getter
defineAccessorProperty(DisplayObject, "height", function(val) {
	this.setStyle("height",h+"px");
}, function() {
	return parseInt(this.getStyle("height"));
});
//public property x setter and getter
defineAccessorProperty(DisplayObject, "x", function(val) {
	this.setStyle("left",val+"px");
}, function() {
	return this.getStyle("left")!="auto"?parseInt(this.getStyle("left")):0; //offset -> method allows you to retrieve the current position of an element 'relative' to the document
	
});
//public property y setter and getter
defineAccessorProperty(DisplayObject, "y", function(val) {
	this.setStyle("top",val+"px");
}, function() {
	return this.getStyle("top")!="auto"?parseInt(this.getStyle("top")):0; //offset -> method allows you to retrieve the current position of an element 'relative' to the document
});
//public property mouseX setter and getter
defineAccessorProperty(DisplayObject, "mouseX", function(val) {
	//TODO implement DisplayObject.mouseX 
}, function() {
	return (window.mouseX - this.container.offsetLeft); //offset -> method allows you to retrieve the current position of an element 'relative' to the document
});
//public property mouseY setter and getter
defineAccessorProperty(DisplayObject, "mouseY", function(val) {
	//TODO implement DisplayObject.mouseY 
}, function() {
	return (window.mouseY - this.container.offsetTop); //offset -> method allows you to retrieve the current position of an element 'relative' to the document
});
//public property opaqueBackground setter and getter
defineAccessorProperty(DisplayObject, "opaqueBackground", function(val) {
	var clr = (val.toString(16));
	while(clr.length<6){
		clr="0"+clr;
	}
	this.container.style.backgroundColor="#"+clr;

}, function() {
	return this.getStyle("background-color")? this.RGB2HexStr(this.getStyle("background-color")): undefined;
});
//public property parent setter and getter
defineAccessorProperty(DisplayObject, "parent", function(val) {
	//TODO implement DisplayObject.parent 
}, function() {
	return new DisplayObject(this.container.parentNode);
});
//public property root setter and getter
defineAccessorProperty(DisplayObject, "root", function(val) {
	//TODO implement DisplayObject.root 
}, function() {
	return root;
});
//public property rotation setter and getter
defineAccessorProperty(DisplayObject, "rotation", function(deg) {
	deg_str = deg + "";
	rotate_transform = "rotate(" + deg + "deg)";
	
	this.setStyle("rotation",deg_str + "deg"); // CSS3
	this.setStyle("MozTransform",rotate_transform); // Moz
	this.setStyle("OTransform",rotate_transform); // Opera
	this.setStyle("WebkitTransform",rotate_transform); // Webkit/Safari/Chrome
	try{
	filter_str = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', " + matrix_str + ")";

	matrix_str = this.createIEMatrixString(Matrix.Rotation(this.degreesToRadians(deg)));
	this.setStyle("filter",filter_str); // IE 6/7
	this.setStyle("MsFilter",filter_str); // IE 8
	this.setStyle("zoom","1"); // ??? Probably IEs
	}catch(e){};

}, function() {
	return this.getStyle("rotation")? parseInt(this.getStyle("rotation")): 0;
	
});

//public property scaleX setter and getter
defineAccessorProperty(DisplayObject, "scaleX", function(val) {
	this._scaleX = val;
	this.setStyle("width",(this._width * val)+"px");
}, function() {
	return this._scaleX;
});

//public property scaleY setter and getter
defineAccessorProperty(DisplayObject, "scaleY", function(val) {
	this._scaleY = val;
	this.setStyle("height",(this._height * val)+"px");
}, function() {
	return this._scaleY;
});

DisplayObject.RGBComp2intHex=function (r,g,b,a) {
    return parseInt("0x"+this.toHex(a)+this.toHex(r)+this.toHex(g)+this.toHex(b));
    
};
DisplayObject.toHex = function(N){
		 if (N==null) return "00";
		 N=parseInt(N); if (N==0 || isNaN(N)) return "00";
		 N=Math.max(0,N); N=Math.min(N,255); N=Math.round(N);
		 return "0123456789ABCDEF".charAt((N-N%16)/16)
		      + "0123456789ABCDEF".charAt(N%16);
		
};
DisplayObject.RGBComp2HexStr=function (r,g,b,a) {
    
    var red = (r).toString(16);
    var green = (g).toString(16);
    var blue = (b).toString(16);
    var alpha = (a).toString(16);
    var rgb = blue | (green << 8) | (red << 16) | (alpha<<32);
    return "#"+rgb.toString(16);
    
};

DisplayObject.RGB2HexStr=function (color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return parseInt("0x"+digits[1] + rgb.toString(16));
};
DisplayObject.intHex2HexStr= function(hex,noHash){
	var clr = (hex.toString(16));
	while(clr.length<6){
		clr="0"+clr;
	}
	return (noHash? "" : "#")+clr;
};

DisplayObject.intHex2RGB = function (hex){
	var clr = (hex.toString(16));
	while(clr.length<6){
		clr="0"+clr;
	}//"FFFFFF"
	var r= parseInt(clr.substring(0,2),16);
	var g= parseInt(clr.substring(3,4),16);
	var b= parseInt(clr.substring(5, 6),16);
	return "rgb(" + r + "," + g + "," + b + ")";
};
DisplayObject.intHex2RGBA = function(hex,alpha)
{
	var clr = (hex.toString(16));
	while(clr.length<6){
		clr="0"+clr;
	}//"FFFFFF"
	var r= parseInt(clr.substring(0,2),16);
	var g= parseInt(clr.substring(2,4),16);
	var b= parseInt(clr.substring(4, 6),16);
	return "rgba(" + r + "," + g + "," + b + ","+alpha+")";
};
