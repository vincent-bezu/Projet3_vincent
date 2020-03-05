class Slider{
	constructor() {
		this.images = ['etape1.png', 'etape2.png', 'etape3.png', 'etape4.png', 'etape5.png'];
		this.i = 0;
		this.intervalID = -1;
		this.pause = document.getElementById('pause');
		this.isPaused = false;
	}

	init () {
		this.scrolling();
		const next = document.getElementById('next');
		next.addEventListener('click', ()=> this.nextImage());
		const previous = document.getElementById('previous');
		previous.addEventListener('click', ()=> this.previousImage());
		
		this.pause.addEventListener('click', ()=> {
			if (this.isPaused === false){
				this.pauseSlider();
			} else {
				this.playSlider();
			}
		});
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
		this.intervalID = setInterval(()=>this.nextImage(), 3000);
	}

	pauseSlider(){
		this.isPaused = true;
		const icone = document.getElementById('pausebutton');
		icone.classList.remove('fa-pause-circle');
		icone.classList.add('fa-play-circle');
		clearInterval(this.intervalID);
	}


	playSlider(){
		this.isPaused = false;
		const icone = document.getElementById('pausebutton');
		icone.classList.remove('fa-play-circle');
		icone.classList.add('fa-pause-circle');
		this.scrolling();
	}
}



