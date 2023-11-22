"use strict";

/* Reducer metoda 

Reduce metoda izvršava tzv. "reducer" callback funkciju kojoj je svrha da sve članove liste svede i zapiše u jednu vrijednost.
Npr. od liste brojeva možemo složiti na jednostavan način izračun sume članova liste bez obzira koliko lista ima članova.
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pocetnaVrijednost = 0;

const suma = lista.reduce(function (prijasnjaVrijednost, trenutnaVrijednost) {
  return prijasnjaVrijednost + trenutnaVrijednost;
}, 0);

console.log(suma);

const suma2 = lista.reduce((prije, sad) => prije + sad, pocetnaVrijednost);
console.log(suma2);

/* Koristeći for petlju za istu stvar */
const suma3 = () => {
  let pocetna = 0;
  for (const broj of lista) {
    pocetna = pocetna + broj;
  }
  return pocetna;
};

console.log(suma3());

/* Izračun cijene košarice */

const kosarica = [
  { id: 1, proizvod: "Kruh", cijena: 2 },
  { id: 2, proizvod: "Mlijeko", cijena: 2 },
  { id: 3, proizvod: "Salama", cijena: 5 },
  { id: 4, proizvod: "Čips", cijena: 6 },
  { id: 5, proizvod: "Meso", cijena: 5 },
];

const total = kosarica.reduce((prije, sad) => prije + sad.cijena, 0);
console.log(total);
