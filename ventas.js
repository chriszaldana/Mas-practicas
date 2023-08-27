const sueldoBase = 1000; 
const porcentajeComision = 0.10; 
const ventas = [prompt("ingrese su venta 1"), prompt("Ingrese su venta 2"), prompt("Ingrese su venta 3")]; 

let totalComision = 0;
for ( i = 0; i < ventas.length; i++) {
    totalComision += ventas[i] * porcentajeComision;
}

const totalRecibidoComisiones = sueldoBase + totalComision;

alert("Tu sueldo total es: " + totalRecibidoComisiones)
