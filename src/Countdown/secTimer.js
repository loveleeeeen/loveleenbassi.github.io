import React from 'react';

const SecTimer = () => {

	// Set the date we're counting down to
	var countDownDate = new Date("Oct 30, 2021 17:30:00").getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {
	// Get today's date and time
	var now = new Date().getTime();
	// Find the distance between now and the count down date
	var distance = countDownDate - now;
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	// Display the result in the element with id="demo"
	window.onload = function () {
		document.getElementById("demo").innerHTML = days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";
	}
	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo2").innerHTML = "EXPIRED";
	}
	}, 1000);



	return (
		<div>
		<p id="demo2"></p>
		<p></p>
		</div>
	);
};

export default SecTimer;