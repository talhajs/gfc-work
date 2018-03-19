function findMax (userArray) {

	var max = userArray[0]; //max variable
	var currentPosition;
	var nextPosition;
	
	for (arrayPosition = 0; arrayPosition < userArray.length; arrayPosition++) {
		if (userArray[arrayPosition] > max) max = userArray[arrayPosition];
		
	}
	
	return max;
	
}		