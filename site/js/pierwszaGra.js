$(document).ready(function(){

	var canvas = document.getElementById("game");
	var ctx = canvas.getContext('2d');


	// dynamiczne ustawienie rozmiaru plotna
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;

	ctx.fillRect(0,0,canvas.width,canvas.height);

	var phrase = "Kliknij lub dotknij ekran by rozpoczac gre";
	ctx.font="bold 16px Arial, sans-serif";
	//wysrodkowanie tekstu
	var mt = ctx.measureText(phrase);
	var xCord  = (canvas.width/2) - (mt.width/2)
	ctx.fillStyle = "white";
	ctx.fillText(phrase,xCord,90);

	
	var imageObj = new Image();
	var originalWidth = imageObj.width;
	imageObj.width = Math.round((50 * document.body.clientWidth)/100);
	

	var logo = {
		img: imageObj,
		x: (canvas.width/2) - (imageObj.width/2),
		
	}
      imageObj.onload = function() {
        ctx.drawImage(logo.img,logo.x+50,50);
      };
      imageObj.src = "../images/title.png"
});