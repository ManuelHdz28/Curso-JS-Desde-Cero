// ^ PARTE 1: INCIALIZA TU PRIMER PROGRAMA EN JAVASCRIPT
alert("hola mundo con JavaScript"); // * Mensaje de saludo

// ^ PARTE 2: VARIABLES Y TIPOS DE DATOS EN JAVASCRIPT

//& variables tipo VAR
 var nombre = "Manuel"; // * Declaración de variable string
 var edad; // * Declaración de variable undefined
 var presenteONo; // * Declaración de variable booleana
 var apellido;
 var estatura; // * Declaración de variable float

 alert("HOLA " + nombre); // * Mostrar el valor de la variable nombre

 // ^ PARTE 3: ASIGNACION, CONSOLE LOG Y TYPEOF EN JAVASCRIPT

//& Asignación de valores a las variables
    nombre = "Manuel"; // * Asignación de valor a la variable nombre
    edad = 24; // * Asignación de valor a la variable edad
    presenteONo = true; // * Asignación de valor a la variable booleana presenteONo
    apellido = "Hernández"; // * Asignación de valor a la variable apellido
    estatura = 1.75; // * Asignación de valor a la variable estatura

//& Uso de console.log para mostrar valores y typeof para verificar tipos de datos

console.log("---------------------------------------------------------------------------------------------"); // * Línea divisoria en la consola
    console.log("tipos de datos:"); // * Mostrar el título de la sección de tipos de datos
    console.log("Nombre: " + nombre + " " + typeof nombre); // * Mostrar el valor de la variable nombre en la consola y su tipo
    console.log("Edad: " + edad + " " + typeof edad); // * Mostrar el valor de la variable edad en la consola y su tipo
    console.log("Presente o No: " + presenteONo + " " + typeof presenteONo); // * Mostrar el valor de la variable booleana presenteONo en la consola y su tipo
    console.log("Apellido: " + apellido + " " + typeof apellido); // * Mostrar el valor de la variable apellido en la consola y su tipo
    console.log("Estatura: " + estatura + " " + typeof estatura); // * Mostrar el valor de la variable estatura en la consola y su tipo
console.log("---------------------------------------------------------------------------------------------"); // * Línea divisoria en la consola

// ^ PARTE 4: DIFERENCIA ENTRE VAR, LET Y CONST EN JAVASCRIPT

console.log("Diferencia entre var, let y const:"); // * Mostrar el título de la sección de diferencia entre var, let y const

//& Variables tipo var
/* 
    ! las variables tippo var son variables que pueden ser redeclaradas y actualizadas en cualquier parte del código,
    ! lo que puede llevar a errores si no se tiene cuidado. Se recomienda usar let o const para evitar problemas de alcance 
    ! y redeclaración.
*/

if (true) {
    var variableTipoVar = "Soy una variable tipo var"; // * Variable tipo var
}

console.log(variableTipoVar); // * Mostrar el valor de la variable tipo var en la consola


//& Variables tipo let
/* 
    ! las variables tipo let son variables que pueden ser actualizadas pero no redeclaradas en el mismo alcance,
    ! lo que las hace más seguras que las variables tipo var. Se recomienda usar let para variables que necesitan ser actualizadas.
*/
if (true) {
    let variableTipoLet = "Soy una variable tipo let"; // * Variable tipo let
    // * Las variables tipo let tienen un alcance de bloque, lo que significa que solo son accesibles dentro del bloque donde se declaran.
    // * Esto ayuda a evitar problemas de alcance y redeclaración.
    console.log(variableTipoLet); // * Mostrar el valor de la variable tipo let en la consola
}

//& Variables tipo const
/* 
    ! las variables tipo const son variables que no pueden ser actualizadas ni redeclaradas, lo que las hace ideales para valores constantes.
    ! Se recomienda usar const para valores que no cambian a lo largo del tiempo.
*/

const variableTipoConst = "Soy una variable tipo const"; // * Variable tipo const

