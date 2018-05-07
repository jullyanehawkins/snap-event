var broken = false;
function changeLight(type) {
	if (type == 1){
		archive = "light-on.jpg";
	}
	if (type == 2){
		archive = "light-off.jpg";
	}
	if (type == 3){
		archive = "light-broken.jpg";
	}
	if (!broken){
		document.getElementById("light").src = archive;
		if (type == 3){
			broken = true;
		}
	}
}