let i = new Number();
let apro = new Number();
let desapro = new Number();
apro = 0;
desapro = 0;

let n = Number(prompt("Ingrese la cantidad de alumnos"));

for (i = 1; i <= n; i++) {
    let nota = Number(prompt("Ingrese la nota del alumno", i));
    if (nota > 12) {
        apro = apro + 1;
    } else {
        desapro = desapro + 1;
    }
}

console.log("El numero de aprobados es: ", apro);
console.log("El numero de desaprobados es: ", desapro);
alert('Cantidad de aprobados ' +apro ' y desaprobados ' +desapro);