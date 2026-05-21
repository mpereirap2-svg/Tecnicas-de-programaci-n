const prompt = require('prompt-sync')()

/* function ejercicio1(){
    let user = prompt("Ingresa el nombre de usuario: ")
    console.log(`Bienvenido, ${user}`)
}
//ejercicio1()

function ejercicio2(){
    let num1 = parseFloat(prompt("Ingrese el primer numero: "))
    let num2 = parseFloat(prompt("Ingrese el primer numero: "))
    console.log(`La suma es: ${num1+num2}`)
}
//ejercicio2()

function ejercicio3(){
    let num1 = parseFloat(prompt("Ingrese un numero: "))
    console.log(`El doble es: ${num1*2}, El triple es: ${num1*3}`)
}
//ejercicio3()

function ejercicio4(){
    let base = parseFloat(prompt("Ingresa la base del rectangulo: "))
    let altura = parseFloat(prompt("Ingresa la altura del rectangulo: "))
    console.log(`El area del rectangulo es: ${base*altura}`)
}
//ejercicio4()

function ejercicio5(){
    let celsius = parseFloat(prompt("Ingresa los grados celsius: "))
    let fahrenheit = (celsius*5)/8+32
    console.log(`Conversión: ${fahrenheit} °F`)
}
//ejercicio5()
let intentos = 0
let numeroSalir = parseInt(prompt("Ingrese el numero que establezca cuando quiere salir: "))
function ejercicio5_5(){
    if(intentos === numeroSalir){
        return
    }
    intentos++
    console.log(`saliendo...., ${intentos}`)
    ejercicio5_5()
}

//ejercicio5_5()      salir?


//6
function mayorEdad(){
    let edad = parseInt(prompt("Ingresa tu edad: "))
    if (edad>18){
        console.log("Usted es mayor de edad")
    }else{
        console.log("Usted es menor de edad")
    }
}

//7
function mayor(){
    let num1 = parseFloat(prompt("Ingresa un mumero: "))
    let num2 = parseFloat(prompt("Ingresa un mumero: "))
    if(num1>num2){
        console.log(`El numero mayor es numero 1`)
    }else if(num1<num2){
        console.log(`El numero mayor es numero 2`)
    }else{
        console.log(`Ambos numeros son iguales`)
    }
}

//8
function prom(){
    let num1 = parseFloat(prompt("Ingresa un mumero: "))
    let num2 = parseFloat(prompt("Ingresa un mumero: "))
    let num3 = parseFloat(prompt("Ingresa un mumero: "))
    console.log(`El promedio es: ${(num1+num2+num3)/3}`)
}

//9
function parImpar(){
    let numero = parseFloat(prompt("Ingresa un mumero: ")) 
    if(numero%2==0){
        console.log(`El numero ${numero} es par`)
    }else if(numero==0){
        console.log(`El numero es 0`)
    }
    else{
        console.log(`El numero ${numero} es impar`)
    }
}

//10
function verificador(){
    let numero = parseFloat(prompt('Ingresa un numero'))
    if(numero>0){
        console.log("El numero es positivo")
    } else if(numero==0){
        console.log("El numero es cero")
    } else{
        console.log("El numero es negativo")
    }
}


//11
/*
function descuento(){
    let articulo = parseFloat(prompt("Ingresa el precio del articulo: "))
    let descuento = 0
    let total = 0
    if(articulo<100){
        total = articulo 
        console.log(`El total es: ${total}`)
    }else if(articulo>=100 && articulo <150){
        descuento = (articulo*10)/100
        total = articulo-descuento
        console.log(`El total es: ${total}`)
    }else{
        descuento = (articulo*15)/100
        total = articulo-descuento
        console.log(`El total es: ${total}`)
    }

}
//12
function edadVerificacion(){
    let edad = parseInt(prompt("Ingresa la edad"))
    if(edad !== isNaN && edad >= 0){
        if(edad >0 && edad <=12){
            console.log("Usted es un niño")
        }else if(edad >12 && edad <=17){
            console.log("Usted es un joven")
        }else{
            console.log("Usted es un adulto")
        }
    }else{
        console.log("Intente otra vez")
    }
}
//13

function registro(){
    let usuario1 = 'Mathias'
    let password2 = '1234'
    let usuario = prompt("Ingrese su usuario: ")
    let password = prompt("Ingrese su contraseña")
    if(usuario == usuario1 && password == password2){
        console.log("Acceso concedido")
    }else{
        console.log("Acceso denegado")
    }
}
*/

