// Crear un vector para almacenar los números ingresados
const numeros = [];

// Leer 10 números del usuario y almacenarlos en el vector
for (let i = 0; i < 10; i++) {
  const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
  if (!isNaN(numero)) {
    numeros.push(numero);
  } else {
    console.log("Por favor, ingrese un número válido.");
    i--; // Decrementar i para volver a intentar con el mismo índice
  }
}

// Calcular la suma de los elementos del vector
let suma = 0;
for (const numero of numeros) {
  suma += numero;
}

// Mostrar la suma de los elementos
console.log(`La suma de los números ingresados es: ${suma}`);
