/* Zadatak 1

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.

Napravite Listu koja će koristiti testne podatke dolje.

Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste
dobili koristeći funkciju za izračun napojnica (ona prva gore).

Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).

Tip : svaka lista treba vrijednosti na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možete samo nazvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti napojnice u posebne
varijable prvo nego direktno u novu listu

testni podaci:

račun 125
račun 555
račun 44
 */

const racuni = [125, 555, 44];

const napojnica = (racun) => {
  return racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
};

const napojnice = [
  napojnica(racuni[0]),
  napojnica(racuni[1]),
  napojnica(racuni[2]),
];

console.log(napojnice);

const total = [
  racuni[0] + napojnice[0],
  racuni[1] + napojnice[1],
  racuni[2] + napojnice[2],
];

console.log(total);
