function edad(hoy, nacimiento) {
    edad = hoy - nacimiento
    return edad
}

let num1 = Number(prompt("En que año se encuentra: "))
let num2 = Number(prompt("Escriba la fecha de nacimiento: "))

console.log("Su edad es ", edad(num1, num2))
    alert('La edad del Personal solicitante es de ' +edad +' Años');
    
