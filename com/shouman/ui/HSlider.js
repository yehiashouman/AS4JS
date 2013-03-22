var HSlider= function(divID)
{
	EventDispatcher.call(this);
	this.container = new DisplayObjectContainer(divID);
	
	this._knob = this.container.getChildByName("knob_btn");
	this._slider = this.container.getChildByName("slider_bar");
	this._value =0;
	this.__isDragging = false;
	var ref=this;
	
	
	var handleMD = function(e){
		ref.__isDragging = true;
		
	};
	var proposedX = 0;
	var handleMM = function(e){
		
		if(ref.__isDragging)
			{
			
			proposedX = ref._slider.mouseX -ref.container.x;
			trace(proposedX+" "+ref._slider.width)
			if(proposedX>=0 && proposedX<ref._slider.width- ref._knob.width){
				ref._knob.x = proposedX;	
				ref._value = ref._knob.x / (ref._slider.width- ref._knob.width);
				ref.dispatchEvent(new DataEvent(DataEvent.DATA,true,false,ref._value));
			}
		}
		
	};
	var handleMU = function(e){
		ref.__isDragging=false;
		
	};
	trace(this.container)
	this.container.addEventListener(MouseEvent.MOUSE_DOWN,handleMD);
	this.container.addEventListener(MouseEvent.MOUSE_MOVE,handleMM);
	this.container.addEventListener(MouseEvent.MOUSE_UP,handleMU);
	

};

HSlider.prototype = new EventDispatcher();
HSlider.constructor = HSlider;

//public property value setter and getter
defineAccessorProperty(HSlider, "value", function(val) {
}, function() {
	return this._value;
});
