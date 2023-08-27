// Crear un vector para almacenar los números pares
const numerosPares = [];

// Leer números pares del usuario y almacenarlos en el vector
while (numerosPares.length < 5) {
  const numero = parseInt(prompt(`Ingrese un número par:`));
  
  if (!isNaN(numero)) {
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    } else {
      console.log("El número no es par. Intente de nuevo.");
    }
  } else {
    console.log("Por favor, ingrese un número válido.");
  }
}

// Mostrar el vector de números pares
console.log("Vector de números pares:", numerosPares);
