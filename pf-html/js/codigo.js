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

const servicios = () => {
    saludar();
    if (!mayoriaEdad()) {
        return;
    }

    let serviciosOfrecidos;
    do {
        serviciosOfrecidos = prompt("Para conocer los servicios que ofrecemos escriba: 'consulta', 'agudo', 'cronico' o 'salir' si desea terminar la operación").toLowerCase();
        switch (serviciosOfrecidos) {
            case "consulta":
                alert("La consulta tiene un valor de $10.000");
                break;
            case "agudo":
                alert("Si seleccionas esta opción, abonas un total de $100.000 por las 10 sesiones");
                break;
            case "cronico":
                alert("Si seleccionas esta opción, abonas un total de $200.000 por las 10 sesiones con internación");
                break;
            case "salir":
                alert("Gracias por visitarnos, si lo desea puede seguir explorando nuestra página web.");
                break;
            default:
                alert("Por favor, ingresa una opción válida. Si deseas terminar la operación, escribe 'salir'.");
        }
    } while (serviciosOfrecidos !== "salir" );
};


servicios();