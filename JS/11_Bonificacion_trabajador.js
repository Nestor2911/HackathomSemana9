function bonif() {
    alert('Bienvenido, evaluaremos la bonificación a Recibir')
    var Aos = prompt('Ingrese Años trabajados');
    var Base =5;
    var calculo1 = Aos*100;
    var calculo2 = 1000;
    if(Aos < Base)        
    alert('La Bonificación a Recibir es de S/ ' +calculo1.toFixed(2) )
    else{
        alert('La Bonificación a Recibir es de S/ ' +calculo2.toFixed(2) )  
    }
    
}

bonif();