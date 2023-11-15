"use strict";

const igor = {
  ime: "Igor",
  prezime: "Jevremović",
  godina: 40,
  zanimanje: "predavač",
  prijatelji: ["Marko", "Luka", "Ivan"],
  vozackaDozvola: true,
  penzija() {
    this.godineDoPenzije = 65 - this.godina;
    return this.godineDoPenzije;
  },
  zadatak() {
    return `${this.ime} ima ${this.penzija()} godina do mirovine i ${
      this.vozackaDozvola ? "može" : "ne može"
    } voziti.`;
  },
};

/* Pozivajući jednu metodu unutar druge metode, možemo odvrtiti i zapisati sve što se nalazi u prvoj metodi. */
console.log(igor.zadatak());
/* console.table(igor); */

const todo = {};

todo.id = 1;

const objekt1 = {
  a: 1,
  b: 2,
};

const objekt2 = {
  c: 3,
  d: 4,
};

// korištenje spread operatora kod objekata kako bi kreirali novi objekt sa članovima prva 2 objekta.
const objekt3 = { ...objekt1, ...objekt2 };
console.log(objekt3);

// Object assign operator za razliku od spread operatora može mutirati vrijednosti ali u ovom slučaju radi isto kao i spread operator
const objekt4 = Object.assign({}, objekt1, objekt2);
console.table(objekt4);

// lista objekata
const todos = [
  { id: 1, zadatak: "Kupi kruh" },
  { id: 2, zadatak: "Kupi mlijeko" },
  { id: 3, zadatak: "Kupi paštetu" },
];

console.log(todos[0].zadatak);

// spremanje objektnih ključeva iz prvog člana liste (koji je objekt) u varijablu y (što će kreirati listu tih ključeva)
let y = Object.keys(todos[0]);
console.log(y);

// spremanje broja objektnih ključeva u varijablu x
let x = Object.keys(todos[0]).length;
console.log(x);

// spremanje vrijednosti iz objekta u novu listu
let z = Object.values(todos[0]);
console.log(z);

// provjera postoji li točno određeni ključ unutar objekta
let q = todos[0].hasOwnProperty("id");
console.log(q);
