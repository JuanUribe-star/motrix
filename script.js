// ================================
// CAMBIAR FONDO DE LA PAGINA
// ================================

function cambiarFondo(){

let colores = [
"lightblue",
"lightgreen",
"lightyellow",
"lightpink",
"lightgray"
];

let numero = Math.floor(Math.random() * colores.length);

document.body.style.backgroundColor = colores[numero];

}



// ================================
// MENSAJE DE BIENVENIDA
// ================================

function mostrarBienvenida(){

alert("Bienvenido a mi proyecto web");

}



// ================================
// CAMBIAR TEXTO
// ================================

function cambiarTexto(){

document.getElementById("texto").innerHTML =
"El texto fue modificado usando JavaScript.";

}



// ================================
// VALIDAR FORMULARIO
// ================================

function validarFormulario(){

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;

if(nombre === "" || email === ""){

alert("Por favor completa todos los campos");
return false;

}

alert("Formulario enviado correctamente");
return true;

}



// ================================
// AGRANDAR IMAGENES DE GALERIA
// ================================

function agrandarImagen(img){

if(img.style.width === "500px"){

img.style.width = "300px";

}else{

img.style.width = "500px";

}

}



// ================================
// SUMAR DATOS
// ================================

function sumarDatos(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let n3 = Number(document.getElementById("num3").value);

let suma = n1 + n2 + n3;

document.getElementById("resultado").innerHTML =
"Resultado de la suma: " + suma;

}



// ================================
// MULTIPLICAR DATOS
// ================================

function multiplicarDatos(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let n3 = Number(document.getElementById("num3").value);

let multiplicacion = n1 * n2 * n3;

document.getElementById("resultado").innerHTML =
"Resultado de la multiplicación: " + multiplicacion;

}



// ================================
// PROMEDIO DE DATOS
// ================================

function promedioDatos(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let n3 = Number(document.getElementById("num3").value);

let promedio = (n1 + n2 + n3) / 3;

document.getElementById("resultado").innerHTML =
"Promedio: " + promedio;

}

