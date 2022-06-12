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
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

//DIAMETRO
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log ("El vlao de PI es: " + PI);

//CIRCUNFERENCIA
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

//AREA
const areaCirculo = radioCirculo * radioCirculo;
console.log("El área del circulo es: " + areaCirculo + "cm");

console.groupEnd();