//14
/* function menu(){
    function interfaz(){
        console.log(`===MENU===`)
        console.log(`1. Saludar`)
        console.log(`2. Fecha`)
        console.log(`3. Mensaje`)
        console.log(`4. Salir`)
        
    }

    function eleccion(opcion){

        switch(opcion){
            case 1:
                saludar()
                break
            case 2:
                mostrarFecha()
                break
            case 3:
                mensaje()
                break
            case 4:
                salir()
                break
        }
        return true//pq return true?
    }

    function saludar(){
        let usuario = prompt("Ingrese su nombre: ")
        console.log(`Bienvenido, ${usuario} `)
    }
    function mostrarFecha(){
        let fecha = prompt("Ingrese su fecha: ")
        console.log(`Fecha: ${fecha}`)
    }
    function mensaje(){
        console.log("Duerme mejor")
    }
    function salir(){
        console.log("Saliendo...")
    }


    interfaz()
    let opcion = parseInt(prompt("Ingresa una opcion: "))
    eleccion(opcion)
    if(opcion !==4 ){
        menu()
    }
}
menu() 


//14
 function menu(){
    function saludar(){
        let usuario = prompt("Ingrese su nombre: ")
        console.log(`Bienvenido, ${usuario} `)
    }
    function mostrarFecha(){
        let fecha = prompt("Ingrese su fecha: ")
        console.log(`Fecha: ${fecha}`)
    }
    function mensaje(){
        console.log("Duerme mejor")
    }
    function salir(){
        console.log("Saliendo...")
    }

    console.log(`===MENU===`)
    console.log(`1. Saludar`)
    console.log(`2. Fecha`)
    console.log(`3. Mensaje`)
    console.log(`4. Salir`)
    let opcion = parseInt(prompt("Ingresa una opcion: "))
    switch(opcion){
        case 1:
            saludar()
            break
        case 2:
            mostrarFecha()
            break
        case 3:
            mensaje()
            break
        case 4:
            salir()
            return
    }
}
menu() */

//15

/* function añoBisiesto(){
    let año = parseInt(prompt("Ingrese un año: "))
    if(!isNaN(año) && año >= 0){
        if((año%4==0 && año%100 !==0) || año % 400 == 0){
            console.log(`El año ${año} es bisisesto`)
        }else{
            console.log(`El año ${año} no es bisisesto`)
        }
    } else{
        console.log("Ingrese datos correctos")
    }
}
añoBisiesto() */

//16

/* function mayorNumber(){
    let num1 = parseInt(prompt("Ingresa un numero 1: "))
    let num2 = parseInt(prompt("Ingresa un numero 2: "))
    let num3 = parseInt(prompt("Ingresa un numero 3: "))
    let mayor = num1
    if(mayor<num2){
        mayor = num2
    } 
    if(mayor<num3){
        mayor = num3
    }
    console.log(`El mayor es: ${mayor}`)
}
mayorNumber()
 */

//17
/* function nota(){
    let nota = parseInt(prompt("Ingresa la nota del estudiante: "))
    if(!isNaN(nota) && (nota>=0 && nota<11)){
        if(nota>=9 && nota<11){
            console.log("Excelente")
        }else if(nota>=7 && nota<9){
            console.log("Bueno")
        }else if(nota>=5 && nota<7){
            console.log("Regular")
        }else{
            console.log("Reprobado")
        }
    } else{
        console.log("Ingrese datos correctos")
    }
}
nota() */

//18
/* let acceso = true;
(acceso == false) ? console.log("Acceso concedido"): console.log("Acceso denegado")
 */

//19
/* function mostrar(){
    for(let i = 1; i <= 10; i++){
        console.log(i)
    }
}
mostrar()
 */

