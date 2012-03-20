


function init(){
	
	function createRect(sprite,color){
		sprite.graphics.lineStyle(1,color,1);
		sprite.graphics.beginFill(color,1);
		sprite.graphics.drawRect(0,0,50,50);
		sprite.graphics.endFill();
	};
	//var ref=this;
	try{
	var loader= new Loader();
		
	var test = new DisplayObjectContainer("stage");
	//var bmpData = BitmapData(300,300);
	//var bmp =new Bitmap(bmpData);
	test.visible = true;
	var deg = 0;
	var firstTime=true;
	var bmpData;
	function translate(e)
	{
		deg+=1;
		//trace(loader.content.width,loader.content.height);
		var mat= new Matrix();
		mat.translate(100,100);
		mat.rotate(deg*Math.PI/180);
		//alert(deg);
		bmpData.draw(loader,mat);;//, matrix, colorTransform, blendMode, clipRect, smoothing);
		if(firstTime){
		var bmp= new Bitmap(bmpData); 
		bmp.x = 400;
		test.addChildAt(bmp,1);
		firstTime=false;
		}
	}
	var timer = new Timer(1000,-1);
	timer.addEventListener(TimerEvent.TIMER,translate);
	
	function handleEvents(e){
		switch(e.type){
		case IOErrorEvent.IO_ERROR:
			trace(e.errorID);
		break;
		case Event.COMPLETE:
			//trace(loader.width,loader.height)
			//loader.width = 100;
			//loader.height = 100;
			
			bmpData= new BitmapData(loader.content.width,loader.content.height);
			timer.start();
			//bmp.height = 50;
		break;
		}

	};
	var req= new URLRequest("apple_transparent.gif");//redrome04.jpg");//http://www.nyapplecountry.com/images/photosvarieties/
	loader.contentLoaderInfo.addEventListener(Event.COMPLETE,handleEvents);
	loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,handleEvents);
	
	loader.load(req);
	test.addChild(loader.content);
	
	
	
	}catch(e){
		alert("global:"+e.message);
	}
	
	/*
	window.addEventListener("click",function(e){
		alert(ref.getTimer());
		
		
	});

	//alert($as4js____core_____timeline.time);
	try{
	
	
	//TESTING SOUND
		function handleProgress(e){
			traceObj(e);
			
		};
		function handleOpen(e)
		{
			//trace("open");
			
		}
		function handleError(e){
			//trace(e.text);
		};
		function handleTimer(e){
			//trace("volume down");
			//soundChannel.stop();
			//soundChannel.soundTransform = new SoundTransform(0.1,0);
		}
		function handleSoundFinished(e){
			trace("soundFinished");
			
		};
		function handleSoundComplete(e){
			trace("playing");
			soundChannel= sound.play();
			soundChannel.addEventListener(Event.SOUND_COMPLETE,handleSoundFinished);
			timer.start();
		};
		var wayfaring = "http://www.robtowns.com/music/God%20Rest%20Ye%20Merry%20G-Men.mp3";
		var short = "http://images.wikia.com/starwars/images/f/f5/A_little_short.ogg";
		var long = "http://www.robtowns.com/music/blind_willie.mp3";
		var req = new URLRequest(wayfaring);
	var soundChannel;
	var sound = new Sound();
	sound.addEventListener(Event.COMPLETE,handleSoundComplete);
	sound.addEventListener(Event.OPEN,handleOpen);
	sound.addEventListener(ProgressEvent.PROGRESS,handleProgress);
	sound.addEventListener(IOErrorEvent.IO_ERROR,handleError);
	sound.load(req);
	var timer = new Timer(500,1);
	
	timer.addEventListener(TimerEvent.TIMER_COMPLETE,handleTimer);
	
	*/
	
	//*/
	
	
	//TESTING URLLOADER
	/*
	try{
		var xml = new XMLDocument();
		xml.ignoreWhite=true;
	var ref=this;
		function handleLoaded(e){
			try{
			xml.parseXML(urlLdr.data);
			traceObj(xml.firstChild.childNodes);//[0].attributes[0].firstChild.nodeValue);
			}catch(er){trace(er);}
		};
	var urlReq = new URLRequest("test.xml");
	var urlLdr = new URLLoader(urlReq);
	
	
	urlLdr.addEventListener(Event.COMPLETE, handleLoaded);
	urlLdr.load(urlReq);
	}catch(e){alert("alloverError:"+e);};
	*/
	/*
	try{
		var test = new DisplayObjectContainer("stage");
		var bmpData = new BitmapData(300, 300, false);//, 0x000000);
		var y = 0;
		for(var x =0;x<600;x+=1){
		for(y=0;y<600;y+=1){
		
				bmpData.setPixel32(x,y,0xFFFF00FF );
				//i+=4;
				
			}
		}
		var bmpData2 = new BitmapData(300,300, false,0xFF0000);
		bmpData2.copyChannel(bmpData, new Rectangle(0,0,bmpData.canvas.width,bmpData.canvas.height), new Point(0,0), BitmapDataChannel.BLUE, BitmapDataChannel.BLUE);
		var bmp = new Bitmap(bmpData2);
		test.addChild(bmp);
	}catch(e){alert(e);};
*/
	
