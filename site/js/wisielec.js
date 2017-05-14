$(document).ready(function(){

	const answers = ["lalkarz", "fable", "śródziemie", "achaja"];

	let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
	var letter = "";

	
	let emptyFields = [];
	console.log(randomAnswer);
	for(let i=0 ; i < randomAnswer.length ; i++){
		emptyFields[i] = "_";
	}

	

	var numberOfEmptyFields = emptyFields.length;
	var isChanged = emptyFields.length;
	var tries = 0;
	var counter = 0;

	while(numberOfEmptyFields > 0 && tries < 5){
		letter = prompt("Choose your letter");
		letter = letter.toLowerCase();
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
			}
			console.log(numberOfEmptyFields);
			isChanged = numberOfEmptyFields;
			tries++;
		}else{
			 $(".wrong").html("Choose only one letter");
		}

	}
	for(let i=0 ; i < randomAnswer.length ; i++){
		if(tries === 5 && emptyFields[i] === "_"){
			$(".wrong").html("The number of tries is too big. You loose");
		}
	}
});