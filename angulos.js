let angulo = Number(prompt("Ingrese el ángulo"));

if (angulo < 90) {
    alert("Es un ángulo agudo");
} else if (angulo === 90) {
    alert("Es un ángulo recto");
} else if (angulo > 90 && angulo < 180) {
    alert("Es un ángulo obtuso");
} else if (angulo === 180) {
    alert("Es un ángulo llano");
} else {
    alert(angulo + " no es un ángulo válido. Ingresa un ángulo válido");
}
