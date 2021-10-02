/*switch
    Estructura de control de flujo, nos ayuda a tomar decisiones
    mediante la evaluacion de una condicion.
    (Tipo if) */

/* const edad = parseInt(prompt("ingresa tu edad"));
let mensaje = '';

 if(edad === 18){
    mensaje = "Acaba de cumplir la mayoria de";
} 



switch (edad) {
    case 18:
        mensaje = 'acaba de cumplir la mayoria de edad'; 
        break;

    case 25: 
        mensaje = 'Ya eres un adulto'
        break;

    case 70:
        mensaje = 'Ya eres de la tercera edad'
        break;
    default:
        mensaje = 'Fuera del rango de edad'
        break;
}

document.write(`<p>${mensaje}</p>`) */

const nombre = prompt('ingresa tu nombre');
let mensaje = ''

switch (nombre) {
    case 'Christian':
        mensaje = 'Eres Administrador'
        break;
    case 'Juan':
        mensaje = 'Eres usuario'
    default:
        mensaje = 'no tienes permiso para utilizar el sistema'
        break;
}

document.write(`<p>${mensaje}</p>`)