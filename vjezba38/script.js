"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// Funkcije

// Funkcija za kreiranje zadataka

const dodajZadatak = (e) => {
  // zaustavi prirodno ponašanje sumbita (reload stranice)
  e.preventDefault();

  // provjera da li je išta uneseno u input polje, ako nije okini alert
  if (zadatakInput.value === "") {
    alert("Molimo Vas unesite zadatak");
    return;
  }
  /* Kreiranje novog list itema, a upis sadržaja ćemo odraditi putem createTextNode metode, koja za razliku od innerTexta kreira novi element
  dok innerText u biti mijenja postojeći sadržaj iz postojećeg elementa*/
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));

  // kreiranje buttona za brisanje i dodavanje klasa na njega
  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  // kreiranje ikone i dodavanje unutar buttona za brisanje i dodavanje klasa na njega
  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  // appendanje ikone na button, buttona na list item i na kraju list itema na listu zadataka
  delGumb.appendChild(ikona);
  li.appendChild(delGumb);

  listaZadataka.appendChild(li);

  provjeriListu();

  // resetanje input polja na prazan string na kraju submit funkcije
  zadatakInput.value = "";
};

// Funkcija za brisanje zadatka

const obrisiZadatak = (e) => {
  // if provjera ako element kojeg smo kliknuli ima klasu ukloni zadatak (true), onda ćeš ukloniti parentElement * 2 od targeta
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
    provjeriListu();
  }
};

// Funkcija za brisanje svih zadataka
const obrisiZadatke = (e) => {
  // listaZadataka.innerHTML = ""; - jednostavan način za brisanje ali može dovesti do problema jer ostavljamo string...

  // While provjera koja naravno daje true dok god imamo firstChild unutar ul. I ova petlja će brisati sve dok nema više prvog djeteta.
  while (listaZadataka.firstChild) {
    listaZadataka.removeChild(listaZadataka.firstChild);
    provjeriListu();
  }
};

// Funkcija za filtriranje zadataka

const filtrirajZadatke = (e) => {
  // moramo i ovdje refreshati trenutnu listu zadataka i spremiti u varijablu
  const zadaci = document.querySelectorAll("li");
  // tekst iz input filter polja također spremamo u varijablu ali vrijednost ide u mala slova (toLowerCase)
  const tekst = e.target.value.toLowerCase();

  // Na listi zadataka ćemo forEach metodom spremiti zadatke u tekstualne podatke i njih također spremiti u novi varijablu sa malim slovima
  zadaci.forEach((zadatak) => {
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
    /* Napravit ćemo if provjeru koristeći indexOf metodu listi koja vraća člana liste koji se poklapa ali ako ne nalazi nikoga vraća -1 */
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

// Funkcije

// Funkciju automatski pokrećemo prilikom učitavanja kako bi provjerili imamo li uopće u startu zadataka
provjeriListu();
