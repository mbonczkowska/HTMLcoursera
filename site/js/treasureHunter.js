$(document).ready(function(){
	// size of map 1200 x 840

	var randomNumber = function(rozmiar){
		return Math.floor(Math.random() * rozmiar);
	}

	var width =  1200;
	var height = 840;

	var treasureLocation = {
		x: randomNumber(width),
		y: randomNumber(height)
	};

	var countDistance = function(event,treasureLocation){
		var substractX = event.offsetX - treasureLocation.x
		var substractY = event.offsetY - treasureLocation.y
		return Math.sqrt(Math.pow(substractX,2)) + Math.sqrt(Math.pow(substractY,2)); 
	};

	var hint = function(distance){
		if(distance < 30){
			return "So hot!";
		}else if(distance < 60){
			return "Hot";
		}else if(distance < 120){
			return "Close enough";
		}else if(distance < 240){
			return "It's getting cold";
		}else if(distance < 480){
			return "Winter is comming!";
		}else {
			return "Far far away";
		}
	}

	var clicks = 0;
	$("#map").click(function(event){
		clicks++;
		var distance = countDistance(event,treasureLocation);
		var hints = hint(distance);
		$(".clues").text(hints);
		$(".clicks").text(clicks);

		if(distance < 20){
			alert("Udało się! Skarbuś znaleziony");
		}
		if(clicks > 8){
			alert("Zbyt dużo kliknięć, a skarbu ni ma");
		}
	});
});