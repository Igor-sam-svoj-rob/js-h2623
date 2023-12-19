"use strict";

/* Ponavljanje JS principa izvođenja koda

Funkcije su kod koji se definira i koji se može pokrenuti pozivanjem te funkcije na egzekuciju. U memoriji spremamo podatke, pritom imamo
globalnu memoriju ali imamo i lokalnu memoriju. S obzirom da je JS jednosmjerni/jedno"nitni" programski jezik što znači u prijevodu da se 
može odrađivati tak po task (nema multitaskanja). Kada se nešto treba odvriti od funkcija, funkcija koja kreće u egzekuciju se postavlja
na svoju nit izvršenja (thread of execution) i onda kreira lokalnu memoriju koja sadržava sve ono što funkcija treba da bi se odvrtila.

Sve ono što se nalazi u globalnom scopeu ima globalnu memoriju a prostor u kojem se naš kod vrti se zove globalni execution context.
Priča kreće sa našeg Call Stacka gdje naš interperter (koji je isto program) prati izvođenje i redoslijed izvođenja naših funkcija/zadataka.

Kada se funkcija pozove na izvršavanje, taj novi zadatak se pusha(ubacuje) na call stack i kada se funkcija odvrti zadatak se popa(briše)
sa call stacka (jer JS ima ugrađeni Garbage Collector koji će to odraditi umjesto nas tako da mi ne moramo čistiti memoriju). I ta cijela
priča se vrti po LIFO principu (Last-in-First-Out).
*/

const user1 = {
  id: 1,
  ime: "Ivan",
  povecaj() {
    this.id++;
  },
};

/* Što će se dogoditi kada pozovemo objektnu metodu na globalnom scopeu na izvršavanje?
Zadatak će se pozvati na Call Stack i kreirat će svoj Thread of Execution, koji će kreirati Local execution context ili
function execution context. I u tom LEC-u će imati svoju lokalnu memoriju, odvriti će ono što treba i kao return pushati/vratiti vrijednost
u call stack i onda će se funkcija popati/obrisati sa call stacka. 

*/
console.log(user1);
user1.povecaj();
console.log(user1);

// podsjetimo se i drugih načina kreiranja objekata

// drugi način

const user2 = {};

user2.id = 2;
user2.ime = "Mario";
user2.povecaj = () => {
  this.id++;
};

console.log(user2);

// treći način

const user3 = Object.create(null);

user3.id = 3;
user3.ime = "Marijana";
user3.povecaj = () => {
  this.id++;
};

console.log(user3);

// Kreiranje pomoću konstruktor funkcije

/* function KreirajUsera(id, ime) {
  this.id = id;
  this.ime = ime;
}

KreirajUsera.prototype.povecaj = function () {
  this.id++;
};

KreirajUsera.prototype.login = function () {
  console.log(`${this.ime} se logirao.`);
};

const user4 = new KreirajUsera(4, "Stjepan");
const user5 = new KreirajUsera(5, "Vlatka");
const user6 = new KreirajUsera(6, "Andreja");

console.log(user4, user5, user6); */

//------------------------------------------------------------------------------

// Idemo ovo pretvoriti u Klasu

/* Klase su predlošci za izradu objekata. Taj predložak može imati definirane stvari npr. možemo definirati da će klasa pružati polje za
određene vrijednosti, ali će sami objekti koji će biti instance te klase sadržavati vrijednost koje definiramo za taj specifičan objekt.
Klasa ima konstruktor funkciju koja se poziva svaki put kada se kreira novi objekt i on će zaprimati parametre. Constructor kreira polje
unutar objekta i daje mu pripadajuću vrijednost koju smo definirali prilikom kreiranja novog objekta, ali naravno može sadržavati i 
vrijednosti koje ne dolaze putem parametra nego su definirane za svaki objekt kojeg napravi taj predložak... */

class KreirajUsera {
  constructor(id, ime) {
    this.id = id;
    this.ime = ime;
  }
  povecaj() {
    this.id++;
    return this;
  }
  login() {
    console.log(`${this.ime} se logirao.`);
    return this;
  }
}

const user4 = new KreirajUsera(4, "Stjepan");
const user5 = new KreirajUsera(5, "Vlatka");
const user6 = new KreirajUsera(6, "Andreja");

console.log(user4, user5, user6);
let listaUsera = [];
listaUsera.push(user4, user5, user6);
console.log(listaUsera);

/* Idemo napraviti klasu Admin koja će imati sve ono što ima i klasa KreirajUsera ali će ona recimo imati metodu koja će obrisati usera
iz liste usera. Inače ovaj koncept se zove naslijeđivanje u klasama. */

class Admin extends KreirajUsera {
  obrisiUsera(user_iz_parametra) {
    listaUsera = listaUsera.filter((user_iz_liste) => {
      return user_iz_liste.ime != user_iz_parametra.ime;
    });
  }
}

const admin = new Admin(7, "Admin");

admin.obrisiUsera(user4);

console.log(listaUsera);
