document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Define CSS keyframes for falling and rotating animations
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes falling {
            to { top: ${window.innerHeight + 500}px; }
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Select the existing image element from HTML
    const originalImg = document.getElementById('juice-box');

    // Function to create and animate a juice box
    function createAndAnimateJuiceBox() {
        // Clone the original image element
        const img = originalImg.cloneNode(true);
        
        img.style.display = 'block'; // Ensure it's visible
        img.style.position = 'fixed';
        img.style.maxWidth = '50px';
        img.style.height = 'auto';
        img.style.zIndex = '15';
        img.style.pointerEvents = 'none';

        // Generate a random starting position
        const startX = Math.random() * window.innerWidth;
        img.style.left = `${startX}px`;

        // Adjust initial top position to start further off-screen
        img.style.top = '-150px'; // Start further above the screen

        // Append the cloned image to the body
        body.appendChild(img);

        // Add animation for falling and rotating with random durations
        const fallingDuration = 4 + Math.random() * 2; // between 4 and 6 seconds
        const rotateDuration = 5 + Math.random(); // between 5 and 6 seconds
        img.style.animation = `falling ${fallingDuration}s linear forwards, rotate ${rotateDuration}s linear infinite`;

        // Remove the cloned image after it has fallen out of view to clean up DOM
        setTimeout(() => {
            img.remove();
        }, fallingDuration * 1000); // Match the timeout to the falling duration
    }

    // Create initial set of juice boxes
    for (let i = 0; i < 9; i++) {
        createAndAnimateJuiceBox();
    }

    // Continuously create new juice boxes at random intervals
    setInterval(createAndAnimateJuiceBox, 1000); // Adjust interval as needed
});



  // Lista de URLs de imágenes

  document.addEventListener("DOMContentLoaded", function() {
    var index = 0; // Índice de la imagen actual
    var images = document.querySelectorAll('.side-image'); // Obtener todas las imágenes

    function changeImage() {
      images[index].style.display = 'none'; // Ocultar la imagen actual
      index = (index + 1) % images.length; // Cambiar al siguiente índice circularmente
      images[index].style.display = 'block'; // Mostrar la siguiente imagen
    }

    setInterval(changeImage, 2000); // Cambiar cada 3 segundos (3000 milisegundos)
  });


    document.addEventListener('DOMContentLoaded', () => {
        // Seleccionar todos los botones con la clase btn
        const buttons = document.querySelectorAll('.tab-container .btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Eliminar la clase 'selected' de todos los botones
                buttons.forEach(btn => btn.classList.remove('selected'));
                
                // Agregar la clase 'selected' al botón clicado
                button.classList.add('selected');
            });
        });
    });
















