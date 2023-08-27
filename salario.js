let horasTrabajadas = Number(prompt("¿Cuantas horas trabaste esta semana?"));
let pagoHora = Number(prompt("¿Cuanto es el pago por hora?"));
let pagoTotal = (horasTrabajadas * pagoHora);
let desc9 = pagoTotal * 0.0945;
let desc15 = pagoTotal * 0.15
let sueldoFinal = 0;

if(horasTrabajadas >= 40){
    sueldoFinal = pagoTotal - desc9;
    alert("Tu sueldo esta semana con un descuento del 9.45% en base a tus horas trabajadas $"  + sueldoFinal.toFixed(2));
}
else if(horasTrabajadas <= 39){
    sueldoFinal = pagoTotal - desc15;
    alert("Tu sueldo esta semana con un descuento del 15% en base a tus horas trabajadas $"  + sueldoFinal.toFixed(2));
}


