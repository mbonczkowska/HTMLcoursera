$(document).ready(function(){
	$("h1").css("color","red");
	$("#first").css("float","left");
	$("#first").css("margin-right","50px");
	$("#button1").click(function(){
		var $inp1 = $("#input1").val();
		
		if($inp1 > 5){
			$("#answer1").html("liczba jest wieksza od 5");
		}else{
			$("#answer1").html("liczba jest mniejsza niż 5");
		}
	});
	$("#button2").click(function(){
		var $inp2 = $("#input2").val();

		if($inp2 > 0){
			$("#answer2").html("liczba jest dodatnia");
		}else{
			$("#answer2").html("liczba jest ujemna");
		}
	});
	$("#button3").click(function(){
		var $inp3 = $("#input3").val();

		if($inp3 % 2 === 0){
			$("#answer3").html("liczba jest parzysta");
		}else{
			$("#answer3").html("liczba jest nieparzysta");
		}
	});

	$("#button4").click(function(){
		var $inp3 = $("#input3").val();
		var $inp2 = $("#input2").val();

		if($inp2 === $inp3){
			$("#answer4").html("liczby są równe");
		}else{
			$("#answer4").html("liczba nie są równe");
		}
	});
	$("#button5").click(function(){
		var $inp3 = $("#input3").val();
		var $inp2 = $("#input2").val();

		if($inp2 > $inp3){
			$("#answer5").html("pierwsza liczba jest wieksza");
		}else{
			$("#answer5").html("druga liczba jest wieksza");
		}
	});
});