//TESTING TEXT
	/*
	var test = new DisplayObjectContainer("stage");
	var txt = new TextField();
	txt.textColor=0xFF0000;
	txt.background = true;
	txt.backgroundColor = 0xffe2ff;
	txt.text = "hello there my lover!";
	txt.width = 240;
	txt.height = 50;
	test.addChild(txt);
	txt.alpha = 0.4;
	*/
	/*
	try{
	var test = new DisplayObjectContainer("stage");
	var sprite = new Sprite();
	test.addChild(sprite);
	
		
		
		var timer = new Timer(10,-1);
		var i =0;
		var newI= 0;
		sprite.graphics.lineStyle(2, 0x00FF00,1,false, 0.5, CapStyle.ROUND, JointStyle.MITER, 3);
		var increase=true;
		var newVal= 100;
		function handleTimer(e){
			sprite.graphics.clear();
			sprite.graphics.moveTo(320,320);
			sprite.graphics.beginFill(0xFF0000,1);
			sprite.graphics.drawCircle(newI,newI,newVal);
			sprite.graphics.endFill();
			
			//sprite.graphics.curveTo(i,100, newVal, 200);
			if(i==100){
				
				increase = false;
				
			}else if(i==0){
				increase=true;
			}
			
			if(increase){i++;}else{i--;}
			//sprite.graphics.context.stroke();
			
			newVal+=(newI - newVal)/10;
			
		};
		function handleTimerComplete(e){

		};
		timer.addEventListener(TimerEvent.TIMER, handleTimer);
		timer.addEventListener(TimerEvent.TIMER_COMPLETE, handleTimerComplete);
		timer.start();
		function handleRandom(){
			newI=Math.ceil(Math.random()*500);
			
		}
		var timer2 = new Timer(1000,-1);
		timer2.addEventListener(TimerEvent.TIMER, handleRandom);
		timer2.start();
	}catch(err){alert(err);};
	*/
	//TESTING PLAYER
	/*
	var player =new NitroVideoPlayer("player");
	var playBtn = new DisplayObject("playBtn");
	
	var pauseBtn = new DisplayObject("pauseBtn");
	var controlbar = new DisplayObjectContainer("controlBar");
	var progressBar = controlbar.getChildByName("progressBar");
	var progressBarFill = controlbar.getChildByName("progressBarFill");
	var volumeBar = controlbar.getChildByName("volumeBar");
	player.alpha = 0.4;
	var volumeBarFill = controlbar.getChildByName("volumeBarFill");
	
	volumeBar.getDIVContainer().addEventListener("click",handleVolume);
	volumeBarFill.getDIVContainer().addEventListener("click",handleVolume);
	player.getVideo().addEventListener("click",handleToggle);
	updateVolumeBar(1);
	
	var controls = new DisplayObject("controlBar");
	
	controls.y = player.y+200;
	function handleVolume(e){
		//traceObj(e);
		var barWidth = parseInt(volumeBar.getStyle("width"));
		var percent = (e.offsetX?e.offsetX : e.layerX)/barWidth;
		updateVolumeBar(percent);
		player.setVolume(percent);
		
	};
	function handleProgress(e){
		//alert("here");
		var percent= (e.progress/e.total);
		percent = percent>1? 1  :percent ;
		var newWidth = parseInt(progressBar.getStyle("width")) *percent;
	//	alert(progressBarFill.container);
		
		progressBarFill.setStyle("width",newWidth + "px");
			
	};
	function updateVolumeBar(percent)
	{
		var barWidth = parseInt(volumeBar.getStyle("width"));
		volumeBarFill.setStyle("width",percent*barWidth+"px");
		
	}
	function handleEvents(evt){
		switch(evt.currentTarget.id){
		case "playBtn":
			play();
			break;
		case "pauseBtn":
			pause();
			break;
		}
	};
	function play(){
		player.play();
		playBtn.visible=(false);
		pauseBtn.visible=(true);
	};
	function pause(){		
		player.pause();
		playBtn.visible=(true);
		pauseBtn.visible=(false);
	}
	playBtn.getDIVContainer().addEventListener("click",handleEvents);
	pauseBtn.getDIVContainer().addEventListener("click",handleEvents);
	player.addEventListener(MediaProgressEvent.EVT_PROGRESS,handleProgress);
	
	
	function handleToggle()
	{
		if(player.isPaused()) {play();}else {pause();};
	};
	*/
	
};