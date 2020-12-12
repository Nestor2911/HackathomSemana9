function tela() {
    alert('Bienvenido al Módulo para solicitar la cantida de Telas en Pulgadas')
    var m = parseInt(prompt('Ingresar los metros de Tela requeridos'));
    var pulgadas = 0.0254;
    var Calculo = (m/pulgadas);
    
    alert('Usted debe solicitar ' +Calculo.toFixed(2) +' pulgadas de tela')
    
}

tela();