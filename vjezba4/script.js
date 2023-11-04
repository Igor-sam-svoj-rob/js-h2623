/* Falsy values : 0, "", NaN, undefined, null - vrijednosti koje u suštini nisu netočne, ali kada se prebace u Boolean onda će postati.*/

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean("vrijednost"));
console.log(Boolean(1));

const novac = 0;

if (novac) {
  console.log("Nemoj sve potrošiti");
} else {
  console.log("Nemaš novaca");
}

let visina;

if (visina) {
  console.log("Imamo visinu");
} else {
  console.log("Nemamo visinu");
}

/* Strict i loose deklariranje */

const godina = "18";

if (godina === 18) {
  console.log("Imate 18 godina");
}

//Strict deklariranje - provjeriti i usporediti i vrijednost podatka i tip podatka

if ("18" === 18) {
  console.log("ovo je isto");
} else {
  console.log("ovo nije isto");
}

//Loose deklariranje - samo provjeriti i usporediti vrijednost podatka
if ("18" == 18) {
  console.log("ovo je isto");
} else {
  console.log("ovo nije isto");
}

const broj = Number(prompt("Koji ti je najdraži broj?"));
console.log(broj, typeof broj);

/* if (broj === 23) {
  console.log("Broj 23 je super");
} else if (broj === 7) {
  console.log("Broj 7 je također super");
} else {
  console.log("Ne sviđa mi se taj broj");
} */

// Equality operator koji uspoređuje da nismo upisali jednake vrijednosti
if (broj !== 23) {
  console.log("Zašto nisi odabrao broj 23???");
} else {
  console.log("Hvala što ste odabrali broj 23!");
}

const brojSusjeda = Number(prompt("Koliko susjeda ima Hrvatska?"));

/* If-else petlja koja će dati ispis(console.log) ako imamo 1 susjeda, ako imamo više od 1 susjeda i ako nemamo susjeda (0 susjeda) */
if (brojSusjeda == 1) {
  console.log("Imamo jednog susjeda");
} else if (brojSusjeda > 1) {
  console.log("Imamo vise od jednog susjeda");
} else if (brojSusjeda == 0) {
  console.log("Nemamo susjeda");
}
