/* Zadatak 1

Recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (3840 lovaca), 
koliko iz Istre (brojLovaca2 = 500 lovaca) i koliko iz Dalmacije (brojLovaca3 = 1440 lovaca) */

const ukupno = 7900;
const brojLovaca1 = 3840;
const BrojLovaca2 = 500;
const BrojLovaca3 = 1440;

const postotakSH = (brojLovaca1 / ukupno) * 100;
const postotakI = (BrojLovaca2 / ukupno) * 100;
const postotakD = (BrojLovaca3 / ukupno) * 100;

console.log(postotakSH, postotakI, postotakD);

/* Zadatak 2

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`* */

const postotakSvijeta = function (populacija) {
  return (populacija / 10000) * 100;
};

const brojIgraca = function (zemlja, populacija) {
  const postotak = postotakSvijeta(populacija);
  const ispis = `${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`;
  console.log(ispis);
};

brojIgraca("Hrvatska", 10);
brojIgraca("Kina", 3441);
brojIgraca("USA", 332);

/* Zadatak 3

Imamo 2 tima, koji su igrali međusobno 6 puta. 
Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju. 
Tim pobjeđuje jedino ako ima duplo više golova od drugog tima u odnosu prosječnih golova.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka. 
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa 
sa ispisom prosjeka golova obje ekipe npr. Real je u prosjeku zabio 4 gola, a Barcelona 1.
Možete iskoristi if-else petlju kako bi složili ispis.

primjer 1: 
Barca : 2, 3, 1, 3, 4, 7
Real : 1, 4, 1, 5, 0, 5
primjer 2: 
1, 2, 1, 1, 3, 5
Real : 1, 1, 3, 0, 2, 4

hint: kako bi provjerili da li je jedan tim pobijedio drugi sa barem duplo bodova, 
možete napraviti provjeru koristeći formulu A >= B * 2. Primjenite to na prosječni rezultat */

const prosjekGolova = (a, b, c, d, e, f) => {
  return (a + b + c + d + e + f) / 6;
};

const prosjekBarca = prosjekGolova(2, 3, 1, 3, 4, 7);
const prosjekReal = prosjekGolova(1, 4, 1, 5, 0, 5);

console.log(prosjekBarca, prosjekReal);

const pobjednik = function (prosjekB, prosjekR) {
  if (prosjekB >= prosjekR * 2) {
    console.log(
      `Barca je u prosjeku zabila ${prosjekB}, a Real ${prosjekR} i Barca je pobijedila.`
    );
  } else if (prosjekR >= prosjekB * 2) {
    console.log(
      `Real je u prosjeku zabio ${prosjekR} a Barca ${prosjekB} i Real je pobijedio`
    );
  } else {
    console.log("Nema pobjednika");
  }
};

pobjednik(prosjekBarca, prosjekReal);
