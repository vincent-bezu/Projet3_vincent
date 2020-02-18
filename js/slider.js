class Slider{
	constructor() {
		this.images = ['venus.jpg', 'mercure.jpg', 'terre.jpg', 'mars.jpg', 'jupiter.png'];
		this.i = 0;
		this.intervalID = -1;
		this.pause = document.getElementById('pause');
		this.play = document.getElementById('play');
	}

	init () {
		this.scrolling();
		const next = document.getElementById('next');
		next.addEventListener('click', ()=> this.nextImage());
		const previous = document.getElementById('previous');
		previous.addEventListener('click', ()=> this.previousImage());
		
		this.pause.addEventListener('click', ()=> this.pauseSlider());
	
		this.play.addEventListener('click', ()=> this.playSLider());
	}


	nextImage() {
		const sliderImage = document.getElementById('sliderimage');
		if (this.i<this.images.length-1 ) { // 0, 1, 2, 3, 4, 
			this.i = this.i+1; // 1, 2, 3, 4, 5
		} else {
			this.i = 0; 
		}
		sliderImage.src = "img/" + this.images[this.i];

    }

	previousImage(){
		const sliderImage = document.getElementById('sliderimage');
		if (this.i>0) { // 1, 2, 3, 4, 5
			this.i = this.i-1; // 0, 1, 2, 3, 4
		} else {
			this.i = this.images.length-1; 
		}
		sliderImage.src = "img/" + this.images[this.i];
	}

	scrolling(){
		this.intervalID = setInterval(()=>this.nextImage(), 2000);
	}

	pauseSlider(){
		this.pause.innerHTML = "pause";
		this.play.innerHTML = "I";
		clearInterval(this.intervalID);
	}

	playSLider(){
		this.play.innerHTML = "play";
		this.pause.innerHTML = "O"
		this.scrolling()
	}
}



