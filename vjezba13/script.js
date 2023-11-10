/* IIFE - Immediately Invoked Function Expression - funkcija koja će se odmah izvršiti nakon što se definira. */
"use strict";

/* IIFE funkcija se definira tako da se postavlja unutar okruglih zagrada, i na kraju se i pokreće sa još jednim zagradama. */

(function () {
  const user = "Igor";
  console.log(user);
})();

//IIFE funkcija sa parametrom

(function (x) {
  console.log(`broj ${x}`);
})(5);

//Možete i napisati običnu funkciju unutar IIFE funkcije i pokrenuti na normalan način

(function () {
  const z = 5;
  console.log(z);
  const ifi = () => console.log("Ovo dolazi iz IIFE funkcije");
  ifi();
})();
