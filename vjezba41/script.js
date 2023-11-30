"use strict";

/* 
JSON (Javascript Object Notation) je standardni format razmjene podataka temeljen na objektnoj sintaksi JS.

API (Application Programming Interface) - aplikacijsko programsko sučelje nam omogućuje komunikaciju sa serverom i drugim računalima.
*/

const post = {
  id: 1,
  naslov: "Prvi post",
  sadrzaj: "Ovo je sadrzaj posta",
  autor: "Igor",
};

// JSON stringify metoda za prebacivanje objekta u JSON format
const jsonFile = JSON.stringify(post);
/* console.log(jsonFile);

console.log(jsonFile.id); */

// JSON parse metoda za prebacivanje JSON formata u objekt
const objectFile = JSON.parse(jsonFile);
/* console.log(objectFile); */

/* setTimeout funkcija je asinkrona funkcija. Ona će svoje izvršavanje izvršiti ovisno o odgodi koju definiramo na toj setTimeout funkciji,
te će pustiti da se kod koji slijedi poslije te funkcije izvrši sinkrono. Samim time on u biti nije blokirajuća funkcija.
 */

setTimeout(() => {
  console.log("Pozz iz setTimeout asinkrone funkcije");
}, 0);

console.log("Pozz izvan setTimeout funkcije");

// Možemo i ovako definirati funkciju i onda ju pozvati kao imenovanu funkciju unutar setTimeout funkcije
const promijeniTekst = () => {
  document.getElementById("naslov").textContent = "Pozz iz setTimeout funkcije";
};

const promjena = setTimeout(promijeniTekst, 2000);

// A možemo i sa clearTimeout funkcijom spriječiti izvođenje setTimeout funkcije
document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(promjena);
  console.log("otkazana promjena");
});

// setInterval funkcija - izvršavati će se u zadanim intervalima konstantno

const interval = () => {
  console.log("intervalni ispis");
};

const intervalSetIterval = setInterval(interval, 1000);

// Naravno možemo također i ovu interval funkciju zaustaviti sa clearInterval funkcijom
document.getElementById("zaustavi").addEventListener("click", () => {
  clearInterval(intervalSetIterval);
});

// praktični primjer

let intervalBoja;

const promijeniBoju = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

document.getElementById("pokreni").addEventListener("click", () => {
  if (!intervalBoja) {
    intervalBoja = setInterval(promijeniBoju, 1000);
  }
});

document.getElementById("zaustavi").addEventListener("click", () => {
  clearInterval(intervalBoja);
  intervalBoja = undefined;
});
