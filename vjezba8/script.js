"use strict";
/* Strict je sigurniji način pisanja koda, lakše će te izbjeći greške. Strict mode neće dozvoliti neke banalne greške, javljat će
greške, koje inače JS po defaultu ne bi prijavila. */

let imaVozackuDozvolu = false;
const prosaoVozackiIspit = true;

if (prosaoVozackiIspit) {
  imaVozackuDozvol = true;
  console.log(imaVozackuDozvolu);
}

const private = 3433;

/* 

3 + 4 = 7 - ovo je expression jer daje određenu vrijednost.
55 je također expresion jer daje određenu vrijednost.
true && false && !false je također expression jer daje određenu vrijednost.

if-else i switch su deklaracije (statement) i oni u biti nisu izrazi (expressioni) jer ne proizvode vrijednost.
Deklaracije su kao kompletne rečenice, a izrazi su riječi koje čine rečenicu.
 
*/

const godine = 15;

if (godine >= 18) {
  console.log("punoljetni ste");
} else {
  console.log("niste punoljetni");
}

/* 

Ternary (trojni) operator (možemo ga smatrati drugačijim načinom pisanja if-else petlje).
Možete zamisliti da vam je ? isto što i "if" upit, gdje ćemo prvo sa lijeve strane upitnika definirati upit,
a sa desne strane će se prvo definirati što će se zapisati(tj. odvrtiti) ako je upit istinit, a ono
što dolazi nakon dvotočke će se zapisati(tj.odvrtiti) ako je upit neistinit.

*/

godine >= 18 ? console.log("punoljetni ste") : console.log("niste punoljetni");

const punoljetan = godine >= 18 ? "punoljetni ste" : "niste punoljetni";

console.log(punoljetan);

// Ista stvar koristeći if-else

let punoljetan2;

if (godine >= 18) {
  punoljetan2 = "punoljetni ste";
} else {
  punoljetan2 = "niste punoljetni";
}

console.log(punoljetan2);

console.log(
  `Da li ste punoljetni? ${
    godine >= 18 ? "punoljetni ste" : "niste punoljetni"
  }`
);

/* Primjer sa autorizacijom */

const auth = true;
let redirect;

if (auth) {
  alert("Autorizacija je prošla");
  redirect = "/dashboard";
} else {
  alert("Autorizacija nije prošla");
  redirect = "/login";
}

console.log(redirect);

redirect = auth
  ? (alert("Autorizacija je prošla"), "/dashboard")
  : (alert("Autorizacija nije prošla"), "/login");

console.log(redirect);
