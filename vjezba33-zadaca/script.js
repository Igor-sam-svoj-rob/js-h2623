"use strict";

/* Zadatak 1

Izradi rekurzivnu funkciju koja može izračunati prosjek vrijednosti u listi bez obzira na vrijednosti u listi i broj
članova u listi. Napravi neku listu i pomoću rekurzivne funkcije izračunaj prosjek vrijednosti. */

/* Zadatak 2

Reduce metodom izračunaj ukupni zbroj cijena u listi

const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Perilica", cijena: 2000 },
  { proizvod: "Romobil", cijena: 400 },
  { proizvod: "Auto", cijena: 100000 },
  { proizvod: "Tipkovnica", cijena: 100 },
]; */

const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Perilica", cijena: 2000 },
  { proizvod: "Romobil", cijena: 400 },
  { proizvod: "Auto", cijena: 100000 },
  { proizvod: "Tipkovnica", cijena: 100 },
];

const prosjekCijena = lista.reduce((prije, sad) => {
  return prije + sad.cijena;
}, 0);

console.log(prosjekCijena / lista.length);

/* Zadatak 3

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

1) napravi listu racuni koja sadrži 10 vrijednosti između 1 i 400.

2) napravi prazne liste za napojnice i totale (racun + napojnica)

3)Vaš zadatak je izračunati napojnicu ovisno o veličini računa.Ovo smo već izračunali,
koristimo istu funkciju koju smo koristili zadnji put. 
Onda upotrijebite for petlju kako bi napravili 10 kalkulacija.

tip: pozovite napojnica varijablu iz točke 3 unutar petlje i upotrijebite push metodu kako 
bi dodali vrijednosti napojnici i ukupnim listama.

savjet : prvo zbrojite sve vrijednosti u listi. 
Za dio sa zbrajanjem krenite sa kreiranjem varijable sum koja kreće sa početnom vrijednosti 0. 
U svakoj iteraciji dodajte trenutnu vrijednost liste u sum varijablu.

savjet 2 : za izračun prosjeka, podijelite sumu koju ste dobili sa brojem članova liste.

savjet 3 : pozovite funkciju sa (racun + napojnica) listom */

const racuni = [125, 555, 44, 344, 230, 23, 95, 509, 301, 12];

let napojnica = [];
let total = [];

const calcNapojnica = function (racun) {
  return racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
};

for (let i = 0; i < racuni.length; i++) {
  const tip = calcNapojnica(racuni[i]);
  napojnica.push(tip);
  total.push(racuni[i] + tip);
}

console.log(napojnica, total);
