const objekt = require("./testovi");

test("Zbroji 2 + 2 da budu 4", () => {
  expect(objekt.suma(2, 2)).toBe(4);
});

test("2 + 2 nisu 5", () => {
  expect(objekt.suma(2, 2)).not.toBe(5);
});

test("trebali bi dobiti null", () => {
  expect(objekt.isNull()).toBeNull();
});

test("hoće li ovo biti truthy ili falsy", () => {
  expect(objekt.provjeri(null)).toBeFalsy();
});

test("Provjera osobe u kreiraj funkciji", () => {
  expect(objekt.kreiraj()).toEqual({
    ime: "Igor",
    prezime: "Jevremović",
  });
});

// testovi koji su samodostantni...

test("Treba biti rezultat manji od 10", () => {
  const a = 3;
  const b = 4;
  expect(a + b).toBeLessThan(10);
});

test("Igor mora biti u listi", () => {
  listaImena = ["Ivana", "Igor", "Marija"];
  expect(listaImena).toContain("Igor");
});

test("Korisnik mora biti Leanne", async () => {
  expect.assertions(1);
  const data = await objekt.fetchOsoba();
  expect(data.name).toEqual("Leanne Graham");
});
