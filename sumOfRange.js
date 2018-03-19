//An array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
//Get sum of all elements
var sum = 0;

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
	sum += testArray[arrayPosition];
}

console.log("The sum of " + testArray + " is: " + sum);
