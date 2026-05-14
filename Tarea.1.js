 const prompt = require("prompt-sync")()

//1
let usuario = prompt("Ingrese su nombre: ")
console.log("Hola querido usuario: " + usuario)

//2
let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
console.log(`La suma de ${num1} + ${num2} = ${num1+num2}`);

//3
let num_1 = parseFloat(prompt("Ingrese un numero: "))
console.log(`El doble de ${num_1} es: ${num_1 * 2}\n El triple de ${num_1} es: ${num_1 * 3}`);

//4 
let base = parseFloat(prompt("Ingrese la base del rectangulo"));
let altura = parseFloat(prompt("Ingrese la altura del rectangulo"));
console.log(`El área del rectángulo es: ${base*altura}`);

//5
let celsius = parseFloat(prompt("Ingrese los grados celsius para convertir a fahrenheit"));
let fahrenheit = ((celsius * 9)/5 + 32);
console.log(`Serian ${fahrenheit} grados fahrenheit`);

//6
let edad = parseInt(prompt("Ingrese su edad: "));
if (edad > 18){
    console.log("Usted es mayor de edad");
}

//7
let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
if (numero1 < numero2){
    console.log(`Número ${numero2} es mayor`);
} else if (numero1 > numero2){
    console.log(`Número ${numero1} es mayor`);
} else{
    console.log(`Ambos numeros son iguales`);
}

//8
let number1 = parseFloat(prompt("Ingrese el primer número: "));
let number2 = parseFloat(prompt("Ingrese el segundo número: "));
let number3 = parseFloat(prompt("Ingrese el tercer número: "));
console.log(`El promedio es: ${(number1 + number2 + number3)/3}`);

//9
let numero = parseFloat(prompt("Ingrese un numero: "))
if (numero % 2 == 0){
    console.log(`El número ${numero} es par`);
} else if (numero % 2 !== 0) {
    console.log(`El número ${numero} es impar`)
} else{
    console.log("Ingrese un número válido")
}

//10
let numero_user = parseFloat(prompt("Ingrese un numero: "));
if (numero_user > 0){
    console.log(`El número es positivo`);
} else if (numero_user == 0) {
    console.log(`El número es equivalente a cero`);
} else{
    console.log(`El número es negativo`);
}

//11
let articulo = parseFloat(prompt('Ingrese el costo del articulo'))
if(articulo<100){
    let total = articulo
    console.log(`El articulo cuesta: ${total}`);
} else if(articulo>100 && articulo <150){
    let descuento = (articulo * 10)/100;
    let total = articulo - descuento;
    console.log(`El articulo cuesta: ${total}`);
} else {
    let descuento = (articulo * 15)/100;
    let total = articulo - descuento;
    console.log(`El articulo cuesta: ${total}`);
}

//12
let edad = parseFloat(prompt("Ingrese su edad: "))
if (edad>0){
    if(edad<=12){
        console.log("Su edad entra en la categoria de niño")
    }else if(edad>12 && edad <=17){
        console.log("Su edad entra en la categoria de joven")
    }else{
        console.log("Su edad entra en la categoria de adulto")
    }
}

let user1 = "Mathias"
let password = "1234"
//13
let user = prompt("Ingrese su usuario")
let password1 = prompt("Ingrese su contraseña")
if(user == user1 && password == password1){
    console.log("Acceso concedido")
}else{
    console.log("Acceso denegado")
}

//14
function saludar(){
    let saludo = prompt("Ingrese su nombre")
    console.log("Hola, "+ saludo)
}
function mostrarFecha(){
    let fecha = prompt("Ingrese la fecha de hoy")
    console.log("La fecha es: "+ fecha)
}
function mensajeMotivacional(){
    console.log("Hoy es un buen dia")
}
function salir(){
    console.log("Saliendo...")
    break;
}
let opcion= prompt("Ingrese una opcion")
console.log("=====Menu=====");
console.log("1. Saludar");
console.log("2. Mostrar fecha");
console.log("3. Mensaje motivacional");
console.log("4. Salir");

switch(opcion){
    
    case 1:
        saludar();
        break;
    case 2:
        mostrarFecha();
        break;
    case 3:
        mensajeMotivacional();
        break;
    case 4:
        salir();
        break;
}
    
//15
let año= parseInt(prompt("Ingrese un año"));
if (año%4==0){
    console.log(`El año ${año} es bisiesto`)
} else{
    console.log(`El año ${año} no es bisiesto`)
}
//16 
let num1 = parseFloat(prompt("Ingresa el primer numero"))
let num2 = parseFloat(prompt("Ingresa el segundo numero"))
let num3 = parseFloat(prompt("Ingresa el tercer numero"))
let mayor = num1;
if (num2>mayor){
    mayor = num2;
}
if(num3>mayor){
    mayor = num3;
}
console.log(`El numero mayor es: ${mayor}`)

//17

