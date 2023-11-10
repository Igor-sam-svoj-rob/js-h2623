"use strict";

/* 

Arrow funkcije su skraćeni način pisanja regularne funkcije, možemo ju napisati kao one-liner kada se radi o izuzetno jednostavnoj funkciji.
Kod arrow funkcija se taj izraz funkcija (function expression) događa implicitno dok se kod regularnih funkcija događa eksplicitno (moramo
napisati return...)

Razlike između obične i arrow funkcija:

Obična funkcija 

function imeFunkcije(parametri){ kod }

---------------------------------------
Arrow funkcija

const imeFunkcije = (parametri) => { kod }

Razlike koje će se kasnije ukazati;

Obična funkcija ima vlastitu vezu sa "this", dok Arrow funkcija nasljeđuje this iz okolnog opsega.
Obična funkcija može koristiti konstruktor sa ključnom riječi new, dok arrow funkcija ne može koristiti konstruktor.
Obična funkcija može koristiti super za poziv metoda roditeljske klase, dok arrow funkcija ne može.
Obična funkcija ima prototype svojstvo koje se koristi za nasljeđivanje, dok arrow nema prototype svojstvo.

Obična funkcija se može pozvati prije nego je deklarirana (hoisting), dok arrow funkciju ne možete.

*/

hoistedFunction();

function hoistedFunction() {
  console.log("pozz");
}

/* arrowFunction(); */

const arrowFunction = () => {
  console.log("pozz");
};

const starost = function (godinaRodjenja) {
  return 2023 - godinaRodjenja;
};

/* Još jedna prednost koju smo već naveli, ne mora se koristiti zagrada niti return kada se radi o one-liner funkciji. */
const rodjen = (godinaRodjenja) => 2023 - godinaRodjenja;

const zapis = rodjen(1988);
console.log(zapis);

const godineDoMirovine = (godinaRodjenja, imePrezime) => {
  const godine = 2022 - godinaRodjenja;
  const mirovina = 65 - godine;
  if (mirovina > 0) {
    console.log(`${imePrezime} će se umiroviti tek za ${mirovina} godina`);
    return mirovina;
  } else {
    console.log(`${imePrezime} je u mirovini`);
    return -1;
  }
};

godineDoMirovine(1988, "Igor");
godineDoMirovine(1950, "Andrija");
