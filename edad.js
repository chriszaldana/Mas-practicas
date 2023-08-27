//Solicitud de datos
let edad = Number(prompt("Ingrese su edad"));
let rangoEdad;

//Evaluacion de datos
if(edad >= 0 && edad <=12){
    rangoEdad = "Niño";
}
else if(edad >= 13 && edad <= 18){
    rangoEdad = "Adolescente";
}

else if(edad >= 19 && edad <= 60){
    rangoEdad = "Adulto";
}

else if(edad >= 61 && edad<= 110){
    rangoEdad = "Tercera Edad"
}

else{
    rangoEdad = "Edad fuera del rango"
}

alert("Usted esta dentro de la categoria de: " + rangoEdad)





//Evalucion de datos