//20
/* 
function sumaTotal(){
let total = 0
let num;
    while(true){
        num = parseInt(prompt("Ingrese un numero: "))
        if(Number.isNaN(num)){        //validar si es numero y eso dice ¿eso es exactamente NaN?
            continue;
        } else{
            console.log("Entrada no valida")
        }
        if (num === 0){
            console.log(`Su total es: ${total}`) 
            break;
        }
        total += num
    }

}
sumaTotal() */


//21
/* function tabla(){
    let num = parseInt(prompt("Ingresa un numero: "))
    for(let i = 1; i<=12; i++){
        console.log(`Tabla del ${num}: ${num} * ${i} = ${num*i}`)
    }
}
tabla() */
//array e isNaN


//22
function arreglo(){
    let num = parseInt(prompt("Ingresar el numero de elementos en el arreglo: "))
    let arreglo1 = []
    //validacion
    if(Number.isNaN(num) || num<=0){
        console.log("Ingresa datos correctos")
        return
    }
    for(let i = 0;i<num; i++){
        let numero = parseInt(prompt(`Ingresa el elemento ${i+1}: `))
        //validacion
        if(Number.isNaN(numero)){
            console.log("Ingresa un numero")
            i--
            continue
        }
        arreglo1.push(numero)
    }
    return arreglo1
}
console.log(arreglo1)
//arreglo()
//23
/* function adivinar(){
    let numAdivinar = 4;
    while(true){
        console.log("Juego adivinanza: ")

        let numero = parseInt(prompt("Inserte un numero: "))
        if(Number.isNaN(numero)){
            console.log("Ingrese datos correctos")
            continue;
        }
        if(numero === numAdivinar){
                console.log("Felicidades acertaste")
                break;
            }
        if(Math.abs(numero - numAdivinar)<=3){
            console.log("Estas cerca del numero")
        }else{
            console.log("Estas lejos del numero")
        }
    }
}

adivinar()
 */


//24 promedio
/* function prom(arreglo){
    let prom = 0;
    let suma = 0;
    let cantidad = 0 // mira esto es por si acaso colocan un string o algun valor is NaN entonces eso no se contaria entonces ya no podrias utilizar el .length
    for(let i = 0; i<arreglo.length; i++){
        if(Number.isNaN(arreglo[i])){
            console.log(`No es valido el elemento del arreglo ${arreglo[i]}`)
            continue;
        }
        suma+=arreglo[i]
        cantidad++
    }
    if(cantidad === 0){
        console.log("No hay valores en el arreglo")
        return
    }
    prom = suma/cantidad
    console.log(`El promedio es: ${prom}`)
}


let numeros = [1,2,3,4,5,6,7,8,9]
prom(numeros)
 */

//25
/* function primo(){
    let divisores = 0
    let num = parseInt(prompt("Ingresa un numero: "))
    if(Number.isNaN(num)){
        console.log("Ingrese un numero correcto")
        return //continue solo funciona dentro de bucles
        //recuerda estas dentro de una funcion por lo tanto sales con return
    }
    for(let i = 1; i<=num;i++){
        if(num%i==0){
            divisores++
        }
    }
    if (divisores ==2){
        console.log("El numero es primo")
    }else{
        console.log("El numero no es primo")
    }

}
primo()
 */
//continue: te saltas esta vuelta y vuelves a iniciar el bucle
//Number.isNaN() = obj + metod si el argumento no es un numero(Not a Number)
 //si es while
/* function primo(){

    while(true){

        let divisores = 0

        let num = parseInt(prompt("Ingresa un numero: "))

        if(Number.isNaN(num)){
            console.log("Ingrese un numero correcto")
            continue
        }
        if(num< 2){
            console.log(`Ingrese un numero mayor a 1`)
            continue;
        }
        for(let i = 1; i<=num; i++){
            if(num%i==0){
                divisores++
            }
        }
        if(divisores==2){
            console.log(`El numero es primo`)

        }else{
            console.log(`El numero no es primo`)

        }
        break
        

    }

}
primo() */

