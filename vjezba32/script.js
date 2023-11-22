"use strict";

// Ovako možemo kreirati novi element na stranici. (metoda createElement)
const noviZadatak = document.createElement("div");

// Idemo tom novom elementu dodati i klasu. (metoda className)
noviZadatak.className = "novi__element";

// Idemo dodati i ID. (metoda id)
noviZadatak.id = "novi__zadatak";

// možemo dodati i neki data atribut po želji sa setAttribute metodom
noviZadatak.setAttribute("naslov", "Ovo je naslov");

/* možemo dodati i sadržaj na taj novi element. S time da sa innerText metodom dodajemo običan tekst, a sa 
innerHTML metodom možemo uz običan tekst dodati i dodatni HTML kod.. */
noviZadatak.innerText = "Ja sam novi sadržaj";
noviZadatak.innerHTML =
  "Ja sam novi sadržaj, ali imam sa sobom i još jedan <mark>HTML element</mark>";

/* console.log(noviZadatak); */

/* Sada možmo taj element i dodati u naš prikaz HTML DOM-a kako bi posjetioc i vidio ovaj element na stranici.
Za to ćemo koristiti appendChild metodu. */

/* document.body.appendChild(noviZadatak); */ // na ovaj način ćemo dodati div na kraj našeg dokumenta

// Ali idemo dodati ovaj div na kraj naše liste zadataka jer tamo bi to i trebalo ići

/* document.querySelector("ul").appendChild(noviZadatak); */

/* Idemo vidjeti kako bi pomoću funkcije kreirali novi zadatak za našu ToDo listu. */

// brži način - jer smo samo dodali zadatak, ostalo je fiksno ubačeno kao HTML kod

function kreirajZadatak(zadatak) {
  const li = document.createElement("li");

  li.innerHTML = `${zadatak}
     <button class="ukloni-zadatak btn-link">
     <i class="fa-solid fa-xmark"></i>
     </button>
  `;

  document.querySelector(".zadatak").appendChild(li);
}

kreirajZadatak("Kupi novine");

// duži način ali detaljnjiji gdje ćemo kreirati sve elemente i onda ih pravilno posložiti

function kreirajZadatak2(zadatak) {
  const li = document.createElement("li");
  li.innerText = zadatak;

  const button = document.createElement("button");
  button.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  button.appendChild(ikona);
  li.appendChild(button);

  document.querySelector(".zadatak").appendChild(li);
}

kreirajZadatak2("Kupi sličice");

/* Za kraj ćemo ovaj duži pristup još i refaktorirati, što znači da ćemo od svake kreacije u biti složiti novu funkciju kako bi
 mogli koristiti te funkcije na više mjesta i više puta...*/

function kreirajZadatak3(zadatak) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatak));

  const button = napraviButton("ukloni-zadatak btn-link");
  li.appendChild(button);

  document.querySelector(".zadatak").appendChild(li);
}

function napraviButton(klase) {
  const button = document.createElement("button");
  button.className = klase;

  const ikona = napraviIkonu("fa-solid fa-xmark");
  button.appendChild(ikona);
  return button;
}

function napraviIkonu(klase) {
  const ikona = document.createElement("i");
  ikona.className = klase;
  return ikona;
}

kreirajZadatak3("Utakmica je u 9");

// Još neki načini kako bi ubacili sadržaj u HTML

// insertAdjacentElement metoda - ubacuje HTML element sa sadržajem kojeg postavimo

function ubaciElement() {
  const filter = document.querySelector(".filter"); // dohvaćamo element sa klasom filter i spremamo u varijablu

  const p = document.createElement("p"); // kreiramo novi paragraf element
  p.textContent = "Tekst koji ćemo ubaciti"; // u taj paragraf element metodom textContent koja je praktički ista kao innerText dodajemo sadržaj.

  /* filter.insertAdjacentElement("beforebegin", p); */ // dodajemo paragraf prije .filter elementa
  /* filter.insertAdjacentElement("afterbegin", p); */ // dodajemo paragraf odmah kao prvi element unutar .filter elementa
  /* filter.insertAdjacentElement("beforeend", p); */ // dodajemo paragraf prije nego završi taj .filter element
  /* filter.insertAdjacentElement("afterend", p); */ // dodajemo paragraf odmah nakon što završi .filter element
}

ubaciElement();