// variableTipoConst = "Intentando actualizar una variable const"; // * Esto generará un error porque las variables tipo const no pueden ser actualizadas
// * Las variables tipo const deben ser inicializadas en el momento de su declaración y no pueden ser actualizadas o redeclaradas.
console.log(variableTipoConst); // * Mostrar el valor de la variable tipo const en la consola
console.log("---------------------------------------------------------------------------------------------"); // * Línea divisoria en la consola

// ^ PARTE 5: OPERADORES EN JAVASCRIPT

//& Operadores aritméticos

console.log("Operadores Aritméticos:"); // * Mostrar el título de la sección de operadores aritméticos
    // * Los operadores aritméticos se utilizan para realizar operaciones matemáticas básicas como suma, resta, multiplicación, división y resto de división.

var suma; // * Variable para almacenar el resultado de la suma

    suma = 35 + 3 ; // * Realizar una suma de dos números y almacenar el resultado en la variable suma
    console.log("Suma: 35 + 3 = " + suma); // * Mostrar el resultado de la suma

var resta; // * Variable para almacenar el resultado de la resta

    resta = 35 - 3; // * Realizar una resta de dos números y almacenar el resultado en la variable resta
    console.log("Resta: 35 - 3 = " + resta); // * Mostrar el resultado de la resta

var multiplicacion; // * Variable para almacenar el resultado de la multiplicación

    multiplicacion = 35 * 3; // * Realizar una multiplicación de dos números y almacenar el resultado en la variable multiplicacion
    console.log("Multiplicación: 35 * 3 = " + multiplicacion); // * Mostrar el resultado de la multiplicación

var division; // * Variable para almacenar el resultado de la división

    division = 30 / 2; // * Realizar una división de dos números y almacenar el resultado en la variable division
    console.log("División: 35 / 3 = " + division); // * Mostrar el resultado de la división

var resto; // * Variable para almacenar el resultado del resto de la división

    resto = 30 % 2; // * Realizar una operación de resto de división y almacenar el resultado en la variable resto
    console.log("Resto de la división: 35 % 3 = " + resto); // * Mostrar el resultado del resto de la división
console.log("---------------------------------------------------------------------------------------------"); // * Línea divisoria en la consola

//& Operadores de comparación o relacionales

console.log("Operadores de comparación o relacionales:"); // * Mostrar el título de la sección de operadores de comparación o relacionales
    // * Los operadores de comparación o relacionales se utilizan para comparar dos valores y devolver un valor booleano (true o false) según el resultado de la comparación.

    var comparacionMayor; // * Variable para almacenar el resultado de la comparación mayor que
    comparacionMayor = 35 > 3; // * Comparar si 35 es mayor que 3 y almacenar el resultado en la variable comparacionMayor
    console.log("Comparacion Mayor que: 35 > 3 = " + comparacionMayor); // * Mostrar el resultado de la comparación mayor que

    var comparacionMenor; // * Variable para almacenar el resultado de la comparación menor que
    comparacionMenor = 35 < 3; // * Comparar si 35 es menor que 3 y almacenar el resultado en la variable comparacionMenor
    console.log("Comparacion Menor que: 35 < 3 = " + comparacionMenor); // * Mostrar el resultado de la comparación menor que

    var comparacionIgual; // * Variable para almacenar el resultado de la comparación igual
    comparacionIgual = 35 == 3; // * Comparar si 35 es igual a 3 y almacenar el resultado en la variable comparacionIgual
    console.log("Comparacion Igual: 35 == 3 = " + comparacionIgual); // * Mostrar el resultado de la comparación igual
    comparacionIgual = 3 == 3; // * Comparar si 3 es igual a 3 y almacenar el resultado en la variable comparacionIgual
    console.log("Comparacion Igual: 3 == 3 = " + comparacionIgual); // * Comparar si 35 es estrictamente igual a 3 (mismo tipo y valor) y mostrar el resultado
    console.log("----------------------------------------------------------------------------------------------"); // * Línea divisoria en la consola


//& Operadores Logicos

    console.log("Operadores Lógicos:"); // * Mostrar el título de la sección de operadores lógicos
    // * Los operadores lógicos se utilizan para combinar o invertir valores booleanos y devolver un valor booleano según el resultado de la operación.

    






