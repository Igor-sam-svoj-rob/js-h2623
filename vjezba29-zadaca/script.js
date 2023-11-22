"use strict";
/* Zadatak 1 

Lista imena (do 5 komada), neka jedno ime bude vaše ime. napravite for petlju
koja će za vaše ime ispisati "Ime je super" dok će ostala imena samo ispisat. */

const imena = ["Marko", "Matija", "Igor", "Ivan", "Petar"];

for (let i = 0; i < imena.length; i++) {
  if (imena[i] == "Igor") {
    console.log("Ime je super");
  } else {
    console.log(imena[i]);
  }
}

/* Zadatak 2

Petlja u petlji vježba. Napravi petlju koja će se ispisati 4 puta. Unutar te petlje
složi podpetlju koja se bude izvrtila 6 pita. Prva petlja može ispisati brojeve 1-4.
Druga petlja neka ispiše 5-10 brojeve... */

for (let i = 0; i <= 4; i++) {
  console.log(`broj${i}`);
  for (let j = 0; j <= 6; j++) {
    console.log(`broj${j}`);
  }
}

/* Zadatak 3

Iz postojeće liste objekata koristeći ove metode izvadite limuzine u novu listu.
Bonus zadatak : kako bi napisali funkciju koja će isfiltrirati aute proizvedene između 2016 i 2020?
 */

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2014 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2015 },
  { ime: "BMW", kategorija: "coupe", godinaProizvodnje: 2010 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2011 },
  { ime: "Peugeot", kategorija: "limuzina", godinaProizvodnje: 2018 },
  { ime: "Range Rover", kategorija: "jeep", godinaProizvodnje: 2017 },
];

const limuzine = auti.filter((auto) => auto.kategorija === "limuzina");
console.log(limuzine);

const noviAuti = auti.filter(
  (auto) => auto.godinaProizvodnje >= 2016 && auto.godinaProizvodnje <= 2020
);
console.log(noviAuti);

const marka = auti.map((marka) => marka.ime);
console.log(marka);

/* Map metoda kako iz postojeće liste objekata kreirati novu listu objekata koristeći članove stare liste objekata. */
const markaKat = auti.map((auto) => {
  return {
    ime: auto.ime,
    kategorija: auto.kategorija,
    starost: 2023 - auto.godinaProizvodnje,
  };
});

console.log(markaKat);
