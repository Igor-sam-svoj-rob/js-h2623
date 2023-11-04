/* Konverzija - conversion */

let inputGodina = "1991";
console.log(inputGodina + 18);

/* Konverzija stringa u broj */

//1 način
/* inputGodina = parseInt(inputGodina); */

//2 način
/* inputGodina = Number(inputGodina); */

//3 način
inputGodina = +inputGodina;

console.log(inputGodina + 18);

/* Konverzija broja u string */

inputGodina = String(inputGodina);
console.log(inputGodina + 18);

/* Recimo da je broj decimalni */
let decBroj = "10.9";

// ParseInt metoda će zaokružiti decimalni broj na manje
/* decBroj = parseInt(decBroj);
console.log(decBroj); */

//ParseFloat metoda uspješno prebacuje decimalni broj iz stringa u broj
decBroj = parseFloat(decBroj);
console.log(decBroj);

console.log(Number("Algebra"));

/* Prisilna konverzija - coersion */

console.log("Ja imam " + 30 + " godina");
console.log("Ja imam " + String(30) + " godina");

console.log("23" + "10" + 3);
console.log("23" + "10" - 3);
console.log("23" - "10" - 3);
console.log("23" - "10" + 3);

console.log(5 + true);
console.log(5 + false);
console.log(5 + undefined);

console.log("23" * "2");
console.log("40" / "2");

let n = "1" + 1;
console.log(n);

n = n - 1;
console.log(n);

let m = 2 + 3 + 4 + "5";
console.log(m);

let b = "10" - "4" - "3" - 2 + "5";
console.log(b);
