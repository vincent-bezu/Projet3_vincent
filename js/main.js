

// image dans le tableau // 
let image = ['venus.jpg', 'mercure.jpg', 'terre.jpg', 'mars.jpg', 'jupiter.png'];

let i = 0;

// fonction pour le slide suivant //

function nextImage() {
	let sliderImage = document.getElementById('sliderimage');
	if (i<image.length-1 ) { // 0, 1, 2, 3, 4, 
		i = i+1; // 1, 2, 3, 4, 5
		}
		else {
			i = 0; 
		}
			sliderImage.src = "img/" + image[i];
}

//fonction pour l'image précédente //

function previousImage(){
	let sliderImage = document.getElementById('sliderimage');
	if (i>0) { // 1, 2, 3, 4, 5
		i = i-1; // 0, 1, 2, 3, 4
		}
		else {
			i = image.length-1; 
		}
			sliderImage.src = "img/" + image[i];

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
	 //	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup() //
	 
		marker.addEventListener('click', ()=> {   
		   
    		console.log(station.address);

    		const address = document.getElementById('address')

    		address.innerHTML = station.address;

		});

	 }
	 
	 



} )

