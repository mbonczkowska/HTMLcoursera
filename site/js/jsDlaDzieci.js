$(document).ready(function(){
	

	const partsOfBody = ["Nogi", "Usta", "Włosy", "Dłonie", 'Oczy'];
	const randomAdjectives = ["piękne", "schludne", "udane", "zgrabne", "naturalne"];
	const randomWords = ["Łanie", "Tygrysy", "Lamy", "Króliki","Lwice"];
	const animalPartsOfBody = ["Ogon", "Racice", "Pręgi","Futro", "Pióra"];
	const dopełniaczeZwierzecia = ["Tygrysa", "Łabędzia", "Łani", "Smoka","Owcy", "Sowy"];

	let partOfBody = partsOfBody[ Math.floor(Math.random() * partsOfBody.length)]; 
	let randomAdjective = randomAdjectives[ Math.floor(Math.random() * randomAdjectives.length)]; 
	let randomWord = randomWords[ Math.floor(Math.random() * randomWords.length)]; 
	let animalPartOfBody = animalPartsOfBody[ Math.floor(Math.random() * animalPartsOfBody.length)]; 
	let dopełniaczZwierzecia = dopełniaczeZwierzecia[ Math.floor(Math.random() * dopełniaczeZwierzecia.length)]; 

	let compliment = "Twoje " + partOfBody.toLowerCase() + " są jak " + randomAdjective + " " + randomWord.toLowerCase() + "!!!";

	$(".compliment").html(compliment);

	let nextcompliment = "Twoje " + partOfBody.toLowerCase() + " są bardziej " + 
	randomAdjective + " niż " + animalPartOfBody.toLowerCase() + " " + dopełniaczZwierzecia.toLowerCase() + "!!!";

	$(".nextCompliment").html(nextcompliment);

	let joinCompliment = ["Twoje", partOfBody.toLowerCase(), "są jak", randomAdjective , randomWord.toLowerCase(), "!!!"];
	$(".joinCompliment").html(joinCompliment.join(" "));

	let numbers = [3,"jest większe niż",2,"jest większe niż",1];
	$(".greaterThen").html(numbers.join(" "));


	let scores = {};

	scores.magda = 0;
	scores.kasia = 0;
	scores.ania = 0;
	scores.pawel = 0;
	scores.wojtek = 0;

	// round 1
	scores.magda = 1;

	// add point to every gamer
	for(let i = 0; i < Object.keys(scores).length; i++){
		scores[Object.keys(scores)[i]] += 1;
		$(".score").append(Object.keys(scores)[i] + ": " + scores[Object.keys(scores)[i]] + " ");
	}

	var moj = {
		"nazwa":"moja",
 		"tab": [ 7, 9, {cel: "zamieszkanie", liczba: 123}, 3.3]
 	};	

 	$(".getNumber").html(moj["tab"][2]["liczba"]);


 	let name = "Magda";

 	if(	name === "Magda" || name === "magda"){
 		$(".nameMessage").html("Ave ja :3");
 	} else if( name === "Grażynka" || name === "grażynka" ){
 		$(".nameMessage").html("Mami");
 	} else{
 		$(".nameMessage").html("Jesteś kimś innym? :O")
 	}

 	let number = 1;

 	while(number < 10000){
 		
 		number*=3;
 		$(".squere").append(number + " ");
 	}

 	let amazingAnimals = [];

 	for(let i = 0; i < randomWords.length; i++){
 		amazingAnimals[i] = "Niesamowite " + randomWords[i].toLowerCase();
 		$(".amazingAnimals").append(amazingAnimals[i] + " ");
 	}

 	const alphabet = "abcdefghijklmnoprstuwvxyz";
 	let randomSentence = "";
 	let i = 0;

 	while(i < 6){
 		randomSentence += alphabet[Math.floor( Math.random() * alphabet.length)];
 		i = randomSentence.length;
 	}

 	$(".randomSentence").html(randomSentence);

 	var originalString = "Everything is awesome";
 	var resultString = "";

 	for(let i = 0; i < originalString.length; i++){
 		if(originalString[i] === "a"){
 			resultString += "4";
 		} else if(originalString[i] === "o"){
 			resultString += "0";
 		} else if(originalString[i] === "e"){
 			resultString += "3";
 		}else{
 			resultString += originalString[i];
 		}
 	}
 	$(".hackerSentence").html(resultString);
});