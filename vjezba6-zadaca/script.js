/* 

Zadatak 1

 Izračunaj ITM (Indeks tjelesne mase) Marka i Josipa, ispiši ih i provjeri boolean vrijednost true/false jel Markov ItM veći od Josipovog.

  računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)
  test podaci 1 Marko je težak 78 kg i visok 1.69, Josip 92 kg i 1.95
  test podaci 2 Marko je težak 95 kg i visok 1.88,  Josip 85 kg i 1.76

*/

const masaMarko = 78;
const visinaMarko = 1.69;

const masaJosip = 92;
const visinaJosip = 1.95;

const itmMarko = masaMarko / visinaMarko ** 2;
const itmJosip = masaJosip / visinaJosip ** 2;

console.log(itmMarko, itmJosip);

const itmMarkoVeci = itmMarko > itmJosip;

console.log(itmMarkoVeci);

/* 

Zadatak 2

Napraviti 2 varijable (1 sa random brojem 1-100, druga 1-50).
Napravi varijable koje će sadržavati sumu i razliku ta 2 broja i to zapiši putem template literala u varijable suma i razlika.

*/

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

console.log(x, y);

const suma = x + y;
const razlika = x - y;

console.log(`Suma je ${suma}, a razlika je ${razlika}.`);

/* 

Zadatak 3

provjeri ITM (Indeks tjelesne mase) Marka i Josipa i utvrdi čiji je veći.
Neka piše Markov koeficijent mase je veći od Josipovog koeficijenta mase ili Josipov koeficijent mase je veći od Markovog koeficijenta mase.
Koristite test podatke iz prvog zadatka, if else pristup i template string za console.log.

*/

if (itmMarko > itmJosip) {
  console.log(`Markov koeficijent mase je veći od Josipovog koeficijenta mase`);
} else {
  console.log(`Josipov koeficijent mase je veći od Markovog koeficijenta mase`);
}

/* 

Logical operators zadatak - zamislimo da želimo živjeti u zemlji u kojoj se priča engleski, koja ima manje od 50 m stanovnika i koja nije otok.
Utvrdi da li Hrvatska ispunjava te uvjete i ako da ispiši : "Zemlja u kojoj želite živjeti je Hrvatska". Ako ne, onda ispiši : "Hrvatska nije za vas.".
Koristite logičke operatore i if else petlju za rješenje zadatka.

*/

const engleski = true;
const manjeOd50M = true;
const otok = true;
const hrvatska = false;

const uvjeti = engleski && manjeOd50M && otok;
const zelje = hrvatska && engleski && manjeOd50M && otok;

if (uvjeti === zelje) {
  console.log(`Zemlja u kojoj želite živjeti je Hrvatska`);
} else {
  console.log(`Hrvatska nije zemlja za vas.`);
}
