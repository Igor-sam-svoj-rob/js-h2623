"use strict";

let x;

// dohvaćanje datuma i spremanje u varijablu. Date je objekt.
x = new Date();
console.log(x, typeof x);

// po potrebi ga se naravno može pretvoriti u string.
x = x.toString();
console.log(x, typeof x);

x = new Date("2023-11-11T20:00:00");
let y = new Date("11/11/2023 20:00:00");

console.log(x, typeof x);
console.log(y, typeof y);

/* Ovo će dati timestamp koji se mjeri u milisekundama od 1.1.1970. */
y = y.getTime();
console.log(y, typeof y);

// napravit ćemo varijablu z i u nju zapisati objekt Date
let z = new Date();

// uz pomoć varijable z ćemo izvući godinu i zapisati u varijablu x
x = z.getFullYear();
console.log(x, typeof x);

// uz pomoć varijable z možemo izvući i mjesece i zapisati u varijablu x
x = z.getMonth() + 1;
console.log(x, typeof x);

// ako želimo samo dan - dan kreće od nedjelje (nedjelja 0, a subota je 6)
x = z.getDay();
console.log(x, typeof x);

x = z.getHours();
console.log(x, typeof x);

x = Intl.DateTimeFormat("hr-HR").format(z);
console.log(x);
