/* Zadatak 1

Imamo listu album koja sadrži objekt. Napravi novi objekt (vama po izboru kako će izgledati)
i dodaj ga u listu album kao drugog člana liste (naravno isto kao objekt).

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
]; */

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const album2 = {
  umjetnik: "Prodigy",
  naslov: "Experience",
  godina: 1992,
  format: ["Kaseta", "CD"],
};

album.push(album2);
console.log(album);

/* Zadatak 2

Idemo opet do Marka i Josipa i njihovog ITM-a.
Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije.
Zapamtite ITM = masa/visina ** 2

Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina.
Kreiraj calcITM metodu u svakom objektu koja će izračunati ITM (ista metoda na oba).

Spremi ITM izračun u vrijednost objekta i vrati ga iz metode (return).

Ime logiraj u konzolu tko ima viši ITM, skupa sa imenom i ITM vrijednosti.

NPR: Josipov ITM (28.3) je veći od Markovog (23.9)!

Test data: 
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm */

const marko = {
  ime: "Marko",
  tezina: 78,
  visina: 1.69,
  calcITM() {
    this.itm = this.tezina / this.visina ** 2;
    return this.itm;
  },
};

const josip = {
  ime: "Josip",
  tezina: 92,
  visina: 1.95,
  calcITM() {
    this.itm = this.tezina / this.visina ** 2;
    return this.itm;
  },
};

marko.calcITM();
josip.calcITM();

console.log(marko.itm, josip.itm);

if (marko.itm > josip.itm) {
  console.log(
    `Markov ITM od ${marko.itm} veći je od Josipovog ITM-a od ${josip.itm}`
  );
} else if (josip.itm > marko.itm) {
  console.log(
    `${josip.ime} ITM od ${josip.itm} veći je od ${marko.ime}ovog ITM-a od ${marko.itm}`
  );
} else {
  console.log(`${marko.ime} i ${josip.itm} imaju isti ITM`);
}

/* Zadatak 3

Imamo 2 liste, listu računa i listu napojnica. 
Trebamo koristeći funkciju i for petlju napraviti izračun sume članova obje liste 
(prvi član prve liste sa prvim članom druge liste, i tako član po član).

Rezultat trebamo zapisati u novu listu koju možemo nazvati total.

hint 1 : članove obje liste u funkciju ubacite putem pripadajućih parametara.
hint 2 : Postavite početno stanje izračuna (varijabla total) na [] i onda for petljom povećavali vrijednost total varijable.
hint 3 : Prođite for petljom članove obje liste i zbrojite ih, te koristeći push metodu ubacite u novu listu. */

function suma(racuni, napojnice) {
  let total = [];

  for (let i = 0; i < racuni.length; i++) {
    const zbroj = racuni[i] + napojnice[i];
    total.push(zbroj);
  }

  return total;
}

const racuni = [155, 40, 140];
const napojnice = [25, 10, 20];

const x = suma(racuni, napojnice);
console.log(x);

/* Izračun sume računa i napojnica */

function suma2(...izracun) {
  let total = 0;

  for (let broj of izracun) {
    total = total + broj;
  }

  return total;
}

const racuni2 = suma2(155, 40, 140);
const napojnice2 = suma2(25, 10, 20);

console.log(racuni2, napojnice2);
