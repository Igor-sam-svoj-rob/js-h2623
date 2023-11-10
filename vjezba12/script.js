"use strict";

/* 

Hoisting služi tome da možemo dohvatiti vrijednost varijable iakoju nismo kronološki definirali na vrhu izvođenja koda.

*/

/* Ovakvu vrstu hoistinga sa vrijednosti varijable moguće je napraviti samo putem "var" načina deklariranja varijable. */

lopta = "nogometna";

const sport = () => {
  const lopta2 = "rukometna";
  return {
    sport2: () => {
      return console.log(lopta, lopta2);
    },
  };
};

var lopta;

console.log(lopta);

const noviSport = sport();
noviSport.sport2();

/* Primjer za osobnu refleksiju */

const varijable = () => {
  let varijabla1 = "broj 1";
  var varijabla2 = "broj 2";

  return `Putem ispisa funkcije dostupne su nam vrijednosti varijabli : ${varijabla1} i ${varijabla2}`;
};

console.log(varijable());

/* console.log(varijabla1); */
/* console.log(varijabla2); */

/* Za razliku od function scopea koji ne dopušta pristup varijablama van funkcije, postoje razlike kod drugih "situacija".
Ako se radi o bilo kakvom drugom bloku (if-else, switch, while-do itd) let i const neće biti dostupni van bloka, dok var hoće. */

if (5 > 4) {
  var varijabla3 = "broj 3";
  let varijabla4 = "broj 4";
  const varijabla5 = "broj 5";
  console.log(`Varijabla 3 nam je dostupna i vrijednost joj je ${varijabla3}`);
}

console.log(varijabla3);

/* Načini proslijeđivanja vrijednosti u funkciju. */

// 1. način - putem parametra

function dodaj(vanjskiBroj) {
  const unutarnjiBroj = 5;
  return vanjskiBroj + unutarnjiBroj;
}

dodaj(10);
console.log(dodaj(10));

// 2. način - pomoću varijable

let vanjskiBroj = 10;

function dodaj2() {
  const unutarnjiBroj = 5;
  return vanjskiBroj + unutarnjiBroj;
}

dodaj2();
console.log(dodaj2());

// 3. način - pomoću druge funkcije

function mnozenje(x) {
  return x * 4;
}

function suma(y, z) {
  const broj1 = mnozenje(y);
  const broj2 = mnozenje(z);

  const sazetak = `rezutati množenja sa brojem 4 su ${broj1} i ${broj2}`;
  return sazetak;
}

suma(2, 3);
console.log(suma(2, 3));
