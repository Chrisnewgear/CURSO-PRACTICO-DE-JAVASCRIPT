// CUADRADO
console.group ("Cuadrado");


/* const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado){

    return lado * 4;
}

console.log("El perímetro del cuadrado es: " + perimetroCuadrado(56) + "cm");

/* console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm"); */

function areaCuadrado (lado){ 
    return lado * lado;
}

console.log("El área del cuadrado es: " + areaCuadrado(35) + "cm");

/* console.log("El área del cuadrado es: " + areaCuadrado + "cm^2"); */


console.groupEnd();


// TRIANGULO
console.group("Triangulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; */


/* console.log("Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
); */

/* console.log("La altura del triangulo es: " + alturaTriangulo + "cm"); */

//PERIMETRO DEL TRIANGULO
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}
/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; */

console.log("El perímetro del triangulo es: " + perimetroTriangulo (20, 15, 32) + "cm");

//AREA DEL TRIANGULO

function areaTriangulo (base, altura) {
    return base * altura;
}
/* const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; */

console.log("El área del triangulo es: " + areaTriangulo (10, 20) + "cm");
/* console.log("El área del triangulo es: " + areaTriangulo + "cm"); */

console.groupEnd();

//CIRCULOS

console.group("CIRCULOS");
//RADIO
/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm"); */

//DIAMETRO
function diametroCirculo (radio){
    return radio * 2;
}

//const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo(20) + "cm");

//PI
const PI = Math.PI;
console.log ("El valor de PI es: " + PI);

//PERIMETRO
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}
console.log("La circunferencia del circulo es: " + perimetroCirculo(12) + "cm");

/* const perimetroCirculo = diametroCirculo * PI; */

//AREA
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
console.log("El área del circulo es: " + areaCirculo(26) + "cm");

console.groupEnd();


//AQUI VIENE EL HTML

function calcularPerimetroCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularArea (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//TRIANGLE FUNCTIONS

function calculaPerimetroTriangulo (){
    const input1 = document.getElementById ("trianguloLado1");
    const side1 = input1.value;

    const input2 = document.getElementById ("trianguloLado2");
    const side2 = input2.value;

    const input3 = document.getElementById ("baseTriangulo");
    const base = input3.value;

    const perimetro = perimetroTriangulo(side1, side2, base);
    alert (perimetro);
}

function calculaAreaTriangulo (){
    const input3 = document.getElementById ("baseTriangulo");
    const base = input3.value;

    const input4 = document.getElementById ("alturaTriangulo");
    const altura = input4.value;

    const area = areaTriangulo(base, altura);
    alert (area);
}

//CIRCLE FUNCTIONS

function calculaDiametroCirculo (){
    const radio = document.getElementById("radio");
    const value = radio.value;

    const diametro = diametroCirculo(value);
    alert(diametro)
}

function calculaPerimetroCirculo(){
    const radio = document.getElementById("radio");
    const value = radio.value;    
    
    const perimetro = perimetroCirculo(value);
    alert (perimetro);
}

function calculaAreaCirculo (){
    const radio = document.getElementById("radio");
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}