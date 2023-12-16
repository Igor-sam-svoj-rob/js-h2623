"use strict";

function covjek(x) {
  const ime = x;
  function pozdrav() {
    console.log(`Pozz, ja sam ${ime}`);
  }
  function kakoSi() {
    console.log(`Kako se osjećaš ${ime}`);
  }

  return { pozdrav, kakoSi };
}

const osoba1 = covjek("Ivan");
const osoba2 = covjek("Ivana");

osoba1.kakoSi();
osoba2.pozdrav();

// Idemo vidjeti primjer sa brojevima i matematikom..

let x = 1;

function roditelj() {
  let y = 2;
  console.log(x, y);

  function dijete() {
    console.log((x += 2));
    console.log((y += 4));
  }

  return dijete;
}

const zbrajanje = roditelj();
zbrajanje();
zbrajanje();
console.log(x);

// Closure sa DOM praćenjem klikova
/* Napravit ćemo 3 gumba, složiti event listener na sva 3 gumba koji će pratiti broj klikova po gumbima. Svaki klik će pokretati funkciju
updateKlik koju ćemo pak složiti na način da ima kao input parametar button koji smo kliknuli. Napravit ćemo prazni objekt klikovi u kojeg
ćemo zapisivati koji gumb je kliknut i kolko puta. Kreirat ćemo i varijablu button koja će spremati id buttona kojeg smo kliknuli prilikom
svakog klika na način ako je kliknut da se uveća za 1 a ako nije da mu je defaultna vrijednost 1. */

/* function updateKlik(klik) {
  let klikovi = {};
  let button = klik.id;
  klikovi[button] = klikovi[button] + 1 || 1;
  console.log(klikovi);
}

document.querySelectorAll(".klikovi").forEach((x) => {
  x.addEventListener("click", (event) => {
    updateKlik(event.target);
  });
}); */

/* Zašto nam je vrijednost uvijek 1? Zato što se svaki puta kada kliknemo neki button funkcija updateKlik pokrene, klikovi se naprave,
vrijednost se doda, log se ispiše... i onda funkcija završi... A kada funkcija završi ništa ju više u našoj skripti ne koristi i ona se
briše. I u biti svaki put kada kliknemo ona kreće iz početka te je vrijednost uvijek 1 umjesto da se uvećava... */

function updateKlik() {
  let klikovi = {};
  let button;

  function reportKlik(klik) {
    button = klik.id;
    klikovi[button] = klikovi[button] + 1 || 1;
    console.log(klikovi);
  }
  return reportKlik;
}

const report = updateKlik();

document.querySelectorAll(".klikovi").forEach((x) => {
  x.addEventListener("click", (event) => {
    report(event.target);
  });
});
