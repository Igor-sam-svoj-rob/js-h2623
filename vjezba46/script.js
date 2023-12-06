"use strict";

/* 
PROMISE - (Obećanje) je objekt koji će rezultirati jednom vrijednosti koja može biti rješena ili nerješena (odbačena.) 
Sastoji se od egzekutor funkcije koja mora napraviti provjeru resolve (uspješno) ili reject (neuspješno).
Nakon toga za svaku od ta 2 odgovora imamo metode koje pozivamo kako bi obradili response koji dobijemo. Ako je uspješno, onda
pozivamo .then metodu za taj slučaj, ako je neuspješno pozivamo .catch metodu i definiramo što će se ispisati.
*/

// Kreiranje promisa/obećanja

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async zadatak je rješen");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("promise je rješen");
});

console.log("Pozz iz global scopea");

// isto ovo napisano kao anonimna funkcija

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "Igor", prezime: "Jevremović" });
  }, 1000);
}).then((osoba) =>
  console.log(`Moje ime je ${osoba.ime} i prezime ${osoba.prezime}`)
);

// Idemo vidjeti još kako rješiti i reject (u nastavku i .catch metodu)

const dohvatiUsera = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;

    if (!greska) {
      resolve({ ime: "Igor", prezime: "Jevremović" });
    } else {
      reject("Nešto je pošlo po krivu");
    }
  }, 1000);
});

dohvatiUsera
  .then((osoba) => console.log(`${osoba.ime} ${osoba.prezime}`))
  .catch((error) => console.log(error))
  .finally(() => console.log("Ja se ispisujem bez obzira na response..."));

// Callback funkcija - primjer

/* const imena = [
  { ime: "Iva", prezime: "Ivić" },
  { ime: "Marko", prezime: "Markić" },
];

const kreirajIme = (ime, cb) => {
  setTimeout(() => {
    imena.push(ime);
    cb();
  }, 2000);
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const paragraf = document.createElement("p");
      paragraf.innerHTML = `<strong>${osoba.ime} ${osoba.prezime}</strong>`;
      document.querySelector("#imena").appendChild(paragraf);
    });
  }, 1000);
};

kreirajIme({ ime: "Jura", prezime: "Jurić" }, getImena); */

//------------------------------------------------------------------------------------

// Idemo izbaciti callback i ubaciti Promise

const imena = [
  { ime: "Iva", prezime: "Ivić" },
  { ime: "Marko", prezime: "Markić" },
];

const kreirajIme = (ime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;

      if (!error) {
        imena.push(ime);
        resolve();
      } else {
        reject("Nešto je pošlo po krivu");
      }
    }, 2000);
  });
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const paragraf = document.createElement("p");
      paragraf.innerHTML = `<strong>${osoba.ime} ${osoba.prezime}</strong>`;
      document.querySelector("#imena").appendChild(paragraf);
    });
  }, 1000);
};

const pokaziError = (error) => {
  const paragraf = document.createElement("p");
  paragraf.innerHTML = `<strong>${error}</strong>`;
  document.querySelector("#imena").appendChild(paragraf);
};

kreirajIme({ ime: "Jura", prezime: "Jurić" }).then(getImena).catch(pokaziError);

//------------------------------------------------------------------------------------

/* PROMISE CHAINING - recimo da trebamo napraviti nešto nakon što se odvrti prvi .then sa podacima koji su nam dostupni u toj prvoj iteraciji.
Taj prvi .then nam mora dati return i vrijednost zapisanu u tom returnu onda možemo koristiti u idućem .thenu kojeg ćemo jednostavno
nastaviti kao idući .then u lancu. To se u biti zove promise chaining i osigurava nam da podatke iz različitih izvora kao što se može
dogoditi kod callback hella koristimo puno bolje,efikasnije i preglednije...
*/

const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ ime: "Marko", prezime: "Markić" });
    } else {
      reject("Greška, nešto je pošlo po krivu");
    }
  }, 1000);
});

obecanje
  .then((korisnik) => {
    console.log(korisnik);
    return korisnik.ime;
  })
  .then((ime) => {
    console.log(ime);
    return ime.length;
  })
  .then((duzina) => {
    console.log(duzina);
  })
  .catch((error) => {
    console.log(error);
  });
