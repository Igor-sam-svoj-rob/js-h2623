"use strict";

// HOF iliti Higher Order Function (Funkcija višeg reda) - je funkcija koja kao parametar dobiva drugu funkciju.
const a = (fn) => {
  fn();
};

// Callback funkcija koju druga funkcija poziva putem parametra na izvršenje...
const b = () => {
  console.log("Hello World");
};

//------------------------------------------------------------------------------
//Prva verzija - imamo listu brojeva i 2 funkcije koje rade određene matematičke izračune

/* const brojevi = [10, 20, 30, 40];

const kvadrat = () => {
  const umnozak = brojevi.map((broj) => broj * 2);
  return umnozak;
};

const zbroj = () => {
  const suma = brojevi.map((broj) => broj + 1);
  return suma;
};

console.log(kvadrat());
console.log(zbroj()); */

//------------------------------------------------------------------------------
// Druga verzija - zamijenit ćemo izračun putem cb funkcije i prebacit logiku u funkcije izracunKvadrata i izracunZbroja

/* const brojevi = [10, 20, 30, 40];

function izracunKvadrata(x) {
  return x * 2;
}

function izracunZbroja(x) {
  return x + 1;
}

const kvadrat = () => {
  const umnozak = brojevi.map((broj) => izracunKvadrata(broj));
  return umnozak;
};

const zbroj = () => {
  const suma = brojevi.map((broj) => izracunZbroja(broj));
  return suma;
};

console.log(kvadrat());
console.log(zbroj()); */

//------------------------------------------------------------------------------
// Treća verzija - napravit ćemo izracun funkciju kao HOF i sada možemo putem nje neovisno o matematičkoj operaciji dobiti rezultat.

/* const brojevi = [10, 20, 30, 40];

function izracunKvadrata(x) {
  return x * 2;
}

function izracunZbroja(x) {
  return x + 1;
}

function dijeljenjeBrojeva(x) {
  return x / 2;
}

const izracun = (fn) => {
  const rezultat = brojevi.map((broj) => fn(broj));
  return rezultat;
};

console.log(izracun(izracunKvadrata));
console.log(izracun(izracunZbroja));
console.log(izracun(dijeljenjeBrojeva)); */

//------------------------------------------------------------------------------
/* Možemo od naše HOF metode napraviti novu metodu listi na našoj Array.prototype listi i onda koristiti unutar naše aplikacije. */
const brojevi = [10, 20, 30, 40];
const brojevi2 = [5, 10, 15, 20];

function izracunKvadrata(x) {
  return x * 2;
}

function izracunZbroja(x) {
  return x + 1;
}

function dijeljenjeBrojeva(x) {
  return x / 2;
}

Array.prototype.izracun = function (fn) {
  const rezultat = this.map((broj) => fn(broj));
  return rezultat;
};

console.log(brojevi.izracun(izracunKvadrata));
console.log(brojevi.izracun(izracunZbroja));
console.log(brojevi.izracun(dijeljenjeBrojeva));
console.log(brojevi2.izracun(dijeljenjeBrojeva));

//------------------------------------------------------------------------------

/* Svaki objekt u JS ima ugrađeno svojstvo koje se naziva prototype. Prototip je sam po sebi objekt, tako da će svaki prototip imati
vlastiti prototip čineći tako lanac prototipa. Lanac završava kada dođemo do prototipa koji ima null za vlastiti prototip */

const user = {
  ime: "Ivan",
};

console.log(user);
console.log(user.__proto__);
console.log(user.__proto__ === Object.prototype);

//Idemo malo vidjet još constructor funkciju u našim objektima - klasičan način ovo smo već radili...

/* function korisnik(ime) {
  this.ime = ime;
  this.login = function () {
    console.log(`${this.ime} se logirala.`);
  };
}

const korisnik1 = new korisnik("Maja");
const korisnik2 = new korisnik("Iva");
korisnik1.login();
korisnik2.login(); */

//------------------------------------------------------------------------------
// Ajmo od ove objektne metode napraviti prototip vrijednost...

function korisnik(ime) {
  this.ime = ime;
}

korisnik.prototype.login = function () {
  console.log(`${this.ime} se logirala.`);
};

const korisnik1 = new korisnik("Maja");
const korisnik2 = new korisnik("Iva");
korisnik1.login();
korisnik2.login();

//------------------------------------------------------------------------------
// Idemo još složiti primjer Prototip naslijeđivanja

function auto() {
  this.gorivo = "benzinac";
  this.getModel = function () {
    return this.model;
  };
}

function bmw() {
  this.model = "m5";
  this.potrosnja = function () {
    console.log("Potrošnja je 11l/100km");
  };
}

bmw.prototype = new auto();
console.log(bmw);
const objekt = new bmw();
console.log(objekt);
