// Crear un vector para almacenar los números ingresados
const numeros = [];

// Leer 20 números enteros del usuario y almacenarlos en el vector
for (let i = 0; i < 20; i++) {
  const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
  if (!isNaN(numero)) {
    numeros.push(numero);
  } else {
    console.log("Por favor, ingrese un número válido.");
    i--; // Decrementar i para volver a intentar con el mismo índice
  }
}

// Encontrar el mayor, el menor y calcular el promedio
let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;

for (const numero of numeros) {
  if (numero > mayor) {
    mayor = numero;
  }
  if (numero < menor) {
    menor = numero;
  }
  suma += numero;
}

const promedio = suma / numeros.length;

// Mostrar resultados
console.log(`Números ingresados: ${numeros.join(', ')}`);
console.log(`El mayor número es: ${mayor}`);
console.log(`El menor número es: ${menor}`);
console.log(`El promedio de los números es: ${promedio}`);
