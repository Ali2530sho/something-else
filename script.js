var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function taghireRang (){
		body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+"," 
	+ color2.value 
	+")";
}

color1.addEventListener ("input", taghireRang);

color2.addEventListener ("input", taghireRang);

function getdirections (direction) {
	var goto;
	switch (direction) {
	case "forward":
		goto = "go strainght";
		break;
	case "left":
		goto = "go left";
		break;
	case "right":
		goto = "go right";
		break;
	case "behind":
		goto = "make a u turn";
		break;
	default:
		goto = "you are fucked";
	}

	return goto;
}




function xxxxx (oneofoptions) {
	var one of different answers;
	switch (oneofoptions) {
	case "one":
		oneofdifferentanswers= "answerone";
		break;
	case "two":
		oneofdifferentanswers= "answertwo";
		break;
	case "three":
		oneofdifferentanswers= "answerthree";
		break;
	}

	return oneofdifferentanswers;
}
