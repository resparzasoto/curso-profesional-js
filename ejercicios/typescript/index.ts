"use strict";

console.log("Hello, TypeScript");

function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 3);

//Boolean
let muted: boolean = true;
muted = false;

// Números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Richard";
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push(9000);

// Arreglos con diferentes tipos
// Puede tener strings o números
let peopleAndNumbers: Array<string | number> = [];

// Enum
enum Color {
  Red = "Rojo",
  Green = "Verde",
  Blue = "Azul",
  Yellow = "Amarillo",
}

let colorFavorito: Color = Color.Yellow;

console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

// Object
let someObject: object = { type: "Wildcard" };
