    // Array con los nombres de los archivos HTML que quieres cargar aleatoriamente
    var paginas = ["payment.html", "payment2.html"];

    // Obtener el elemento iframe por su ID
    var iframe = document.querySelector('iframe');
    
    // Elegir aleatoriamente un índice del array
    var indiceAleatorio = Math.floor(Math.random() * paginas.length);
    
    // Construir el nuevo src con la página aleatoria
    var nuevaPagina = paginas[indiceAleatorio];
    
    // Asignar el nuevo src al iframe
    iframe.src = nuevaPagina;
    
