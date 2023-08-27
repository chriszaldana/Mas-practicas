//Variables
let valorCompra = parseFloat(prompt("¿Cual fue el valor total de su compra?"))
let valorDesc = 0
let desc5 = valorCompra * 0.05
let desc11 = valorCompra * 0.11
let desc18 = valorCompra * 0.18
let desc25 = valorCompra * 0.25

//Ejecucion del programa
if(valorCompra >= 500.01 && valorCompra <= 1000){
    valorDesc = valorCompra - desc5;
}
else if(valorCompra >= 1000 && valorCompra <= 7000){
    valorDesc = valorCompra - desc11;
}
else if(valorCompra >= 7000 && valorCompra <= 15000){
    valorDesc = valorCompra - desc18;
}
else if(valorCompra >= 15000){
    valorDesc = valorCompra - desc25;
}
else{
    valorDesc = valorCompra
}



alert("Tu pago final es $" + valorDesc);