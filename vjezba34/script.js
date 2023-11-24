"use strict";

// Kako zamijeniti postojeće elemente

// Replace metoda

function zamijeniZadatak() {
  const zadatak = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.innerText = "Zamijenjeni list item";

  zadatak.replaceWith(li);
}

//zamijeniZadatak();

// OuterHTML metoda - za razliku od innerHTML-a mijenja cijeli element

function outerHTML() {
  const zadatak = document.querySelector("li:first-child");
  zadatak.outerHTML = "<li>Zamijenjeni list item sa outerHTML metodom</li>";
}

//outerHTML();

// For petljom možemo npr. promijeniti sve elemente (zadatke)

function zamijeniSve() {
  const listaZadataka = document.querySelectorAll("li");
  listaZadataka.forEach((zadatak, kljuc) => {
    if (kljuc === 1) {
      zadatak.outerHTML = "<li>Zamijenili smo sve članove liste</li>";
    } else {
      zadatak.outerHTML = "<li>Ostali članovi</li>";
    }
  });
}

// zamijeniSve();

// Brisanje elemenata remove metodom

function ukloniButton() {
  document.querySelector("#clear").remove();
}

// ukloniButton();

// removeChild metoda - briše element putem parent elementa

function ukloniZadatak() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

// ukloniZadatak();

function konzola() {
  console.log("Hello world");
}

document.querySelector("#clear").onclick = konzola;

const naslov = document.querySelector("h1");
const listaZadataka = document.querySelector(".zadatak");
const zadaci = document.querySelectorAll("li");

// dodavanje klase na element
naslov.className = "naslov";

// dodavanje klase na listu klasa
listaZadataka.classList.add("promjena");

// micanje klase iz liste klasa
listaZadataka.classList.remove("promjena");

// zamijena jedne klase za drugom
listaZadataka.classList.replace("zadatak", "promjena");

function toglaj() {
  naslov.classList.toggle("promjena2");
  listaZadataka.style.lineHeight = "5";
}

document.querySelector("li:first-child").onclick = toglaj;
