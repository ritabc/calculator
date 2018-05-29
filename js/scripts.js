var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2){
  return number1 / number2;
}

alert("Addition: " + add(number1, number2));
alert("Subtraction: " + subtract(number1, number2));
alert("Multiplication: " + multiply(number1, number2));
alert("Division: " + divide(number1, number2));
