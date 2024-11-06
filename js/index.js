const images = document.querySelectorAll('.slider-img');
const controls = document.querySelectorAll('.controls'); 


let imageCount = 0;
let intervalId;

function active(count) {
	images[imageCount].classList.remove('active');
	images[count].classList.add('active');
	imageCount = count;
}

controls.forEach((e) => {
	e.addEventListener('click', (event) => {
		if(event.target.classList.contains("prev")) {
			let count = imageCount - 1;

			if (count < 0) {
				count = images.length - 1;
			}
			
			active(count);
		} 
		else if (event.target.classList.contains("next")) {
			let count = imageCount + 1;

			if (count >= images.length) {
				count = 0;
			}
			
			active(count);
	}
})
})
function autoSlide() {
	let count = imageCount + 1;

	if (count >= images.length) {
		count = 0;
	}

	active(count);
}

function startAutoSlide() {
  intervalId = setInterval(autoSlide, 6000);
}

startAutoSlide();