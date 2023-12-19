"use strict";

const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "igor", prezime: "Jevremović" });
  }, 100);
});

/* obecanje.then((data) => console.log(data)); */

async function dohvatiObecanje() {
  const response = await obecanje;
  /* console.log(response); */
}

dohvatiObecanje();

//------------------------------------------------------------

// ASYNC AWAIT pristup

async function dohvatiUsere() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  /* console.log(data); */
}

dohvatiUsere();

function dohvatiUsere1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

dohvatiUsere1();

const dohvatiUsere2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();
  /* console.log(data) */
};

dohvatiUsere2();

// Kako složiti uspješno/neuspješno dohvaćanje podataka

const url = "https://jsonplaceholder.typicode.com/users";
let imena = [];

const useri = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    imena = data.map((x) => x.name);
  } catch (err) {
    console.log(err);
  }
};

useri();
