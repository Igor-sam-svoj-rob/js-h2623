const prijatelji = ["Stjepan", "Andrija", "Marko"];

prijatelji.push("Matija");

console.log(prijatelji);

prijatelji.unshift("Lovro");

console.log(prijatelji);

prijatelji.pop();

console.log(prijatelji);

prijatelji.shift();

console.log(prijatelji);

/* IndexOf će pronaći člana liste ako on postoji i ispisati njegovu lokaciju u listi */

console.log(prijatelji.indexOf("Marko"));
console.log(prijatelji.indexOf("Stjepan"));

/* includes će provjeriti postoji li u listi traženi član */

console.log(prijatelji.includes("Andrija"));

if (prijatelji.includes("Andrija")) {
  console.log("Mate prijatelja po imenu Andrija");
} else {
  console.log("Nema takvog prijatelja u listi");
}

/* VRSTE LISTI */

let x;
const voce = ["jabuke", "mandarine", "kruške"];
const bobice = ["kupine", "maline", "borovnice"];

/* "Krivi" pristupi */

/* voce.push(bobice);

console.log(voce);

x = voce[3];
x = voce[3][0];

console.log(x); */

/* const svoVoce = [voce, bobice];
console.log(svoVoce); */

/* Konkateniranje liste, spajanje listi u novu listu */

x = voce.concat(bobice);

console.log(x);

/* Spread operator služi za ekspandiranje listi/objekata/stringova u jednu varijablu... */

const brojevi = [1, 2, 3];

const noviBrojevi = [...brojevi, 4];

console.log(noviBrojevi);

const y = [...brojevi, ...noviBrojevi];

console.log(y);

/* Uklanjanje podlisti, tj slaganje svih podlisti u listu istog ranga */

voce.push(bobice);
console.log(voce);

const flet = voce.flat();
console.log(flet);

/* Statičke metode za liste */

// provjera da li je nešto lista?

console.log(Array.isArray(voce));
console.log(Array.isArray("string"));

const a = 1;
const b = 2;
const c = 3;

const z = Array.of(a, b, c);
console.log(z);
