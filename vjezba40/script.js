"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// Funkcije

// Povlačenje zadatka iz lokalnog storagea
const prikaziZadatkeLS = () => {
  const zadaciSpremiste = dohvatiLocalStorage();
  zadaciSpremiste.forEach((zadatak) => kreirajZadatak(zadatak));
  provjeriListu();
};

// Funkcija za kreiranje zadataka
const dodajZadatak = (e) => {
  e.preventDefault();
  /* Za ispravak ćemo vrijednost definirati putem varijable kako bi ju onda mogli kao parametar proslijediti na druge funkcije */
  const noviZadatak = zadatakInput.value.trim();
  if (noviZadatak === "") {
    alert("Molimo Vas unesite zadatak");
    return;
  } else {
    kreirajZadatak(noviZadatak);
    provjeriListu();
    dodajLocalStorage(noviZadatak);
    zadatakInput.value = "";
  }
};

// Funkcija za kreiranje elemenata
const kreirajZadatak = (noviZadatak) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(noviZadatak));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);
};

// Funkcija za dodavanje u localStorage.
const dodajLocalStorage = (zadatak) => {
  const zadaciSpremiste = dohvatiLocalStorage();
  zadaciSpremiste.push(zadatak);
  localStorage.setItem("ključ", JSON.stringify(zadaciSpremiste));
};

// Funkcija za pozivanje iz localStoragea
const dohvatiLocalStorage = () => {
  let zadaciSpremiste;

  if (localStorage.getItem("ključ") === null) {
    zadaciSpremiste = [];
  } else {
    zadaciSpremiste = JSON.parse(localStorage.getItem("ključ"));
  }

  return zadaciSpremiste;
};

// Funkcija za brisanje zadatka
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    ukloniZadatak(e.target.parentElement.parentElement);
  }
};

/* U ovu funkciju ćemo prebaciti svu logiku brisanja iz funkcije obrisiZadatak */
// Funkcija za uklanjanje zadatka
const ukloniZadatak = (zadatakIzLS) => {
  zadatakIzLS.remove();
  // pozivamo funkciju za brisanje odabranog elementa iz LS-a
  obrisiIzLS(zadatakIzLS.textContent);
  provjeriListu();
};

// Funkcija za brisanje svih zadataka
const obrisiZadatke = (e) => {
  while (listaZadataka.firstChild) {
    listaZadataka.removeChild(listaZadataka.firstChild);
    // Obriši sve iz LS-a pomoću ključa
    localStorage.removeItem("ključ");
    provjeriListu();
  }
};

// Funkcija za brisanje iz LS-a - ona će proći kroz listu elemenata u localStorageu i obrisat člana kojeg smo odabrali za brisanje.
const obrisiIzLS = (x) => {
  // spremamo zadatke iz LS u varijablu zadatakIzStoragea
  let zadatakIzStoragea = dohvatiLocalStorage();
  // I sad metodom filtera možemo proći kroz tu listu i isflitrirati one koje smo kliknuli i listu bez njih vratiti nazad
  zadatakIzStoragea = zadatakIzStoragea.filter((zadatak) => zadatak !== x);
  // Vraćamo nazad u localStorage
  localStorage.setItem("ključ", JSON.stringify(zadatakIzStoragea));
};

// Funkcija za filtriranje zadataka

const filtrirajZadatke = (e) => {
  const zadaci = document.querySelectorAll("li");
  const tekst = e.target.value.toLowerCase();

  zadaci.forEach((zadatak) => {
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();

    if (imeZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

// Funkcija za provjeru ima li elemenata u listi i prikaz "filtera" i "briši sve" gumba ako nemamo/imamo
const provjeriListu = () => {
  const zadaci = document.querySelectorAll("li");
  console.log(zadaci);
  if (zadaci.length === 0) {
    filter.style.display = "none";
    brisiSve.style.display = "none";
  } else {
    filter.style.display = "block";
    brisiSve.style.display = "block";
  }
};

// Event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);
document.addEventListener("DOMContentLoaded", prikaziZadatkeLS);

// Funkcije
provjeriListu();
