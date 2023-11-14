"use strict";

const igor = {
  ime: "Igor",
  prezime: "Jevremović",
  godina: 40,
  zanimanje: "predavač",
  prijatelji: ["Marko", "Luka", "Ivan"],
  vozackaDozvola: true,
  //Ne možemo spremati rezultat izvođenja funkcije kao vrijednost objekta. Svaka funkcija koja se veže uz objekt se naziva object method.
  penzija: function () {
    this.godineDoPenzije = 65 - this.godina;
    return this.godineDoPenzije;
  },
  login() {
    console.log(this.ime, "je logiran");
  },
  logout() {
    console.log(this.ime, "se odlogirao");
  },
};

/* console.table(igor); */

console.log(igor.penzija());
console.log(igor.penzija());
console.log(igor.penzija());
console.log(igor.penzija());
console.log(igor.penzija());

console.table(igor);
