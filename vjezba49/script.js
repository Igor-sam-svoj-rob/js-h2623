"use strict";

// funkcija za ispis sadržaja iz TXT filea na DOM
document.getElementById("povuci").addEventListener("click", povuciTekst);

function povuciTekst() {
  fetch("./uzorak.txt")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#ispisi").innerHTML = data;
    })
    .catch((error) => console.log(error));
}

// funkcija za ispis lokalnog JSON-a na DOM

document.getElementById("lokalni_json").addEventListener("click", povuciJson);

function povuciJson() {
  fetch("./users.json")
    .then((res) => res.json())
    .then((data) => {
      let ispis = `<h2>Korisnici</h2>`;
      data.forEach((user) => {
        ispis += `<ul>
            <li>ID: ${user.id}</li>
            <li>Ime: ${user.ime}</li>
            <li>Prezime: ${user.prezime}</li>
        </ul>`;
      });
      document.querySelector("#ispisi").innerHTML = ispis;
    })
    .catch((error) => console.log(error));
}

// funkcija za ispis iz vanjskog JSON-a na DOM

// (složite ispis iz te liste objekata, na način da unutar DIV elementa budu title i body iz tog objekta)
document
  .getElementById("vanjski_json")
  .addEventListener("click", povuciPostove);

function povuciPostove() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let ispis = `<h2>Useri</h2>`;
      data.forEach((user) => {
        ispis += `<ul>
                <li>Title: ${user.title}</li>
                <li>Body: ${user.body}</li>
            </ul>`;
      });
      document.querySelector("#ispisi").innerHTML = ispis;
    })
    .catch((error) => console.log(error));
}

// --------------------------------------------------------------------------

// kako poslati podatke putem fetcha na server

document.querySelector("#post").addEventListener("submit", dodajPost);

function dodajPost(e) {
  e.preventDefault();
  let naslov = document.querySelector("#title").value;
  let tekst = document.querySelector("#body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: naslov, body: tekst }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
