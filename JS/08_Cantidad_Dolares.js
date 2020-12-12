function dolares() {
    alert('Bienvenido al Módulo para evaluar la cantidad de Dolares que puede Adquirir')
    alert('Precio del Dolar S/ 3.5')
    var S = parseInt(prompt('Ingresar Cantidad de Soles'));
    var Calculo = (S/3.5);
    
    alert('Ustede puede adquirir  ' +Calculo.toFixed(2) +' Dolares con '+S.toFixed(2) +' Soles')
    
}

dolares();