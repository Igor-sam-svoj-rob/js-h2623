/* Vrste varijabli - const, let, var */

const js = "JS je super";
console.log(js);
console.log("Jesen je");
console.log(55);
console.log(20 + 8 + 5 - 10);

let vary = 10;
vary = 5;
console.log(vary);

var varx = 5;
var varx = 6;
console.log(varx);

/* Varijable ne mogu početi sa brojem, ali mogu sadržavati broj, slova, donju crtu i dolar znak.
Također postoje rezervirane riječi koje se koriste u JS-u i one ne smiju biti korištene prilikom imenovanja varijable.
(function, new...) */

/* Vrste vrijednosti varijabli */

// String (tekstualna sekvenca, uvijek se stavlja unutar kvačica)
const imePrezime = "Igor Jevremović";

// Brojevi
const dob = 40;

//Boolean može biti samo true ili false
const polaznik = true;

console.log(polaznik);

//Undefined označavamo npr. varijablu koju smo deklarirali ali nismo još dali vrijednost

let brojPrisutnih;

//Null je isto kao i undefined prazna vrijednost, ali je ipak definirana kao null, a ne undefined

// Ako želimo provjeriti tip vrijednosti, možemo to napraviti sa spec. operaterom typeof

console.log(typeof true);
console.log(typeof imePrezime);
console.log(typeof "Igor");
console.log(typeof 55);
console.log(typeof brojPrisutnih);

brojPrisutnih = 19;
console.log(brojPrisutnih);
console.log(typeof brojPrisutnih);

console.log(typeof null);

const stilovi = "padding:10px; background-color:#fff; color:red;";
console.log("%cPozdrav", stilovi);

/* Matematički operatori */

const godinaStarostiJosip = 2023 - 1991;
const godinaStarostiMarko = 2023 - 1986;

console.log(godinaStarostiJosip, godinaStarostiMarko);

const starost = 2023;
const godinaStarostiIvan = starost - 1987;
const godinaStarostiMaja = starost - 1984;
console.log(godinaStarostiIvan, godinaStarostiMaja);
console.log(godinaStarostiMarko * 2, godinaStarostiJosip / 10);

/* Idemo spojiti 2 varijable */

const ime = "Hrvoje";
const prezime = "Horvat";

console.log(ime + " " + prezime);

let x = 10 + 5;
x += 10; // kao da smo napisali x = x + 10;
x *= 4; // kao da smo napisali x = x * 4;
x++; // uvećanje za 1
x--; // umanjenje za 1
console.log(x);

/* Usporedni operatori */

console.log(godinaStarostiIvan > godinaStarostiJosip); // postoji >, <, >=, <=
console.log(godinaStarostiMaja >= 18);

const punoljetan = godinaStarostiMarko >= 18;
console.log(punoljetan);

/* Primjer */

const izracun = 65;
const darko = izracun - 60;
const stefica = izracun - 55;

/* Definiranje više undefined varijabli */
let a, b, c;

a = b = 25 - 10 - 5;

console.log(a, b);

/* Zadatak 1 : definirajte 3 varijable, 1 će sadržavati ime zemlje, druga varijabla kontinenta, treća varijabla jezik sa
određenom pripadajućom vrijednosti. */

const imeZemlje = "Hrvatska";
const imeKontinenta = "Europa";
const jezik = "hrvatski";
const populacija = 3.8e6;

/* Zadatak 2 : definirajte varijablu za broj rijeka kao undefined i definirajte sa Boolean vrijednosti da li smo otok ili nismo */
let rijekaNum;
const otok = false;

console.log(imeZemlje, imeKontinenta, jezik, populacija, rijekaNum, otok);

/* Zadatak 3 : podijelite sa 3 populaciju i zapišite u varijablu trecinaStanovnistva */

let trecinaStanovnistva = populacija / 3;
console.log(trecinaStanovnistva);

/* Zadatak 4 : uvećajte brojku za 1 */

trecinaStanovnistva++;

const slovenija = 2.0e6;

/* Zadatak 5 : sa usporednim operaterom provjerite imamo li više stanovnika od Slovenije */

console.log(populacija > slovenija);

/* Zadatak 6 : Probajte iskoristiti postojeće varijable kako bi ispisali rečenicu : Hrvatska ima 3.8e6 stanovnika i pričamo hrvatski */

console.log(
  imeZemlje + " ima " + populacija + " stanovnika i pricamo " + jezik
);

// Isti ispis koristeći tzv. Template Literal način ispisa

console.log(`${imeZemlje} ima ${populacija} stanovnika i pricamo ${jezik}`);

console.log(`
Više
linija
ima
ovaj
konzol log`);

console.log(
  "Više\n\
    linija\n\
    ima\n\
    ovaj\n\
    konzol log"
);

const h = "Hello World";
x = h.length;
console.log(x);

/* Postoje svojstva i metode (properties and methods) na stringovima, svojstva su vam više kao atributi i tu se ne dodaju zagrade. Dok kod
metode na stringovima dodajemo zagrade jer su one funkcije */

/* Matematičke metode sa brojevima i varijablama */

let y;

//korijen broja
y = Math.sqrt(16);

//absolutna vrijednost
y = Math.abs(-5);

//Zaokruživanje
y = Math.round(5.4);

//Prisilno zaokruživanje na više
y = Math.ceil(5.1);

//Prisilno zaokruživanje na manje
y = Math.floor(5.9);

//Uklanjanje decimalnih vrijednosti
y = Math.trunc(5.6);

//Najmanji broj iz niza brojeva
y = Math.min(2, 5, 6, 7, 1);

//Najveći broj iz niza brojeva
y = Math.max(2, 7, 5, 6, 1);

//Random broj
y = Math.random() * 10;

//Random broj od 1-10
y = Math.trunc(Math.random() * 10 + 1);
y = Math.floor(Math.random() * 10 + 1);

console.log(y);
