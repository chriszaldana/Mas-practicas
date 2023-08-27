function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  // Leer el número del usuario
  const numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
  
  // Calcular y mostrar el factorial
  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
  } else if (numero < 0) {
    alert("El factorial no está definido para números negativos.");
  } else {
    const factorial = calcularFactorial(numero);
    alert(`El factorial de ${numero} es: ${factorial}`);
  }
  