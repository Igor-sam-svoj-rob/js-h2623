"use strict";

/* Prvo moramo definirati funkciju. Ovo ispod se zove "defining a function" */

function logger() {
  console.log("Hello world");
}

/* Invoking / running / calling a function, executing a function */

logger();
logger();
logger();

/* 

Napravit ćemo funkciju koja će nam na temelju parametara i njihovih vrijednosti dati novu vrijednost. 
Npr. u ovom slučaju ćemo koristiti analogiju NutriBulleta gdje ćemo kao parametre ubaciti voće, funkcija
će obraditi to voće i vratit će nam sok.

*/

const sokOdNarance = nutriBullet(4, 7);
console.log(sokOdNarance);

// unutar zagrada stavljamo parametre funkcije, u ovom slučaju su nam jabuke i narance parametri.
function nutriBullet(jabuke, narance) {
  console.log(jabuke, narance);
  const sok = `Sok od ${jabuke} jabuka i ${narance} naranče`;
  return sok; //return završava izvršavanje funkcije i specificira vrijednost koju funkcija vraća.
  console.log("ovo se neće ispisati jer dolazi nakon returna");
}

nutriBullet(5, 2);
/* Prilikom pozivanja funkcije se u parametrima definiraju vrijednosti koje zamijenjuju parametre koje smo definirali
unutar funkcije. */

const sokOdJabuka = nutriBullet(7, 3);
console.log(sokOdJabuka);

/* VAŽNO - Kod deklaracije funkcije, moguće je napraviti pozivanje (invokanje) funkcije u redovima prije nego
smo napisali funkcijsku logiku, drugim riječima, možemo ju hoistat iznad funkcije i sve će raditi. */
