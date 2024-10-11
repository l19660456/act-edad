// Solicitar el nombre y edad del usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
let edad = prompt("Por favor, ingresa tu edad:");

// Convertir la edad a número
edad = Number(edad);

// Verificar si el usuario es mayor de edad o menor
if (edad >= 18) {
    console.log(`Bienvenido(a), ${nombre}.`);
} else {
    console.log(`Lo siento, ${nombre}, eres menor de edad.`);
}
