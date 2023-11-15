"use strict";

// Primjer kako bi sa funkcijskim pristupom kreirali objekte

/* function auto(vrsta, model, godina) {
  this.vrsta = vrsta;
  this.model = model;
  this.godina = godina;
}

const auto1 = new auto("BMW", "M5", 2013);
const auto2 = new auto("Mercedes", "CLK", 2015);

console.log(auto1, auto2); */

/* Klase su u JS ubačene sa verzijom ES6 (2015). One su sintaktička zamjena za prototip objektno-nasljeđivačkog modela koji se upotrebljava
u JS-u. Drugim riječima one nisu klase kao u drugim programskim jezicima, ali krajnji rezutat je isti. Njihova ideja je da budu predložak
za kreiranje objekata. Taj predložak može imati definirane elemente npr. možemo definirati da će klasa pružati polje za određene vrijednosti,
ali će samo objekti koji će u biti, biti instance te klase sadržavati vrijednosti tog specifičnog objekta.
Klasama ime definiramo prvim velikim slovom. Unutar klase ćemo imati constructor funkciju koja će se pozivati svaki put kada se kreira objekt
i putem koje ćemo proslijeđivati parametre. Sami constructor će potom kreirati elemente koja su definirana unutar njega.

Logiran i odlogiran su funkcije točnije metode klase i one se ne postavljaju u samom konstruktoru nego ispod njega. Te metode će nam biti
dostupne u prototipu objekta.*/

class Auto {
  constructor(vrsta, model, godina) {
    this.vrsta = vrsta;
    this.model = model;
    this.godina = godina;
  }
}

const auto1 = new Auto("BMW", "M5", 2013);
const auto2 = new Auto("Mercedes", "CLK", 2015);

console.log(auto1, auto2);

class User {
  constructor(ime, prezime, godine) {
    this.ime = ime;
    this.prezime = prezime;
    this.godine = godine;
    this.provjera = false;
  }
  logiran() {
    this.provjera = true;
    console.log(this.ime, "se logirao", this.provjera);
    return this;
  }
  odlogiran() {
    this.provjera = false;
    console.log(this.prezime, "se odlogirao", this.provjera);
    return this;
  }
}

const user1 = new User("Igor", "Jevremović", 40);
const user2 = new User("Ivan", "Ivanović", 39);

console.log(user1, user2);

/* Method chaining - ideja je da spojimo više metoda koje se izvršavaju u slijedu kako su napisane. Kako bi ovo funkcioniralo, moramo postaviti
parametar u konstruktoru koji će pratiti stanje logiranosti i za početnu vrijednost nećemo ostaviti mogućnost unosa putem parametra nego ćemo
postaviti defaultnu vrijednost false, što će nam predstavljati da osoba nije logirana. Promjenu ćemo složiti prilikom pokretanja metode i
ovisno koju metodu smo pozvali promjena će biti na true/false. Na kraju će nam ostati problem da nam objekt nema vrijednost nakon što se
pozove prva metoda u lancu, stoga tu vrijednost moramo definirati na kraju svake metode koju pozove i jednostavno ćemo returnati sami objekt. */
user1.logiran().odlogiran();
user2.logiran();

let listaUsera = [];
listaUsera.push(user1, user2);
console.log(listaUsera);
