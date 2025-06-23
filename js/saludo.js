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

    console.log("Nombre: " + nombre + " " + typeof nombre); // * Mostrar el valor de la variable nombre en la consola y su tipo
    console.log("Edad: " + edad + " " + typeof edad); // * Mostrar el valor de la variable edad en la consola y su tipo
    console.log("Presente o No: " + presenteONo + " " + typeof presenteONo); // * Mostrar el valor de la variable booleana presenteONo en la consola y su tipo
    console.log("Apellido: " + apellido + " " + typeof apellido); // * Mostrar el valor de la variable apellido en la consola y su tipo
    console.log("Estatura: " + estatura + " " + typeof estatura); // * Mostrar el valor de la variable estatura en la consola y su tipo
    console.log("---------------------------------------------------------------------------------------------"); // * Línea divisoria en la consola

// ^ PARTE 4: DIFERENCIA ENTRE VAR, LET Y CONST EN JAVASCRIPT

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







