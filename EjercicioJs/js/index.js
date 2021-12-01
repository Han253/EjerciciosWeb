//variable
var a = 5;

var pelota_roja = "pato";

var lista = ["a",'b',2,3.20];

var b = !false;
/*
if(b){
    console.log("B es verdadero");
} else {
    console.log("B es falso");
}

for(i=0;i<=10;i++){
    console.log(i);
}

//Recorrer por indices
for(elemento in lista){
    console.log(elemento);
}

//Recorrer por elementos
for(elemento of lista){
    console.log(elemento);
}
*/

//Cadena de texto
var texto = "Hola mundo";
var texto2 = "Otro Hola Mundo";
//Longitud de la cadena
console.log(texto.length)
//Concatenacion
var concate = texto + " " + texto2;
console.log(concate);
//convertir en mayuscula o minuscula
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

//Division por 0
var numero1 = 15/0;
console.log(numero1);

//Undefined
var numero2;
console.log(numero2);

//Comparativa Bits (Binario)
const c = 5;         // 00000000000000000000000000000101
const d = 2;         // 00000000000000000000000000000010

console.log(c << d); // 00000000000000000000000000010100
// expected output: 20

//Particularidades Js
let x = 1 + "1";
console.log(x);