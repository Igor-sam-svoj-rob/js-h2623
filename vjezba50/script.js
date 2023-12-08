"use strict";

// Ispis svih usera unutar div elementa user-cards

/* const cardTemplate = document.querySelector("template");
const cardContainer = document.querySelector(".user-cards");


fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((clan_liste) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector(".header");
      const body = card.querySelector(".body");

      header.textContent = clan_liste.name;
      body.textContent = clan_liste.email;
      cardContainer.appendChild(card);
    });
  }); */

// ---------------------------------------------------------

// filtriranje svih usera ovisno o vrijednosti input polja...

const cardTemplate = document.querySelector("template");
const cardContainer = document.querySelector(".user-cards");
const searchInput = document.querySelector("#search");

let users = [];

searchInput.addEventListener("input", function (event) {
  const value = event.target.value;
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((clan_liste) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector(".header");
      const body = card.querySelector(".body");

      header.textContent = clan_liste.name;
      body.textContent = clan_liste.email;
      cardContainer.appendChild(card);
    });
  });
