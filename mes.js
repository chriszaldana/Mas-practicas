let numero = parseInt(prompt("Ingrese un número entre 1 y 12:"));

if (numero >= 1 && numero <= 12) {
    let meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    let nombreMes = meses[numero - 1];

    
    alert("El mes correspondiente a " + numero + " es: " + nombreMes);
} else {
    alert("Número fuera de rango.");
}
