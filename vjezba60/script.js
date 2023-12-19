"use strict";

/* GETers and SETers :
Geters nam služe da dohvatimo svojstvo iz klase (metodu koja se već odvrtila)
Seters nam služe da promijenimo svojstvo iz klase (na način da ga mijenjamo svojstvo iz klase van klase)
Geterse definiramo ključnom riječi get, a seterse sa ključnom riječi set..

Statične metode u klasama:
Možete ih gledati kao pomoćne funkcije koje vam mogu odraditi određene provjere...
Kada pozivamo statične metode iz klasa, onda zovemo statičnu metodu direktno na klasi.

*/

class User {
  constructor(id, ime, prezime) {
    this.id = id;
    this.ime = ime;
    this.prezime = prezime;
  }

  get punoIme() {
    return `${this.ime} ${this.prezime}`;
  }

  set punoIme(input) {
    const razdvojiInput = input.split(" ");
    console.log(razdvojiInput);
    this.ime = razdvojiInput[0];
    this.prezime = razdvojiInput[1];
  }

  static provjera(x, y) {
    return x.ime === y.ime && x.prezime === y.prezime;
  }
}

const user1 = new User(1, "Ivan", "Ivić");
console.log(user1);
console.log(user1.punoIme);
user1.punoIme = "Vedran Vedrić";

const user2 = new User(2, "Matija", "Matić");

console.log(user1.ime);
console.log(user2.ime);

console.log(User.provjera(user1, user2));
