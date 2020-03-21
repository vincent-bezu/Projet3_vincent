class Chronometre{
    constructor(){

		this.countdown = document.getElementById('countdown');
		this.finish_res = document.getElementById('reservation_end')
		this.duration = 1200;
		this.isStart= false;
		this.intervalID = -1;
		this.resume = document.getElementById('resume');
		this.popup = document.getElementById('valid_newreserv');
		this.map = document.getElementById('map');
		this.information = document.getElementById('information');
	}

    init(){

		const newreserv = document.getElementById("new_reservation");
		newreserv.addEventListener("click", ()=> {
			this.popup.style.display = 'block';
			this.finish_res.style.display = 'none';
    		this.resume.style.display = 'none';
    		this.map.style.display = 'none';
    		this.information.style.display = 'none';

		})

		const valid_newreserv = document.getElementById('oui');
			valid_newreserv.addEventListener("click", ()=> {
			this.stop_chrono();
			this.resume.style.display = 'block';
    		this.map.style.display = 'block';
			this.countdown.style.display = 'block';
    		this.finish_res.style.display = 'none';
    		this.resume.style.display = 'none';
    		this.popup.style.display = 'none'
		})

		const non_valid = document.getElementById('non');
		non_valid.addEventListener("click", ()=> {
    		this.information.style.display = 'block';
			this.resume.style.display = 'none';
    		this.map.style.display = 'none';
			this.countdown.style.display = 'block';
    		this.resume.style.display = 'block';
    		this.popup.style.display = 'none'
		})




	
	}

	stop_chrono(){
		if(this.isStart===true) {
		   this.isStart= false;
		   this.chrono("end");
		}
	}

	start_chrono(duration){
		if(this.isStart===false) {
		   this.isStart= true;
		   this.duration = duration;
		   this.chrono("start");
		}
	}

	action_ival(){ 
		if (this.duration>0) {
			this.duration--;
			this.time = Math.floor(this.duration/60)   +":"+ (this.duration-(Math.floor(this.duration/60)*60)) ;
		}
		
		if (this.duration <= 0) {
    		alert ('reservation terminée');
    		clearInterval(this.intervalID);
    		this.countdown.style.display = 'none';
    		this.finish_res.style.display = 'block';

    	}
		
		sessionStorage.setItem('timer', this.duration);
		// si le temp est écoulé, afficher ceci //
	    this.countdown.innerHTML = `${this.time}s !`;
	}
 
	chrono(act){
		if(act==="start") {
       	 	this.intervalID = setInterval(()=>this.action_ival(), 1000);
    	} else {
       		clearInterval(this.intervalID);

    	}

    }

 
}