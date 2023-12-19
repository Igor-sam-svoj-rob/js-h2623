console.log("exportiranje modula");

export let kosarica = [];

export const dodajKosarica = function (proizvod, kolicina) {
  kosarica.push({ proizvod, kolicina });
  console.log(`${kolicina} ${proizvod} je dodano u košaricu`);
};
