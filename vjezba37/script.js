"use strict";

/* const forma = document.getElementById("zadatak-forma");

const onSubmit = (e) => {
  e.preventDefault();
  console.log("poslano");

  const zadatak = document.getElementById("zadatak-input");

  if (zadatak.value === "") {
    alert("Niste ispunili polje!");
    return;
  }

  console.log(zadatak.value);
};

forma.addEventListener("submit", onSubmit); */

// Event bubbling

/* const gumb = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const forma = document.querySelector("form");

gumb.addEventListener("click", (e) => {
  alert("gumb je kliknut");
  e.stopPropagation();
});

div.addEventListener("click", () => {
  alert("div je kliknut");
});

forma.addEventListener("click", () => {
  alert("forma je kliknuta");
}); */

// Brisanje zadataka

const listaZadataka = document.querySelector("#zadatak-list");

listaZadataka.addEventListener("mouseover", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "#ff0000";
  }
});

listaZadataka.addEventListener("mouseout", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "#000";
  }
});

listaZadataka.addEventListener("click", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.remove();
  }
});
