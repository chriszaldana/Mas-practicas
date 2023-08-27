//Captura de datos

let cantidad = Number(prompt("¿Cuantos libros compraste?"))
let totalPrecio = 0


//Desarrollo de descuentos
for(let i = 1; i <= cantidad; i++){
    const precio = Number(prompt("Introduzca el precio de cada libro"));
    totalPrecio += precio;
}

let porcen3 = totalPrecio * 0.03
let porcen5 = totalPrecio * 0.05
let porcen10 = totalPrecio * 0.10
let totalPagar

if(cantidad === 3){
    totalPagar = totalPrecio - porcen3;
}
else if(cantidad > 3 && cantidad < 10){
    totalPagar = totalPrecio - porcen5;
}
else if(cantidad >= 10){
    totalPagar = totalPrecio - porcen10;
}
else{
    totalPagar = totalPrecio
}

alert("El total de su compra es: " + totalPagar)
