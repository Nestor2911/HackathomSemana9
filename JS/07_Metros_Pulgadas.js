function conversion(metro) {
    pulgada = metro / 0.0254
    return pulgada
}

let num1 = Number(prompt("Ingrese la cantidad en metros: "))

console.log("Resultado en pulgadas = ", conversion(num1))
alert('Usted debe solicitar ' +pulgada.toFixed(2) +' pulgadas de tela')
   