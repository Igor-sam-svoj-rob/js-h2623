"use strict";

/* Kreirali smo listu i iz nje želimo izvući koje vrste podataka se nalaze u njoj. */
const igorLista = [
  "Igor",
  "Jevremović",
  2023 - 2000,
  "Predavač",
  ["Marko", "Luka", "Josip"],
];

/* Kreiramo praznu listu i for petljom prolazimo kroz listu igorLista i spremamo vrste podataka u listu types. */
const types = [];

for (let i = 0; i < igorLista.length; i++) {
  types[i] = typeof igorLista[i];
}

console.log(types);

// ugniježđena for petlja

for (let i = 1; i <= 5; i++) {
  console.log(`broj ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/* Ovo se ovako ispisuje jer je petlja u petlji, kada prva petlja krene, kreće i unutarnja petlja koja sa svojim iteracijama mora sve odraditi
prije nego glavna (parent) petlja završi krug. Naravno, onda ide novi krug glavne petlje, a podpetlja kreće iz početka... */

//-------------------------------------------------------------------

/* 

Napravit ćemo petlju koja će se izvrtiti 20 puta, ali ćemo unutar nje postavit uvjet u kojem ćemo zaustaviti izvođenje petlje ako se
taj uvjet ispuni. Ako se taj uvjet ispuni napravit ćemo ispis i zaustaviti izvođenje sa breakom...
*/

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("STOP");
    break;
  }
  console.log(i);
}

/* Ova petlja za razliku od breaka koristi continue, koji će kada se uvjet ispuni, odraditi svoj uvjet, a originalni će izbaciti
iz ispisa. */

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("Umjesto 10, napiši deset");
    continue;
  }

  console.log(i);
}

/* Primjer sa break i continue koristeći listu sa početka dokumenta. Break ćemo napraviti kada naletimo na brojevni tip podatka,
a continue kada nešto nije string... */

for (let i = 0; i < igorLista.length; i++) {
  if (typeof igorLista[i] === "number") break;
  console.log(igorLista[i], typeof igorLista[i]);
}

for (let i = 0; i < igorLista.length; i++) {
  if (typeof igorLista[i] !== "string") continue;
  console.log(igorLista[i], typeof igorLista[i]);
}

/* Idemo napravit petlju od zadnjeg prema prvom članu liste... */

for (let i = igorLista.length - 1; i >= 0; i--) {
  console.log(igorLista[i]);
}
