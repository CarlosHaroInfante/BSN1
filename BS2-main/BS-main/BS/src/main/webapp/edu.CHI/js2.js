// Función para validar el formulario de registro
function validarFormulario() {
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    // Aquí podrías agregar más validaciones según tus necesidades

    // Si todo está correcto, puedes enviar el formulario
    alert("Registrado correctamente");
    return true;
}

// Función para calcular el subtotal y el total del carrito de compras
function calcularTotal() {
    let subtotal = 0;

    // Itera sobre cada fila de producto
    document.querySelectorAll('.precio').forEach(precioElemento => {
        const precio = parseFloat(precioElemento.getAttribute('data-precio'));
        const cantidad = parseInt(precioElemento.closest('tr').querySelector('.cantidad').value);
        subtotal += precio * cantidad;
    });

    const shipping = 2.99; // Costo de envío
    const total = subtotal + shipping;

    // Actualiza los valores en la página
    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + '€';
    document.getElementById('total').textContent = total.toFixed(2) + '€';
    document.getElementById('checkoutTotal').textContent = total.toFixed(2) + '€';
}

// Función para procesar el pago
document.getElementById('btnPagar').addEventListener('click', function() {
    alert('¡Pedido realizado correctamente!');
});

// Función para procesar el pago con tarjeta
document.getElementById("btnPagar").addEventListener("click", function() {
    var nombreTarjeta = document.getElementById("typeName").value;
    var numeroTarjeta = document.getElementById("typeText").value;
    var expiracion = document.getElementById("typeExp").value;
    var cvv = document.getElementById("typeText").value;
    
    // Expresiones regulares para validar nombre y número de tarjeta
    var regexNombre = /^[a-zA-Z\s]+$/;
    var regexNumero = /^[0-9\s]+$/;
    
    var isValid = true;
    
    // Validar nombre de tarjeta
    if (!regexNombre.test(nombreTarjeta)) {
        isValid = false;
        alert("Por favor, ingresa un nombre de tarjeta válido.");
        return;
    }
    
    // Validar número de tarjeta
    if (!regexNumero.test(numeroTarjeta)) {
        isValid = false;
        alert("Por favor, ingresa un número de tarjeta válido.");
        return;
    }
    
    // Más validaciones (expiración, CVV, etc.) aquí
    
    // Si todos los campos son válidos, continuar con el pago
    if (isValid) {
        alert("Pago exitoso. Gracias por su compra.");
        // Aquí puedes enviar los datos del pago al servidor o realizar otras acciones necesarias
    }
});


