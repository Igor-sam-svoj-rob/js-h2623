"use strict";

/* Idemo napraviti funkciju unutar funkcije. Za return vanjske funkcije ćemo postaviti cijelu unutarnju funkciju i nećemo ju pokrenuti.
Onda ćemo definirati varijablu unutar koje ćemo zapisati kompletnu unutarnju funkciju i nakon toga ju možemo pokrenuti sa parametrom i zapisati
u varijablu. */

/* function vanjskaFunkcija() {
  function pomnoziFunkcija(broj) {
    return broj * 2;
  }
  return pomnoziFunkcija;
}

const suma = vanjskaFunkcija();
console.log(suma);
const rezultat = suma(5);
console.log(rezultat); */

// -------------------------------------------------------------------

/* Ovisno o tome gdje smo definirali našu funkciju odlučujemo koje varijable su dostupne kada pozovemo funkciju. Koristeći closure,
ova varijabla brojac i njena vrijednost su zapisani u definiciji varijable i vrijednost ove varijable brojac će ostati memorirana u 
definiciji te funkcije. Naša vanjskaFunkcija će u biti zahvaljujući ovom pristupu imati malu cache memoriju u kojoj je to zapisano. */
function vanjskaFunkcija() {
  let brojac = 0;
  function suma() {
    brojac++;
    console.log(brojac);
  }
  return suma;
}

const brojacVarijabla = vanjskaFunkcija();
console.log(brojacVarijabla);
brojacVarijabla();
console.log(vanjskaFunkcija);
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();

// ---------------------------------------------------------------------

function dodaj(vanjskiBroj) {
  function unutarnja(unutarnjiBroj) {
    return vanjskiBroj + unutarnjiBroj;
  }
  return unutarnja;
}

const zbroj = dodaj(10);
console.log(zbroj(5));
