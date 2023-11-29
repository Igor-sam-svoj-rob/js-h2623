"use strict";

/* Postoji lokalno i sesijsko spremanje podataka. Razlika je da sesijski nestaju prilikom refresha stranice, dok se lokalni zapisuju
kao ključ-vrijednost par u lokalni storage browsera i ne nestaju prilikom refresha. Najveći problem je što ove metode ne mogu spremati objekte
stoga da bi spremili objekt moramo ga prvo metodom stringify pretvoriti u stringove, a onda kada ih želimo dohvatiti nazad iz lokalnog storagea
moramo ih opet pretvoriti u objekte parse metodom. 

Metode su slijedeće :

localStorage.setItem("ključ", "vrijednost"); - spremanje vrijednosti skupa sa ključem u local storage
localStorage.getItem("ključ"); - dohvaća vrijednost zapisanu na traženom ključu
localStorage.removeItem("ključ"); briše ključ i vrijednost na traženom ključu
localStorage.clear(); - briše sve zapisano u local storage

*/

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// Funkcije

// Funkcija za kreiranje zadataka
const dodajZadatak = (e) => {
  e.preventDefault();

  if (zadatakInput.value === "") {
    alert("Molimo Vas unesite zadatak");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);

  provjeriListu();
  dodajLocalStorage(zadatakInput.value);

  zadatakInput.value = "";
};

// Funkcija za dodavanje u localStorage.

/*Prvo ćemo provjeriti imamo li išta u localStorageu. Ako nemamo onda ćemo složiti našu varijablu kao praznu listu. S druge strane ako imamo
nešto u spremištu, onda ćemo prvo spremiti ono što se nalazi unutra u našu varijablu. Ali u tom slučaju kada imamo nešto unutra, onda to
moramo odmah pretvoriti metodom parse u listu.*/
const dodajLocalStorage = (zadatakInput) => {
  let zadaciSpremiste;

  if (localStorage.getItem("ključ") === null) {
    zadaciSpremiste = [];
  } else {
    zadaciSpremiste = JSON.parse(localStorage.getItem("ključ"));
  }
  //Nakon toga možemo metodom push dodati zadatke na listu zadaciSpremiste.
  zadaciSpremiste.push(zadatakInput);
  /* Kada dodamo novi zadatak onda ga trebamo spremiti nazad u localStorage kao string, stoga moramo upotrijebiti stringify metodu. */
  localStorage.setItem("ključ", JSON.stringify(zadaciSpremiste));
};

// Funkcija za brisanje zadatka
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
    provjeriListu();
  }
};

// Funkcija za brisanje svih zadataka
const obrisiZadatke = (e) => {
  while (listaZadataka.firstChild) {
    listaZadataka.removeChild(listaZadataka.firstChild);
    provjeriListu();
  }
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

// Funkcije
provjeriListu();
