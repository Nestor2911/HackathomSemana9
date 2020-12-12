function datos(edad) {
    const edadMayor = 18;
    if ( edad >= edadMayor){
        return ('Tu país te necesita en las próximas elecciones')
    }
    return('Aún no puedes votar')
}
   function main() {
       let imputEdad = prompt('Ingresa tu edad')
    alert(datos(imputEdad))

   }
   main();