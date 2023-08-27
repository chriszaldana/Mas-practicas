let cate1 = Number(prompt("Ingrese el cateto A"))
let cate2 = Number(prompt("Ingrese el cateto B"))

resultado = (Math.hypot(cate1, cate2))

alert("La hipotenusa es " + resultado.toFixed(2))