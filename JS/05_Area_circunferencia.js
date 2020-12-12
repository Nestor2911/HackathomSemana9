function circunferencia() {
    alert('Bienvenido al Módulo para hallar el Área de una Circunferencia')
    var pi = Math.PI;
    var r = parseFloat(prompt ('Ingresar el Radio'));
    var A = (pi * Math.pow(r,2));
    
    alert('El Área de la circunferencia es : ' +A.toFixed(2))
    
}

circunferencia();