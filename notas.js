//Ingreso de valores
let nota = Number(prompt("Ingrese su nota"));
let rangoNota;
let fueraRango;

//Evaluacion de los datos

if(nota >= 9 && nota <= 10){
    rangoNota = "A"
}

else if(nota >= 8 && nota <= 8.9){
    rangoNota = "B"
}

else if(nota >= 7 && nota <= 7.9){
    rangoNota = "C"
}

else if(nota >= 6 && nota <= 6.9){
    rangoNota = "D"
}

else if(nota >= 0 && nota <= 5.9){
    rangoNota = "E"
}

else{
    fueraRango = "No es una nota correcta"
}

alert("Su asignacion de nota es: " + rangoNota)