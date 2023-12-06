"use strict";

/* Zadatak 1
Slijedeći HTML sintaksu, složi JS kod koji će klikom na button smanji broj u paragrafu smanjiti za 1, a klikom na button povećaj, povećati za 1.
*/

const smanji = document.querySelector("#smanji");
const povecaj = document.querySelector("#povecaj");
const paragraf = document.querySelector("p");
let brojac = 0;

smanji.addEventListener("click", () => {
  count(-1);
});

povecaj.addEventListener("click", () => {
  count(1);
});

let count = (broj) => {
  brojac += broj;
  paragraf.textContent = brojac;
};

/* 
Zadatak 2

Napravite funkciju pod nazivom suma koja prima 2 parametra, prvi neka bude lista brojeva a drugi callback funkcija koja se primjenjuje na 
svaki element liste (unutar funkcije 'suma').
Neka suma vrati novu listu popunjenu brojevima iz liste pomnoženima sa 2. */

const suma = (lista, cb) => {
  return lista.map(cb);
};

const mnozenje = (broj) => broj * 2;

const lista = [10, 20, 30, 40];

console.log(suma(lista, mnozenje));
