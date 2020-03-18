class Ajax{
    constructor() {
    }
    ajaxGet(url, callback) {
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.addEventListener("load", function () {
            if (request.status >= 200 && request.status < 400) {// Le serveur a réussi à traiter la requête
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(request.responseText);
            }
        });
        request.addEventListener("error", function () {
            // La requête n'a pas réussi à atteindre le serveur
        });
        request.send(null);
    }

    

}