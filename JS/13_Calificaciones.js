function clase(){
let i = new Number();
let apro = new Number();
let desa = new Number();
apro = 0;
desa = 0;

let n = Number(prompt("Ingrese la cantidad de alumnos"));

for (i = 1; i <= n; i++) {
    let nota = Number(prompt("Ingrese la nota del alumno", i));
    if (nota > 12) {
        apro = apro + 1;
    } else {
        desa = desa + 1;
    }
}
alert("los Aprobados son: " +apro + " y desaprobados son: "+desa );

}
clase();