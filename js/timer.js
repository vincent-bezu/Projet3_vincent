class Chronometre{
    constructor(){
		this.countdown = document.getElementById('countdown');
		this.finish_res = document.getElementById('reservation_terminé')
		this.duration = 1200;
		this.isStart= false;
		this.intervalID = -1;
		this.resume = document.getElementById('resume');

    }

    init(){
		 
		const timerfin = document.getElementById("new_reservation");
		timerfin.addEventListener("click", ()=> {
			this.stop_chrono();
			this.countdown.style.display = 'block';
    		this.finish_res.style.display = 'none';
    		this.resume.style.display = 'none';
		   
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
		// recuperer minute et seconde afin de les afficher l32 //
		// enregistrer dans session storage //
		// si le temp est écoulé, afficher ceci //
		sessionStorage.setItem('timer', this.duration);
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