let nota = parseFloat(prompt("Ingrese la nota del estudiante: "))
if (nota>8 && nota <11){
    console.log(`A: Excelente`)
}else if (nota>6 && nota <=8){
    console.log(`B: Bueno`)
}else if (nota>4 && nota <=6){
    console.log(`C: Regular`)
}else{
    console.log(`D: Reprobado`)
} 

//18 Usar operador ternario para validar acceso.
let condicion = prompt("Indique si quiere validar el acceso con (y/n)");
(condicion == 'y') ? console.log("Acceso concedido") : console.log("Acceso denegado");

//19
let number_1 = 10
for(let i  = 0; i<=number_1; i++){
    console.log(i)
}


//20
let total = 0;
while(true){
    let numeros = parseFloat(prompt("Ingresa un numero: "))
    total += numeros
    if(numeros == 0){
        console.log(`El total es: ${total}`)
        break
    }
}



//21

let number_2 = parseInt(prompt("Ingrese un numero: "))
console.log(`Tabla de multiplicar del ${number_2}`)
for(let i = 1; i<=12; i++){
    console.log(`${number_2} * ${i} = ${number_2 * i}`)
} 


//22
let user = parseFloat(prompt("Ingrese la cantidad de elementos del arreglo: "))
let arreglo = []
let contador = 0;
for(let i = 0; i< user; i++){
    arreglo.push(parseFloat(prompt(`Ingrese elemento ${i+1} del arreglo: `)));
}

for(let i = 0; i<arreglo.length; i++){
    if(arreglo[i]>0){
        contador += 1;
    }
}
console.log(`El arreglo contiene ${contador} números positivos.`)



//23
let number = 2;
let numero_intentos = 5;
let adivino = false;
for(let i = 0; i<numero_intentos;i++){
    let respuesta = parseInt(prompt("Adivine el numero: "));
    if(respuesta > number){
        console.log("Te pasaste del numero a adivinar.")
    } else if(respuesta < number){
        console.log("Estas por debajo del numero a adivinar.")
    }else {
        console.log(`Felicidades adivinaste el numero era ${number}`);
        adivino = true;
        break;
    }

}
if(adivino == false){
    console.log(`Vuelve a intentarlo`);
}


//24

function promedio(arreglo){
    let suma = 0;
    for(let i = 0; i < arreglo.length;i++){
        suma += arreglo[i];
    }
    return suma/arreglo.length;
}
console.log(promedio([5,10,15]))



//25

function esPrimo(number){
    let divisores = 0;
    for(let i = 1;i<=number;i++){
        if(number % i == 0){
            divisores++;
        }
    } 
    if(divisores==2){
        console.log(`El numero ${number} es primo.`)
    } else{
        console.log(`El numero ${number} no es primo.`)
    }
}

esPrimo(2)
esPrimo(6)
esPrimo(17)
esPrimo(13) 




//26

function factorial(number){
    let factor=1;
    for(let i =1;i<=number;i++){
        factor*= i
    }
    return factor
}
console.log(factorial(3))

//27

function pedirNumero(mensaje){
    let num = parseFloat(prompt(mensaje));

    while(isNaN(num)){
        console.log("Entrada inválida. Ingresa un número.");
        num = parseFloat(prompt(mensaje));
    }

    return num;
}

function suma(){
    let n = parseInt(prompt("¿Cuántos números vas a sumar?: "));
    let total = 0;

    for(let i = 0; i < n; i++){
        let num = pedirNumero(`Número ${i+1}: `);
        total += num;
    }

    return total;
}


function resta(){
    let n = parseInt(prompt("¿Cuántos números vas a restar?: "));
    let total = pedirNumero("Número 1: ");

    for(let i = 1; i < n; i++){
        let num = pedirNumero(`Número ${i+1}: `);
        total -= num;
    }

    return total;
}

function multiplicacion(){
    let n = parseInt(prompt("¿Cuántos números vas a multiplicar?: "));
    let total = 1;

    for(let i = 0; i < n; i++){
        let num = pedirNumero(`Número ${i+1}: `);
        total *= num;
    }

    return total;
}

function division(){
    let n = parseInt(prompt("¿Cuántos números vas a dividir?: "));
    let total = pedirNumero("Número 1: ");

    for(let i = 1; i < n; i++){
        let num = pedirNumero(`Número ${i+1}: `);

        while(num === 0){
            console.log("No se puede dividir entre 0.");
            num = pedirNumero(`Número ${i+1}: `);
        }

        total /= num;
    }

    return total;
}

function menu(){

    while(true){
        console.log("\n===== CALCULADORA =====");
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación");
        console.log("4. División");
        console.log("5. Salir");

        let opcion = parseInt(prompt("Elige una opción: "));

        switch(opcion){
            case 1:
                console.log("Resultado:", suma());
                break;

            case 2:
                console.log("Resultado:", resta());
                break;

            case 3:
                console.log("Resultado:", multiplicacion());
                break;

            case 4:
                console.log("Resultado:", division());
                break;

            case 5:
                console.log("Saliendo...");
                return;

            default:
                console.log("Opción inválida");
        }
    }
}

menu();