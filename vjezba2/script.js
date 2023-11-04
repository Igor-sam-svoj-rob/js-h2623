if (true) {
  console.log("Funkcioniram na istinitu tvrdnju");
}

if (false) {
  console.log("Ne funkcioniram na lažnu tvrdnju");
}

/* Idemo provjeriti da li je netko punoljetan i onda napraviti ispis */

const godina = 19;
const punoljetan = godina >= 18;

if (punoljetan) {
  console.log("Punoljetni ste, možete odselit od kuće");
}

if (godina >= 18) {
  console.log("Punoljetni ste, možete odselit od kuće");
}

/* Pisanje istog ovog if bloka iz prijašnjeg primjera, ali koristeći else varijaciju kako bi definirali
što će se dogoditi ako je tvrdnja neistinita */

const godinaManja = 15;

if (godinaManja >= 18) {
  console.log("Punoljetni ste");
} else {
  console.log(
    `Niste punoljetni, treba vam još ${
      18 - godinaManja
    } godine do punoljetnosti`
  );
}

/* Izračun za godinu rođenja */

const godRodjenja = 1999;
let stoljece;
console.log(stoljece);

if (godRodjenja >= 2000) {
  stoljece = 21;
} else {
  stoljece = 20;
}

console.log(stoljece);
