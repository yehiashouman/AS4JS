


function init(){
	var newXPos = 0;
	var newYPos = 0;
	var sprite = new Sprite();
	var friction = .9;
	var spring = 2.5;
	var vx=0;
	var vy =0;
	function drawSprite(sprite,color){
		sprite.graphics.lineStyle(1,color,1);
		sprite.graphics.beginFill(color,1);
		sprite.graphics.drawRect(0,0,50,50);
		sprite.graphics.endFill();
	};
	function handleEnterFrame(e){
		
		vx += (newXPos - sprite.x) * spring; //spring: elastic coefficient
		vy += (newYPos - sprite.y) * spring;
		sprite.x += (vx *= friction); //friction: friction force
		sprite.y += (vy *= friction);
	};
	function handleKey(e){
		switch(e.keyCode){
		
		case Keyboard.UP:
			newYPos = (sprite.y-10);
			break;
		case Keyboard.DOWN:
			newYPos = (sprite.y+10);
			break;
		case Keyboard.LEFT:
			newXPos = (sprite.x-10);
			break;
		case Keyboard.RIGHT:
			newXPos = (sprite.x+10);
			break;
		
		
		};
		
		
		
	};
	root.stage.addEventListener(KeyboardEvent.KEY_UP,handleKey);
	root.stage.addEventListener(Event.ENTER_FRAME,handleEnterFrame);
	var test = new DisplayObjectContainer("stage");
	drawSprite(sprite,0xFF0000);
	test.addChild(sprite);
	
	
};