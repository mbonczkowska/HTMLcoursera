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

});