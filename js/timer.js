class Chronometre{
    constructor(){
		this.countdown = document.getElementById('countdown');
		this.finish_res = document.getElementById('reservation_terminé')
		this.second = 5;
		this.minute = 20;
		this.duration = 1201000;
		this.isStart= false;
		this.intervalID = -1;
    }

    init(){
		 
		const timerfin = document.getElementById("new_reservation");
		timerfin.addEventListener("click", ()=> {
			this.stop_chrono();
		   
		})
	}

	stop_chrono(){
		 if(this.isStart===true) {
		        this.isStart= false;
		        this.chrono("end");
		    }
	}

	start_chrono(second){
		  if(this.isStart===false) {
		        this.isStart= true;
		        this.second = second;
		        this.chrono("start");
		    }
	}

	action_ival(){ 
		this.second--;
		if (this.second <= 0) {
    		alert ('reservation terminée');
    		clearInterval(this.intervalID);
    		this.countdown.style.display = 'none';
    		this.finish_res.style.display = 'block';

    	}
		// recuperer minute et seconde afin de les afficher l32 //
		// enregistrer dans session storage //
		// si le temp est écoulé, afficher ceci //
	    this.countdown.innerHTML = `${this.second}s !`;
	}
 
	chrono(act){
		if(act==="start") {
       	 	this.intervalID = setInterval(()=>this.action_ival(), 1000);
    	} else {
       		clearInterval(this.intervalID);
    	}
    }
 
}