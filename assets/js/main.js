
window.onscroll = function () {
	console.log("Vertical: " + window.scrollY);
	console.log("Horizontal: " + window.scrollX);

};

function heightDiv() {
	var div1 = document.getElementById("us");
	var div2 = document.getElementById("myPersonalMessage");
	var div3 = document.getElementById("myPersonalMessage");



	console.log(panelDerecha.clientWidth);
	console.log(panelDerecha.clientHeight);
}


var audio = document.getElementById("myAudio");
audio.setAttribute("autoplay", "true");
audio.setAttribute("loop", "true");

var logic = function () {
	var a = 0;
	console.log("holi");
	var audioTurttles = function () {
		audio.play();
	}
	setInterval(audioTurttles, 180000);

};

logic();

var myVar = setInterval(myTimer, 1000);
function myTimer() {
	var d = new Date();
	document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

