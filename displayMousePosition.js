var isMouseTracking = false;

//function to update the position of the mouse
function updateMousePosition() {
	
	if (isMouseTracking) {
		var positionX = document.getElementById("mousePositionX");
		positionX.innerText = event.clientX;
		var positionY = document.getElementById("mousePositionY");
		positionY.innerText = event.clientY;
		
	}
}

function toggleTracking() {
	isMouseTracking = !isMouseTracking;
	
	if (isMouseTracking) {
		document.getElementById("trackingStatus").innerText = "TRACKING";
	} else {
		document.getElementById("trackingStatus").innerText = "NOT TRACKING";
		}
}