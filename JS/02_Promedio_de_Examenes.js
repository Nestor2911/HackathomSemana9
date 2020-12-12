function Promedio() {
    alert('Bienvenido al Módulo de Promedio de Examenes')
    var Ex1 = parseInt(prompt('Ingresar Primer Examen'));
    var Ex2 = parseInt(prompt('Ingresar Segundo Examen'));
    var Ex3 = parseInt(prompt('Ingresar Tercer Examen'));
    var Ex4 = parseInt(prompt('Ingresar cuarto Examen'));
    var P = (Ex1 + Ex2 + Ex3 + Ex4) / 4;

    alert('El Promedio del Alumno es : ' + P)

}

Promedio();