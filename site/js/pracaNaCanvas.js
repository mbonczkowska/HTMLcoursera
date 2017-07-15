$(document).ready( function(){
	var $f = document.getElementById("figures");
	var context = $f.getContext("2d");
	/*for(i = 0; i < 8; i++){
		context.fillRect(i* 10, i * 10, 10, 10);
	}*/
	context.fillRect(40, 0, 50, 50);
	context.fillRect(60, 50, 10, 20);
	context.fillRect(30, 70, 70, 70);
	context.fillRect(0, 70, 30, 10);
	context.fillRect(100, 70, 30, 10);
	context.fillStyle = "Green";
	context.fillRect(30, 140, 10, 50);
	context.fillRect(90, 140, 10, 50);

	var $flag = document.getElementById("flag");
	var flagContext = $flag.getContext("2d");


	
	flagContext.fillStyle = "Blue";
	flagContext.fillRect(0, 0, 50, 100);
	flagContext.fillStyle = "White";
	flagContext.fillRect(50, 0, 50, 100);
	flagContext.fillStyle = "Red";
	flagContext.fillRect(100, 0, 50, 100);
	flagContext.fillStyle = "Black";
	flagContext.lineWidth = 1;
	flagContext.strokeRect(0, 0, 150, 100);

	var $stroke = document.getElementById("stroke");
	var strokeRect = $stroke.getContext("2d");
	strokeRect.strokeStyle = "Blue";
	strokeRect.strokeRect(0, 0, 50, 100);

	strokeRect.strokeStyle ="Green";
	strokeRect.beginPath();
	strokeRect.moveTo(10,10);
	strokeRect.lineTo(100,100);
	strokeRect.stroke();

	var $stick = document.getElementById("stick-man");
	var stickMan = $stick.getContext("2d");

	stickMan.lineWidth = 4;
	// head
	stickMan.strokeRect(25, 10, 30, 30);
	stickMan.beginPath();
	//chest
	stickMan.moveTo(40,40);
	stickMan.lineTo(40,90);
	// arms
	stickMan.moveTo(40,60);
	stickMan.lineTo(10,40);
	stickMan.moveTo(40,60);
	stickMan.lineTo(70,40);
	// legs
	stickMan.moveTo(40,90);
	stickMan.lineTo(10,120);
	stickMan.moveTo(40,90);
	stickMan.lineTo(70,120);

	stickMan.stroke();

	var $house = document.getElementById("house");
	var house = $house.getContext("2d");

	house.fillStyle = "Purple";
	house.moveTo(20,100);
	house.lineTo(20,140);
	house.lineTo(60,140);
	house.lineTo(60,100);
	house.lineTo(40,80);
	house.lineTo(20,100);

	house.fill();


	var $snow = document.getElementById("snow-man");
	var snowMan = $snow.getContext("2d");

	var circle = function(x, y, radius, fillCircle){
		snowMan.beginPath();
		snowMan.arc(x,y, radius, 0, Math.PI * 2, false);


		if(fillCircle === true){
			snowMan.fill();
		} else {
			snowMan.lineWidth = 4;
			snowMan.stroke();
		}
	}
	var drawSnowman = function(x, y){
		// head body
		circle(40 + x, 30 + y, 20, false);
		circle(40 + x, 80 + y, 30, false);
		// eyes
		circle(35 + x, 25 + y, 4, true);
		circle(45 + x, 25 + y, 4, true);

		// nose
		snowMan.fillStyle = "Orange";
		circle(40 + x, 35 + y, 4, true);
		

		// buttons
		snowMan.fillStyle = "Black";
		circle(40 + x, 100 + y, 4, true);
		circle(40 + x, 80 + y, 4, true);
		circle(40 +x , 60 + y, 4, true);
	}
	
	drawSnowman(0,0);
	drawSnowman(30,0);
	
	var $line = document.getElementById("draw-line");
	var drawLine = $line.getContext("2d");

	var dots = [[50, 50], [50, 100], [100,100], [100,50], [50, 50]];

	var secret = [[50, 50], [50, 100], [25,120], [100,50], [70, 90], [100,90], [70, 120]];


	var conectDots = function(dots){

		drawLine.beginPath();
		drawLine.moveTo(dots[0][0],dots[0],[1]);

		for(i = 1; i < dots.length; i++){
			console.log(dots[i][0]);
		drawLine.lineTo(dots[i][0],dots[i][1]);
		}
		drawLine.fill();
	}

	conectDots(secret);
	
})