var video = document.querySelector('.video');



window.addEventListener("load", function() {
	console.log("Good job opening the window");
	
	//set auto play to false
	video.autoplay = false;

	//set loop to false
	video.loop = false;
});


 document.getElementById("play").addEventListener("click", function() {
 	console.log("Play Video");
	video.volume = 1;
	video.play();

});

document.getElementById("pause").addEventListener("click",function() {
	console.log("Pause Video");
	video.pause();


});

document.getElementById("slower").addEventListener("click",function() {
	console.log("Slow Down Video");
	let speed = video.playbackRate
	video.playbackRate *= 0.9;
	speed = video.playbackRate;
	console.log("Current speed is: ", speed)

});

document.getElementById("faster").addEventListener("click",function() {
	console.log("Speed Up Video");
	let speed = video.playbackRate
	video.playbackRate /= 0.9;
	speed = video.playbackRate;
	console.log("Current speed is: ", speed)

});

document.getElementById("mute").addEventListener("click",function() {
	console.log("Mute Video");
	let volume = video.volume
	if (volume === 0) {
		video.volume = slider.value/100;
		document.getElementById('mute').textContent = 'Mute';

	}
	if (volume != 0) {
	video.volume = 0
	document.getElementById('mute').textContent = 'Unmute';
	}
});

document.getElementById("slider").addEventListener("click",function() {
	console.log("Change Volume");
	let currentVolume = slider.value/100;
	console.log(currentVolume);
	video.volume = currentVolume;
	volume.value = volume;
});

document.getElementById("skip").addEventListener("click",function() {
	console.log("Skip Video");
	video.currentTime += 10;
	console.log("Video current time is ", video.currentTime)


});


document.getElementById("vintage").addEventListener("click",function() {
	console.log("Old School");

	video.classList.add('oldSchool')

});


document.getElementById("orig").addEventListener("click",function() {
	console.log("Original")
	video.classList.remove('oldSchool')

});