//si fuera arreglo
/* function primo(arreglo){

    for(let j=0; j<arreglo.length; j++){

        let num = arreglo[j]

        if(Number.isNaN(num)){
            console.log(`${num} no es valido`)
            continue
        }
        if(num)

        let divisores = 0

        for(let i=1;i<=num;i++){

            if(num%i===0){
                divisores++
            }

        }

        if(divisores===2){
            console.log(`${num} es primo`)
        }else{
            console.log(`${num} no es primo`)
        }

    }

}

primo([2,4,7,10,13]) */

//continue siguiente vuelta del bucle
//break salir del bucle
//return salir de la funcion
//26
/* function factorial(){
    while(true){
        let numero = parseInt(prompt("Ingresa un numero: "))
        let factorial = 1
        if(Number.isNaN(numero) || numero<=0){
            console.log("Ingrese datos correctos")
            continue
        }
        for(let i  = 1;i<=numero;i++){
            factorial *= i
        }
        
        console.log(`El factorial es: ${factorial}`)
        break;
    }
    
}
factorial() */

//27

/* 
function suma(){

    let numeros = parseInt(prompt("Ingrese cuantos numeros va a sumar: "));

    if(Number.isNaN(numeros) || numeros <= 0){
        return "Cantidad inválida";
    }

    let suma = 0;

    for(let i = 0; i < numeros; i++){

        let number = parseFloat(
            prompt(`Ingrese el numero a sumar (Numero: ${i+1}): `)
        );

        if(Number.isNaN(number)){
            return "Número inválido";
        }

        suma += number;
    }

    return suma;
}


function resta(){

    let numeros = parseInt(
        prompt("Ingrese cuantos numeros va a restar: ")
    );

    if(Number.isNaN(numeros) || numeros <= 0){
        return "Cantidad inválida";
    }

    let resta = parseFloat(
        prompt("Ingrese el primer numero a restar: ")
    );

    if(Number.isNaN(resta)){
        return "Número inválido";
    }

    for(let i = 1; i < numeros; i++){

        let number = parseFloat(
            prompt(`Ingrese el numero a restar (Numero: ${i+1}): `)
        );

        if(Number.isNaN(number)){
            return "Número inválido";
        }

        resta -= number;
    }

    return resta;
}


function multiplicacion(){

    let numeros = parseInt(
        prompt("Ingrese cuantos numeros va a multiplicar: ")
    );

    if(Number.isNaN(numeros) || numeros <= 0){
        return "Cantidad inválida";
    }

    let multiplicacion = 1;

    for(let i = 0; i < numeros; i++){

        let number = parseFloat(
            prompt(`Ingrese el numero a multiplicar (Numero: ${i+1}): `)
        );

        if(Number.isNaN(number)){
            return "Número inválido";
        }

        multiplicacion *= number;
    }

    return multiplicacion;
}


function division(){

    let numeros = parseInt(
        prompt("Ingrese cuantos numeros va a dividir: ")
    );

    if(Number.isNaN(numeros) || numeros <= 0){
        return "Cantidad inválida";
    }

    let division = parseFloat(
        prompt("Ingrese el primer numero a dividir: ")
    );

    if(Number.isNaN(division)){
        return "Número inválido";
    }

    for(let i = 1; i < numeros; i++){

        let number = parseFloat(
            prompt(`Ingrese el numero a dividir (Numero: ${i+1}): `)
        );

        if(Number.isNaN(number)){
            return "Número inválido";
        }

        if(number === 0){
            return "No se puede dividir entre cero";
        }

        division /= number;
    }

    return division;
}


function menu(){

    while(true){

        console.log("\n===== MENU =====");
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación");
        console.log("4. División");
        console.log("5. Salir");

        let opcion = parseInt(
            prompt("Ingrese una opcion: ")
        );

        if(Number.isNaN(opcion)){
            console.log("Ingrese una opción válida");
            continue;
        }

        switch(opcion){

            case 1:
                console.log(`Resultado: ${suma()}`);
                break;

            case 2:
                console.log(`Resultado: ${resta()}`);
                break;

            case 3:
                console.log(`Resultado: ${multiplicacion()}`);
                break;

            case 4:
                console.log(`Resultado: ${division()}`);
                break;

            case 5:
                console.log("Saliendo...");
                return;

            default:
                console.log("Ingrese una opción correcta");
        }
    }
}

menu(); */