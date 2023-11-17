"use strict";

/* FOR EACH metoda prolazi listu član po član (svaki član ulazi kao parametar) i na njemu radi određene izmjene. Može adaptirati listu i
spremiti izmjenjene članove u neku novu listu koju složimo za input tih adaptiranih članova. Prvi parametar je uvijek vrijednost člana liste
a drugi parametar njegovo mjesto koje zauzima u listi.*/

let brojevi = [10, 20, 30, 40, 50];

brojevi.forEach(function (vrijednost_clana_liste, redno_mjesto_u_listi) {
  console.log(vrijednost_clana_liste, redno_mjesto_u_listi);
});

brojevi.forEach((vrijednost_clana_liste, redno_mjesto_u_listi) => {
  console.log(vrijednost_clana_liste, redno_mjesto_u_listi);
});

brojevi.forEach((vrijednost, kljuc, lista) => {
  console.log(
    `element liste : ${kljuc}, ima vrijednost : ${vrijednost}. Cijela lista : ${lista}`
  );
});

// idemo vidjeti primjer sa listom objekata

const useri = [
  {
    ime: "Igor",
    prezime: "Jevremović",
  },
  {
    ime: "Ivan",
    prezime: "Horvat",
  },
  {
    ime: "Zoran",
    prezime: "Zorić",
  },
];

useri.forEach((user) => console.log(user)); // ovo će nam dati listu objekata
useri.forEach((user) => console.log(user.ime)); // ovo će nam dati imena

/* FILTER metoda za razliku od forEach metode vraća određenu vrijednost. Ta vrijednost je kopija dijela liste filtrirana na način da
uključuje u tu novu listu samo one elemente koji zadovolje određene parametre filtera. */

const rijeci = ["prozor", "apartman", "autocesta", "lopata", "zvrk"];

const rezultat = rijeci.filter((rijec) => rijec.length < 6);
console.log(rezultat);

// primjeri

brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parniBrojevi = brojevi.filter((broj) => {
  return broj % 2 === 0;
});

console.log(parniBrojevi);

// ista stvar sa forEach metodom

const parniBrojevi2 = [];

brojevi.forEach((broj) => {
  if (broj % 2 === 0) {
    parniBrojevi2.push(broj);
  }
});

console.log(parniBrojevi2);

/* MAP metoda dopušta da uzmemo jednu listu i iz nje napravimo drugu listu u kojoj će ti elementi izgledati malo drugačije. */

const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 1200 },
  { proizvod: "Romobil", cijena: 400 },
  { proizvod: "Automobil", cijena: 40000 },
  { proizvod: "Tipkovnica", cijena: 30 },
];

const novaLista = lista.map((vrijednost) => {
  return vrijednost.proizvod;
});

console.log(novaLista);

/* Neke manje korištene metode */

// FIND metoda - find će potražiti da li određeni član ima obilježje koje se traži i spremit će vrijednost cijelog člana u novu varijablu.
const findLista = lista.find((auto) => {
  return auto.proizvod === "Automobil";
});

console.log(findLista);

// SOME metoda - će pretražiti listu i ako nađe traženog (slično ili metodi), izbacit će true
const manjeOd150 = lista.some((e) => {
  return e.cijena <= 150;
});

console.log(manjeOd150);

// EVERY metoda - će pretražiti listu i ako svi zadovoljavaju traženi uvjet, izbacit će true
const manjeOd200 = lista.every((e) => {
  return e.cijena <= 200;
});

console.log(manjeOd200);

// INCLUDES metoda - Provjera kod brojevnih listi, kada nabrzinu želite saznati sadrži li određena lista određenu vrijednost

brojevi = [1, 2, 3, 4, 5];
const includesDva = brojevi.includes(4);

console.log(includesDva);

// Praktični primjeri korištenja metoda

const listaBrojeva = [1, 4, 7, 12, 16];

//idemo napraviti novu listu od postojeće koristeći map metodu, ta nova lista će sadržavati članove postojeće uvećanu puta 2.

const puta2 = listaBrojeva.map((broj) => {
  return broj * 2;
});

console.log(puta2);

// ista stvar sa forEach metodom

const dupli = [];
listaBrojeva.forEach((broj) => {
  dupli.push(broj * 2);
});

console.log(dupli);
