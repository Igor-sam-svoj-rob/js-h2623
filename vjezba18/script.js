"use strict";

/* Postoji Stack i Heap memorija. Stack memorija služi za zapisivanje primitivnih vrijednosti, dok se u Heap memoriji nalaze objektni podaci,
ali se pustem Stacka zapisuje referentna adresa u Heapu za objektne podatke. */

let osoba1 = {
  ime: "Igor",
};

let osoba2 = osoba1;

/* console.log(osoba1, osoba2); */

osoba2.ime = "Matija";

/* console.log(osoba1, osoba2); */

let broj = 5;

let broj2 = broj;

/* console.log(broj2); */

broj2 = 6;

/* console.log(broj, broj2); */

/* Izrada kopije objekta, u ovom slučaju na način da se kreira novo mjesto u heap memoriji. */
const igor = {
  ime: "Igor",
  prezime: "Jevremović",
  zanimanje: "predavač",
  prijatelji: ["Luka", "Matija", "Fran"],
};

/* console.table(igor); */

const luka = {
  ...igor,
  ime: "Luka",
  prezime: "Lukić",
};

/* console.table(luka); */

igor.prezime = "Ivanović";

/* console.table(igor);
console.table(luka); */

/* Ako su podaci višeslojeviti, tj. ako imamo ugniježđeni objekt unutar objekta, onda će to i dalje biti referentna točka na stari objekt. */

const stariObjekt = {
  a: 1,
  b: { c: 2 },
  d: 3,
};

const noviObjekt = {
  ...stariObjekt,
};

/* console.table(stariObjekt);
console.table(noviObjekt); */

stariObjekt.b.c = 4;

/* console.table(stariObjekt);
console.table(noviObjekt); */

/* Potpuni deep klon objekta */
const superNoviObjekt = structuredClone(stariObjekt);

console.table(stariObjekt);
console.table(superNoviObjekt);

stariObjekt.b.c = 6;

console.table(stariObjekt);
console.table(superNoviObjekt);
