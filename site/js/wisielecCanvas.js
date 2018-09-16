$(document).ready(function(){

	const answers = ["max", "fable", "westeros", "achaja"];

	let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
	var letter = "";
	var tries = 0; 
	var wrongLetter = 0;

	
	let emptyFields = [];
	console.log(randomAnswer);
	for(let i=0 ; i < randomAnswer.length ; i++){
		emptyFields[i] = "_";

	}

	var numberOfEmptyFields = emptyFields.length;
	var isChanged = emptyFields.length;
	var tries = 0;
	var counter = 0;

	var $f = document.getElementById("man");
	var context = $f.getContext("2d");

	$(".score").text("Pasword: " +  emptyFields + " has " + randomAnswer.length + " letters");
	
	function drawMan(wrongLetter){
			
			if(wrongLetter === 1)
			context.fillRect(40, 0, 40, 40);
			if(wrongLetter === 2)
			context.fillRect(55, 40, 10, 10);
			if(wrongLetter === 3)
			context.fillRect(35, 50, 50, 50);
			if(wrongLetter === 4)
			context.fillRect(10, 50, 30, 10);
			if(wrongLetter === 5)
			context.fillRect(80, 50, 30, 10);
			if(wrongLetter === 6)
			context.fillRect(35, 100, 10, 30);
			if(wrongLetter === 7)
			context.fillRect(75, 100, 10, 30);
	};

	$("#click").click(function(){
		var letter = $("#choice").val();

		if (tries < 5){

			if(letter.length === 1){
			counter = 0;
			for(let i=0 ; i < randomAnswer.length ; i++){
				if(letter === randomAnswer[i]){
					counter++;
					if(counter === 1){
					$(".correct").append("Letter " + letter + " is correct!");
					}
					emptyFields[i] = randomAnswer[i];
					numberOfEmptyFields--;
				}
			}
			if(isChanged === numberOfEmptyFields){
				$(".wrong").append("Letter " + letter + " is not correct!");
				wrongLetter++;
				drawMan(wrongLetter);
			}
			console.log(numberOfEmptyFields);
			isChanged = numberOfEmptyFields;
			tries++;
			}else{
				 $(".wrong").html("Choose only one letter");
			}
			

		}else{
			$(".error").html("You loose! Got five tires");
		}

	});

});