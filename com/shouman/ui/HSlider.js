var HSlider= function(divID)
{
	
	DisplayObjectContainer.call(this,divID);
	this.__getClassType=function(){return "HSlider";};
	
	this._knobID = "knob";
	this._sliderID = "slider_bar";
	
	this._knob = this.getChildByName(this._knobID);
	this._slider = this.getChildByName(this._sliderID);
	trace(this._slider.width);
	this.__isDragging = false;
	var ref=this;
	
	trace(this._knob);
	trace(this._slider);
	var handleMD = function(e){
		trace("is dragging");
		ref.__isDragging = true;
		
	};
	var handleMM = function(e){
		
		if(ref.__isDragging)
			{
			trace("dragging"+ref._knob.x  +" "+ref._slider.width);
			if(ref._knob.x>0 && ref._knob.x<ref._slider.width){
				ref._knob.x = ref.mouseX;	
				ref._knob.y = 0.5* ref._knob.height;
			}
			
			
		}
		
	};
	var handleMU = function(e){
		ref.__isDragging=false;
		
	};
	
	this.addEventListener(MouseEvent.MOUSE_DOWN,handleMD);
	this.addEventListener(MouseEvent.MOUSE_MOVE,handleMM);
	this.addEventListener(MouseEvent.MOUSE_UP,handleMU);
	

};

HSlider.prototype = new DisplayObjectContainer();
HSlider.constructor = HSlider;

//public property filters setter and getter
defineAccessorProperty(HSlider, "knob", function(val) {
	this._knob = val? val: this._knob;
}, function() {
	return this._knob;
});

//public property filters setter and getter
defineAccessorProperty(HSlider, "slider", function(val) {
	this._slider = val? val: this._slider;
}, function() {
	return this._slider;
});

