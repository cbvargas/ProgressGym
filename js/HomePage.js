function hidenNav(){
    var navegacion = document.getElementById("barra-lateral");
    var contenidoPricipal = document.getElementById("contenido-principal")
    if (navegacion.style.display === "none") {
        contenidoPricipal.className ='home-container';
        navegacion.style.display ='block';
    } else {
        //navegacion.className =  "ocultar-nav:nth-child(1)";
        navegacion.style.display = 'none';
        contenidoPricipal.className ='home-contenido-sin-nav';
    }
        //contenidoPricipal.classList.toggle("home-contenido-sin-nav");
        
        console.log("Entre al evento");
}
