const imaVozackuDozvolu = true;
const dobarVid = false;

// "I" operator - &&

console.log(imaVozackuDozvolu && dobarVid);

// "Ili" operator - ||

console.log(imaVozackuDozvolu || dobarVid);

// Not operator - !

console.log(!imaVozackuDozvolu);

const mozeVoziti = imaVozackuDozvolu && dobarVid;
console.log(mozeVoziti);

if (mozeVoziti) {
  console.log("Osoba može voziti");
} else {
  console.log("Osoba ne može voziti");
}

const umoran = false;

if (imaVozackuDozvolu || (dobarVid && umoran)) {
  console.log("U stanju ste voziti");
} else {
  console.log("Niste u stanju voziti");
}

/* Nulti operator spajanja (Nullish coalesing operator) - ??.
Logički operator koji će vratiti operand sa desne strane samo ako je sa lijeve strane operand null ili undefined,
inače će uvijek zapisati vrijednost lijevog operanda. Za razliku od truthy i falsy usporedbe koji neće vratit 0 i prazan string
*/

let nullish;

nullish = 10 ?? 20;
nullish = "lijeva" ?? "desna";
nullish = "" ?? "desna";
nullish = null ?? "desna";
nullish = undefined ?? "desna undefined";
nullish = false ?? true;
console.log(nullish);
