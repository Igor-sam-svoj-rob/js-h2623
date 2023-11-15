"use strict";

console.log("gol 1 ⚽");
console.log("gol 2 ⚽");
console.log("gol 3 ⚽");
console.log("gol 4 ⚽");
console.log("gol 5 ⚽");
console.log("gol 6 ⚽");
console.log("gol 7 ⚽");
console.log("gol 8 ⚽");
console.log("gol 9 ⚽");
console.log("gol 10 ⚽");

/* Rješavanje ovakvog problema možemo napraviti pomoću rekurzije iliti ponavljanja izvođenja dok se određeni uvjet ne ispuni.
Prvo se definira uvjet kada se rekurzija završava, a onda definiramo operaciju koja će samu sebe pozivati iznova dok se uvjet ne ispuni. */

function golovi(gol) {
  // 1. uvjet
  if (gol > 10) {
    return;
  } else {
    console.log(`gol ${gol} ⚽`);
    // 2. rekurzivni poziv
    return golovi(gol + 1);
  }
}

golovi(1);
/* For petlja:

1. Prva stavka je da definiramo inicijalnu vrijednost
2. Druga stavka je da definiramo uvijet koji se mora ispuniti kako bi se petlja završila ili dok ne postane false
3. Treća stavka je način na koji ćemo mijenjati inicijalnu vrijednost kroz svaku iteraciju petlje dok ne ispunimo uvjete iz druge stavke.
4. Četvrta stavka je kod koji će se odvrtiti pri svakoj iteraciji petlje. */

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++) {
  console.log(`gol ${ponavljanje} ⚽`);
}

// For petlja kod listi

const predmeti = ["stol", "stolica", "stoljnak", "vaza", "tanjuri"];

// klasičan način za ispis članova liste koristeći for petlju
for (let i = 0; i < predmeti.length; i++) {
  console.log(predmeti[i]);
}

// moderan, novi način za istu stvar
for (const predmet of predmeti) {
  console.log(predmet);
}

// for petlja kod liste objekata

const korisnici = [{ ime: "Igor" }, { ime: "Ivan" }, { ime: "Josip" }];

for (let i = 0; i < korisnici.length; i++) {
  console.log(korisnici[i].ime);
}

for (const korisnik of korisnici) {
  console.log(korisnik.ime);
}

// Možemo for petljom vrtiti svašta pa čak i stringove

const algebra = "Algebra";

for (const slovo of algebra) {
  console.log(slovo);
}

// Loopanje objekta

const objekt = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

for (const vrijednost of Object.values(objekt)) {
  console.log(vrijednost);
}

/* Za loopanje objekta/listi postoji još jednostavnija metoda. In loop metoda, koja funkcionira na način da prvo izbacuje po glavnoj
varijabli ključ (ako je objekt onda ključ, ako je lista onda redni broj listnog člana), a vrijednost dobivamo pozivajući objekt/listu i
ključ unutar uglatih zagrada. */
for (const kljuc in objekt) {
  console.log(kljuc, objekt[kljuc]);
}

const lista = ["crvena", "plava", "bijela"];

for (const boja in lista) {
  console.log(boja, lista[boja]);
}
