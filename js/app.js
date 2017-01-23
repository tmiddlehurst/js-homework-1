var num1 = parseInt (prompt ("Pick a number"), 10);
var num2 = parseInt (prompt ("Pick another number"), 10);
var operator = prompt ("Choose an operator: + - * /");
// Some sort of recurring prompt for when num1 || num2 === NaN
switch (operator) {
	case (operator = "+"):
		alert ("Your answer is:" + " " + (num1 + num2));
		break;
	case (operator = "-"):
		alert ("Your answer is:" + " " + (num1 - num2));
		break;
	case (operator = "*"):
		alert ("Your answer is:" + " " + (num1 * num2));
		break;
	case (operator = "/"):
		alert ("Your answer is:" + " " + (num1 / num2));
		break;

}
var name = prompt ("What is your name?");
function getwellsoon(name) {
	alert ("Get Well Soon," + " " + name);
}
getwellsoon(name);

