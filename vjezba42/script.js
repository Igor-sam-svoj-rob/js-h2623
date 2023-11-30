"use strict";

// lista imena
const imena = [
  { ime: "Ivan", prezime: "Ivić" },
  { ime: "Josip", prezime: "Josipović" },
  { ime: "Marija", prezime: "Marić" },
];

// funkcija koja kreira novog člana liste imena, ali kao parametar prima ime i callback funkciju getImena
const kreirajIme = (ime, cb) => {
  setTimeout(() => {
    imena.push(ime);
    //pokretanje callback funkcije
    cb();
  }, 2000);
};

//Callback funkcija
const getImena = () => {
  setTimeout(() => {
    imena.forEach((x) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${x.ime} ${x.prezime}</strong>`;
      document.querySelector("#imena").appendChild(div);
    });
  }, 1000);
};

// kreiranje novog člana liste i prosljeđivanje callback funkcije
kreirajIme({ ime: "Maja", prezime: "Majić" }, getImena);
document.querySelector("button").addEventListener("click", getImena);
