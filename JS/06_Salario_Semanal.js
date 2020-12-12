function salario() {
    alert('Bienvenido al Módulo para determinar el Sueldo Semanal')
    var h = parseInt(prompt('Ingresar Horas Trabajadas'));
    var s = parseInt(prompt ('Ingresar el Salario x Hora'));
    var Sueldo = (h*s);
    
    alert('El Sueldo Semanal es : S/' +Sueldo.toFixed(2))
    
}

salario();