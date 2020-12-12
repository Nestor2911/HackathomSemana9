function triangulo() {
    alert('Bienvenido al Módulo para hallar el Área de un Triángulo')
    var b = parseInt(prompt('Ingresar Base del Triángulo'));
    var h = parseInt(prompt('Ingresar Altura del Triángulo'));
    var A = (b * h) / 2;
    alert('El Área del triángulo es : ' + A)

}

triangulo();