"use strict";

const igorLista = [
  "Igor",
  "Jevremović",
  "zaposlenje",
  "Kutina",
  2023,
  ["Matija", "Luka", "Josip"],
];

console.log(igorLista);

/* Objekti su složeniji od listi, možemo im dodati i sami definirati pripadajuće ključeve pod kojim se nalaze podaci.
Definiraju se vitičastim zagradama (tzv. object literal sintaksom). Podatke pozivamo pomoću pripadajućeg ključa a ne rasporeda unutar
objekta. */
const igorObjekt = {
  firstName: "Igor",
  lastName: "Jevremović",
  zanimanje: "zaposlenje",
  grad: "Kutina",
  godina: 2023,
  prijatelji: ["Matija", "Luka", "Josip"],
};

console.log(igorObjekt);

console.log(igorLista[0]);
// dot notacija - koristi točku kako bi dohvatili određenog člana objekta i njegovu pripadajuću vrijednost.
console.log(igorObjekt.firstName);
// bracket notacija - koristi zagradu kako bi dohvatili određenog člana objekta i njegovu pripadajuću vrijednost.
console.log(igorObjekt["firstName"]);

// dodavanje novog elementa u objekt
igorObjekt.boja = "plava";
console.log(igorObjekt);

// promjena podatka u objektu
igorObjekt.zanimanje = "predavač";
console.log(igorObjekt);

// dodavanje novog člana liste u listi koja se nalazi u objektu
igorObjekt.prijatelji.push("Stjepan");

// Bracket notacija koja spaja više dijelova objekta sa konstantama koje sami odredimo...
const nameKey = "Name";

console.log(igorObjekt["first" + nameKey]);
console.log(igorObjekt["last" + nameKey]);

const upitnik = prompt(
  "Što vas zanima o Igoru? Izaberi između firstName, lastName, zanimanje, prijatelji"
);

if (igorObjekt[upitnik]) {
  console.log(igorObjekt[upitnik]);
} else {
  alert("Krivi upis");
}
