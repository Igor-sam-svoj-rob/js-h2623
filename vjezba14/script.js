"use strict";

const listaPrijatelja = ["Andrija", "Marko", "Pero", "Ivan", "Stjepan"];

console.log(listaPrijatelja);

const godine = new Array(2001, 2002, 2003, 2004, 2005);
console.log(godine);

console.log(listaPrijatelja.length, godine.length);

console.log(godine[0]);
console.log(godine[1]);
console.log(godine[2]);

/* Dohvaćanje vrijednosti člana liste a ne znamo kolko članova liste imamo. */
console.log(listaPrijatelja[listaPrijatelja.length - 2]);

/* Jednostavan način za zamjenu vrijednosti člana liste. Možemo mijenjati vrijednosti članova liste, jer
liste nisu primitivne vrijednosti a nepromijenjivost vrijednosti consta vrijedi samo za primitivne vrijednosti. */
listaPrijatelja[1] = "Jura";
console.log(listaPrijatelja);

/* Ne možemo redefinirati listu */
/* listaPrijatelja = ["Franjo"] */

godine.unshift(2000); // unshift metoda dodaje vrijednost na početak liste
godine.push(2004); // push metoda dodaje vrijednost na kraj liste
console.log(godine);
godine.shift(); // shift metoda uklanja prvog člana liste
godine.pop(); // pop metoda uklanja zadnjeg člana liste
godine.reverse(); // mijenjamo slijed liste sa reverse
console.log(godine);

let provjera;

provjera = godine.includes(2001); // includes provjerava da li imamo određenu vrijednost u listi
provjera = godine.indexOf(2001); // indexOf provjerava na kojem mjestu u listi se nalazi tražena vrijednost
provjera = godine.slice(1); // slice briše članove liste sa lijeve strane i to toliko koliko smo proslijedili kroz parametar
provjera = godine.splice(2, 4); // splice iz postojeće liste uzima članove od/do kako smo naveli u parametrima i stvara novu listu od tih članova

console.log(godine);
console.log(provjera);
