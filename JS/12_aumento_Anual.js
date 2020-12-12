function salario(){
    alert('El sueldo Inicial es de S/ 1500.00')
    let Anio = Number;
    let salario = 1500;
    for (Anio = 1; Anio <= 6; Anio++) {
        salario = 1500 * 1.10 ** Anio;
        console.log("Salario en el año ", Anio, " es de ", salario.toFixed(2));
    }
}
salario();
