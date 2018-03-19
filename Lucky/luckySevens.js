function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms["playGame"].elements.length; loopCounter++) {
		if (document.forms["playGame"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["playGame"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function startGame () {
	clearErrors();
	
	var startBet = document.forms["playGame"]["startingBet"].value;
	var currentMoney = startBet;
	var dice1 = null;
	var dice2 = null;
	var sum = null;
	var totalRolls = 0;
	var maxWin = startBet;
	var maxRolls = 0;
	
	if (startBet < 1) {
		alert("Starting Bet amount must be more than $1 to play");
		document.forms["playGame"]["startingBet"].parentElement.className = "form-group has-error";
		document.getElementById("results").style.display = "none";
		document.forms["playGame"]["startingBet"].focus();
		return false;
	}
	
	do {
		dice1 = Math.floor((Math.random() * 6) + 1);
		dice2 = Math.floor((Math.random() * 6) + 1);
		sum = dice1+dice2;
		totalRolls++;
		
		if (sum == 7) {
			currentMoney += 4;
		} else {
			currentMoney -= 1;
		}
		
		if (currentMoney > maxWin) {
			maxWin = currentMoney;
			maxRolls = totalRolls;
		}
		
	} while (currentMoney > 0);

	
	document.getElementById("results").style.display = "block";
	document.getElementById("startBet").innerText = startBet;
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("maxAmount").innerText = maxWin;
	document.getElementById("rollsAtMax").innerText = maxRolls;
	
	return false;
}
		
		
		
		
		
		
		
		
	