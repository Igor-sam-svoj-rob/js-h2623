"use strict";

// kreiranje objekta od varijabli

const ime = "Igor";
const prezime = "Jevremović";
const godine = 40;

const osoba = {
  ime,
  prezime,
  godine,
};

console.table(osoba);

// Dekonstruiranje - možemo dekonstruirati liste i objekte

// Liste

const brojevi = [1, 2, 3, 4, 5, 6];

// ovako možemo na jednostavan način izvući podatke iz liste i spremiti ih u varijable/liste pritom ne mijenjajući originalnu listu
const [broj1, , broj3, ...ostatakListe] = brojevi;

console.log(broj1, broj3, ostatakListe);

// Objekt

const todo = {
  id: 1,
  zadatak: "Kupi mlijeko",
  adresa: {
    ulica: "Trg Davora Horvata",
    grad: "Zagreb",
  },
};

// ovako možemo dekonstruirati objekt u pripadajuće varijable
const { id, zadatak, adresa } = todo;
console.log(id, zadatak, adresa);

// ovako možemo dekonstruirati objekt i promijeniti imena varijabli u odnosu na objekt

const {
  id: todoID,
  adresa: { grad: gradTodo },
} = todo;

console.log(todoID, gradTodo);
