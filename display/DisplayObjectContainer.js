/**
 * @namespace display
 * @requires
 * @class DisplayObjectContainer, DisplayObject, EventDispatcher
 * @author Yehia Shouman
 */

var DisplayObjectContainer=function (myDiv){
	DisplayObject.call(this,myDiv);
	this.__getClassType=function(){return "DisplayObjectContainer";};
	this.__updateRawChildren();
	this.toString = function(){return "DisplayObjectContainer "+this.container.id;};
};
DisplayObjectContainer.prototype = new DisplayObject();
DisplayObjectContainer.constructor = DisplayObjectContainer;

//public property numChildren setter and getter
defineAccessorProperty(DisplayObjectContainer, "numChildren", function(val) {
}, function() {
	return this.rawChildren.length;
});
DisplayObjectContainer.prototype.addChild=function(child){
	
	if(this.container==document){
		this.container.body.appendChild(child.container.firstChild);
	}else{
		this.container.appendChild(child.container);
		
	}
	child.stage = this.stage;
	this.__updateRawChildren();
	
};
DisplayObjectContainer.prototype.__updateRawChildren=function(){
	this.rawChildren = [];
	//try{
	if(!this.container.childNodes) return;
	for(var i=0;i<this.container.childNodes.length;i++){
		trace(":"+this.container.childNodes[i].id);
		if(this.container.childNodes[i].id){
		this.rawChildren.push(new DisplayObject(this.container.childNodes[i]));
	}else{
		continue;
		}	
	};
	/*}catch(e){
		
		trace("something wrong while updating children"+e+" "+this.id)
		
	}*/
};
DisplayObjectContainer.prototype.addChildAt=function(child,index){
	//trace(this.rawChildren.length+" "+index);
	var objAtIdx= this.rawChildren[index];
	
	try{this.removeChildAt(index);}catch(e){};
	if(this.container==document){
		if(objAtIdx!=undefined){
//			trace("1");
			
			this.container.body.insertBefore(child.container,isIE()? objAtIdx.container: objAtIdx);
		}else{
	//		trace("2");
			
			this.container.body.appendChild(child.container);
		}
	}else{
		if(objAtIdx!=undefined){
		//	trace("3");
			this.container.insertBefore(child.container,isIE()? objAtIdx: objAtIdx);
		}else{
			//trace("4"+objAtIdx);
			
			this.container.appendChild(child.container);
		}
		
	}
	child.stage = this.stage;
	
	this.__updateRawChildren();

	//TODO test DisplayObjectContainer.addChildAt
	
};
DisplayObjectContainer.prototype.contains = function(child){
	var result=false;
	var i=this.rawChildren.length;
	while(i>=0){
		if(this.rawChildren[i].container.id==child.container.id){
			result = true;
			break;
		}
		i--;
	};
	return result;
	//TODO test DisplayObjectContainer.contains
};
DisplayObjectContainer.prototype.toString=function(){
	
	var str="["+(this.__getClassType?this.__getClassType(): "Object")+" ";
	var prop;
	var propVal;
	
	for(var i in this)
	{
		prop = i;
		propVal = this[i];
		
		if(this.hasOwnProperty(prop) && propVal!=undefined &&propVal!=null && prop && propVal["toString"]){
			if(propVal.toString().indexOf("function")==-1){
				str+=i+":"+propVal+" ";
				};
		};
		
	};
	str+="]";
	return str;
	
};

DisplayObjectContainer.prototype.getChildAt=function(idx){
	return this.rawChildren[idx];
};
DisplayObjectContainer.prototype.getChildByName=function(name){
	var returnedChild=null;
	var i=0;
	while(i<this.rawChildren.length)
	{
		if(this.rawChildren[i].container.id==name){
			returnedChild = this.rawChildren[i];
			break;
		}
		i++;
	}
	return new DisplayObjectContainer(returnedChild);
};
DisplayObjectContainer.prototype.getChildIndex=function(child){
	var idx=-1;
	for(var i=0;i<this.rawChildren.length;i++)
	{
		if(this.rawChildren[i].container.id==child.container.id){
			idx=i;
			break;
		}
	}
	return idx;
};


DisplayObjectContainer.prototype.areInaccessibleObjectsUnderPoint = function(point){
	//TODO implement DisplayObjectContainer.areInaccessibleObjectsUnderPoint
	
};

DisplayObjectContainer.prototype.getObjectsUnderPoint = function(point) {
	//TODO implement DisplayObjectContainer.getObjectsUnderPoint
	var objectsUnderPoint =[];
	var rect,currentChild;
	for(var i=0;i<this.rawChildren.length;i++){
		currentChild = this.rawChildren[i];
		rect = new Rectangle(currentChild.x,currentChild.y,currentChild.width,currentChild.height);
		if(rect.containsPoint(point)){
			objectsUnderPoint.push(currentChild);
		}
		
	}
	return objectsUnderPoint;
};

DisplayObjectContainer.prototype.removeChild = function(child) {
	if(this.container==document){
		this.container.body.removeChild(child.container.firstChild);
	}else{
		this.container.removeChild(child.container);
		
	}
	this.__updateRawChildren();
	
};
DisplayObjectContainer.prototype.removeChildAt = function(index) {
	this.removeChild(this.getChildAt(index));
	
};
DisplayObjectContainer.prototype.setChildIndex = function(child,index) {
	var index1 = this.getChildIndex(child);
	this.swapChildrenAt(index1, index);
	
	//TODO implement DisplayObjectContainer.setChildIndex

};
DisplayObjectContainer.prototype.swapChildren = function(child1,child2) {
	
	var index1 = this.getChildIndex(child1);
	//var index2 = this.getChildIndex(child2);
	this.addChildAt(child2,index1);
	//this.addChildAt(child1,index2);
	
	
};
DisplayObjectContainer.prototype.swapChildrenAt = function(index1,index2) {
	var child1 = this.getChildAt(index1);
	var child2 = this.getChildAt(index2);
	this.addChildAt(child1,index2);
	this.addChildAt(child2,index1);
	child1.setStyle("zIndex",index2);
	child2.setStyle("zIndex",index1);
};
//public property mouseChildren setter and getter
defineAccessorProperty(DisplayObjectContainer, "mouseChildren", function(val) {
	//TODO implement DisplayObjectContainer.mouseChildren 
}, function() {
	return true;
});
//public property tabChildren setter and getter
defineAccessorProperty(DisplayObjectContainer, "tabChildren", function(val) {
	//TODO implement DisplayObjectContainer.tabChildren 
}, function() {
	return false;
});
//public property textSnapShot setter and getter
defineAccessorProperty(DisplayObjectContainer, "textSnapShot", function(val) {
	//TODO implement DisplayObjectContainer.textSnapShot 
}, function() {
	return null;
});

