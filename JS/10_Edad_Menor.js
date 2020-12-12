function menor() {
    alert('Bienvenido, evaluaremos la edad del menor de los 3')
    var N1 = prompt('Ingrese el Nombre 1');
    var E1 = prompt('Ingrese la Edad 1');
    var N2 = prompt('Ingrese el Nombre 2');
    var E2 = prompt('Ingrese la Edad 2');
    var N3 = prompt('Ingrese el Nombre 3');
    var E3 = prompt('Ingrese la Edad 3');

    if (E1 < E2 && E1 < E3)
    
        alert('El Menor es  ' + N1 + ' y su edad es ' + E1 + ' Años')
    else {
        if (E2 < E1 && E2 < E3)
            alert('El Menor es  ' + N2 + ' y su edad es ' + E2 + ' Años')
            else{
                if (E3 < E1 && E3 < E2)
                    alert('El Menor es  ' + N3 + ' y su edad es ' + E3 + ' Años')
            }
    }


}

menor();