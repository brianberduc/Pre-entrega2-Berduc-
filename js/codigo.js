let nombre;

const saludar = () => {
    nombre = prompt("Por favor, ingresa tu nombre");
    
    while (nombre === "" || !isNaN(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        nombre = prompt("Por favor, ingresa tu nombre");
    }
    
    alert("Bienvenido " + nombre);
};

let edad;

const mayoriaEdad = () => {
    do {
        edad = parseInt(prompt("Por favor, ingrese su edad"));
        if (isNaN(edad) || edad < 0 || edad > 100) {
            alert("Por favor, ingrese un dato válido.");
        } else if (edad < 18) {
            alert("Necesitas ser mayor de edad para navegar en este sitio.");
            return false;
        } else {
            return true; 
        }
    } while (true);
};

const serviciosDisponibles = [
    {
        nombre: "consulta",
        descripcion: "la consulta tiene un valor de ",
        precio: 10000,
        sesiones: 10,
    },
    {
        nombre: "agudo",
        descripcion: "Si seleccionas esta opción, abonas un total de ",
        precio: 100000
    },
    {
        nombre: "cronico",
        descripcion: "Si seleccionas esta opción, abonas un total de ",
        precio: 200000,
        sesiones: 10,
        incluyeInternacion: true
    },
];

let carrito = []

const mostrarServicios = (opcion) => {
    const servicio = serviciosDisponibles.find (s => s.nombre === opcion);

    if (servicio) {
        let mensaje = `${servicio.descripcion} $${servicio.precio}`;
        
        if (servicio.sesiones) {
            mensaje += ` por las ${servicio.sesiones} sesiones.`;
        }

        if (servicio.incluyeInternacion) {
            mensaje += " Este servicio incluye internación.";
        }

        const confirmarServicio = confirm(`${mensaje}\n¿Deseas seleccionar este servicio?`);
        if (confirmarServicio) {
            alert(`Has seleccionado el servicio: ${servicio.nombre}. Total a abonar: $${servicio.precio}`);
        }

    } else {
        alert("Por favor, ingresa una opción válida. Si deseas terminar la operación, escribe 'salir'.");
    }
};

const mostrarCarrito = () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensajeCarrito = "Servicios en el carrito:\n";
    let total = 0;

    carrito.forEach((servicio, index) => {
        mensajeCarrito += `${index + 1}. ${servicio.nombre} - $${servicio.precio}\n`;
        total += servicio.precio;
    });

    mensajeCarrito += `\nTotal a abonar: $${total}`;
    alert(mensajeCarrito);
};

const servicios = () => {
    saludar();
    if (!mayoriaEdad()) {
        return;
    }

    let serviciosOfrecidos;
    do {
        serviciosOfrecidos = prompt("Para conocer los servicios que ofrecemos escriba: 'consulta', 'agudo', 'cronico' o 'salir' si desea terminar la operación").toLowerCase();
        if (serviciosOfrecidos === "salir") {
            alert ("Gracias por visitarnos, si lo desea puede seguir explorando nuestra pagina web");
        } else {
            mostrarServicios (serviciosOfrecidos) ;
        }

    } while (serviciosOfrecidos !== "salir" );
};

servicios();
