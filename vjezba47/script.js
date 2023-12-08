"use strict";

/* Recimo da želimo povući informacije iz više izvora, koji se moraju učitati u ispravnom redoslijedu. Za to možemo koristiti callback
funkcije. Prvo ćemo napisati funkciju kojom ćemo definirati od kud i kako i što ćemo sa podacima. S time da ćemo definirati pokretanje
samog povezivanja putem setTimeout funkcije koja će se vremenski nasumično vrtiti. S obzirom da ne možemo inače biti sigurni u redoslijed
kojim će se podaci pojaviti, moramo složiti callback funkcije koje će prilikom pokretanja funkcije getData odrediti ispravan redoslijed
učitavanja. Međutim tim pristupom dolazimo do onoga što se zove callback hell... */

/* function getData(putanja, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", putanja);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 2000) + 100);
}

getData("./filmovi.json", function (filmovi) {
  console.log(filmovi);
  getData("./glumci.json", function (glumci) {
    console.log(glumci);
    getData("./redatelji.json", function (redatelji) {
      console.log(redatelji);
    });
  });
}); */

// ------------------------------------------------------------------------------------------------

// Idemo ovo posložiti pomoću Promisea..

/* function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Dogodila se greška");
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 2000) + 100);
  });
}

getData("./filmovi.json")
  .then((filmovi) => {
    console.log(filmovi);
    return getData("./glumci.json");
  })
  .then((glumci) => {
    console.log(glumci);
    return getData("./redatelji.json");
  })
  .then((redatelji) => {
    console.log(redatelji);
  })
  .catch((greska) => {
    console.log(greska);
  }); */

//--------------------------------------------------------------------------------

// Idemo još samo malo vidjeti kako možete sa PromiseAll metodom možda još malo urediti kod

function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Dogodila se greška");
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 2000) + 100);
  });
}

const filmovi = getData("./filmovi.json");
const glumci = getData("./glumci.json");
const redatelji = getData("./redatelji.json");

Promise.all([filmovi, glumci, redatelji])
  .then((podaci) => {
    console.log(podaci);
  })
  .catch((greska) => {
    console.log(greska);
  });
