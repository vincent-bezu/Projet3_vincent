class Map {
	constructor (chronometre){
		this.formulaire = document.getElementById('formulaire');
		this.information = document.getElementById('information');
		this.canvas_signature = document.getElementById('canvas_signature');
		this.resume = document.getElementById('resume');
		this.resumebikes = document.getElementById('resumebikes');
		this.resumename = document.getElementById('resumename');
		this.resumesurname = document.getElementById('resumesurname');
		this.map = document.getElementById('map');
		this.chronometre = chronometre;
		
	}

	init (){
		if (sessionStorage.getItem('timer') > 0 ){
			this.resume.style.display = 'block';
			this.map.style.display = 'none';
			this.information.style.display = 'none';
			this.addInfo(sessionStorage.getItem('timer'));
			
		}

		let mymap = L.map('map').setView([49.04711303984615, 2.060267538583793], 13);

		L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
		                   maxZoom: 20,

		        }).addTo(mymap);

		const ajax = new Ajax();

		ajax.ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=cergy-pontoise&apiKey=fb5f8f610f8a6b5058a882aaad56d5027ad4ede5', reponse=>{
			console.log(JSON.parse(reponse));

			const stations = JSON.parse(reponse);
			 for (let i=0; i<stations.length; i++) { // 0 1 2 
			 	let station = stations[i];
			 	let marker = L.marker([station.position.lat, station.position.lng]).addTo(mymap);
			 
				marker.addEventListener('click', ()=> { 
					this.information.style.display = 'block';

				    sessionStorage.setItem("adresse", station.address);

		    		const address = document.getElementById('address')
					address.innerHTML = station.address;
					const name_station = document.getElementById('name_station')
					name_station.innerHTML = station.name;
					const slot = document.getElementById('slot')
					slot.innerHTML = station.bike_stands;
					const bikes = document.getElementById('bikes')
					bikes.innerHTML = station.available_bike_stands;
				});
				const reserver = document.getElementById('reservation');
				reserver.addEventListener('click', ()=>{
					if (station.available_bike_stands <= 0) {
						alert ('pas de vélo disponible è cette station');
					}else{
						this.formulaire.style.display = 'inline-block';
					}

						
				});
			} 
		});

		

		const continuer = document.getElementById('continuer');
		continuer.addEventListener('click', ()=>{
			const surname = document.getElementById('surname').value;
			const name = document.getElementById('name').value;

			if (surname.length <= 2){
				alert ('Vous avez oublié de saisir votre prénom');
				return false;
			}

			
			if (name.length <= 2){
				alert ('Vous avez oublié de saisir votre nom');
				return false;
			}	
		
			localStorage.setItem('surname', surname);
			
			localStorage.setItem('name', name);
			
			this.formulaire.style.display = 'none';
			this.canvas_signature.style.display = 'block';

		});

		const valider = document.getElementById('submit')
		valider.addEventListener('click', ()=>{	
			if (document.getElementById('signature').toDataURL() == document.getElementById('signatureCheck').toDataURL()) {
           		alert ('Veuillez apposer votre signature!');
            	document.getElementById('countdown').innerHTML = 'Veuillez vérifier les champs du forumlaire.';
            	return false;
        	}		
        	this.map.style.display = 'none';
			this.information.style.display = 'none';
        	this.addInfo(1200);			 	
		 	this.canvas_signature.style.display = 'none';
		 	this.resume.style.display = 'block';
		 	
		 	
		 });
	}

	addInfo(duration){
		const adresse = sessionStorage.getItem("adresse");
		this.resumebikes.innerHTML = adresse;
	 	const name = localStorage.getItem("name");
	 	this.resumename.innerHTML = name;
	 	const surname = localStorage.getItem("surname");
		this.resumesurname.innerHTML = surname;
		this.chronometre.start_chrono(duration);
	}

}