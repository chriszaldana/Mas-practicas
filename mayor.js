
let numero1 = Number(prompt("Ingrese el primer número:"));
let numero2 = Number(prompt("Ingrese el segundo número:"));
let numero3 = Number(prompt("Ingrese el tercer número:"));
let mayor = 0

if(numero1 >= numero2 && numero1 >= numero3){
    mayor = numero1
}
else if(numero2 >= numero1 && numero2 >= numero3){
    mayor = numero2
}
else{
    mayor = numero3
}

alert("El número mayor es: " + mayor);
