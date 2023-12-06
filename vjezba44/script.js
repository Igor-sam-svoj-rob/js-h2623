"use strict";

/* Hypertext Transfer Protocol je protokol za slanje i primanje podataka na webu.
Radi se o Client/Server protokolu. Zahtijev inicijalizirate vi kao klijent, a server će reagirati
sa odgovorom. Odgovor može biti HTML/CSS/JS, fileovi, slike ili drugi resursi kao i podaci u obliku
JSON ili XML... */

// AJAX/XML HttpRequest

/* HTTP metode:
GET - traži podatke sa servera
POST - pošalji podatke na server
PUT & PATCH - edit/update podataka na serveru
DELETE - obriši podatke na serveru

HTTP status kodovi :

100 - continue

200 - uspjeh
201 - uspješno je kreirano nešto
204 - uspješno ali nema sadržaja

300 - redirect
301 - trajni redirect
302 - privremeni redirect

400 - Error kod klijenta (Bad request)
401 - neautorizirani zahtjev
403 - zabranjeni zahtjev
404 - zahtjev za nečim što više tu ne postoji

500 - greške na serveru
*/

/* Kada kreiramo novi HTTPRequest moramo kreirati novi objekt iz XMLHTTPRequesta. Moramo definirati metodu i url. */
const xhr = new XMLHttpRequest();
const metodaGet = "GET";
const url = "./imena.json";
// sa metodom open inicijaliziramo HTTP zahtjev. Ta metoda daje 2 parametra a to su metoda i url...
xhr.open(metodaGet, url);

xhr.onreadystatechange = function () {
  /* console.log(this.readyState);
  console.log(this.status); */

  // nakon što smo utvrdili da je uspješno prošla konekcija idemo složiti if petlju s kojom ćemo se osigurati da radimo sa 4 & 200 statusom

  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((osoba) => {
      const li = document.createElement("li");
      li.innerHTML = `${osoba.ime} ${osoba.prezime} ima ${osoba.godina} godina`;
      document.querySelector("#imena").appendChild(li);
    });
  }
};

xhr.send();

/* 
Postoji 5 mogućih rješenja za readyState:
0: zahtjev nije inicijaliziran
1: server konekcija je uspostavljena
2: zahtjev je zaprimljen
3: zahtjev se procesuira
4: zahtjev je završio i odgovor je spreman
*/

/* Idemo istu stvar napraviti prema online resursu, konkretno prema GitHub API-u... */

const url2 = "https://api.github.com/users/Igor-sam-svoj-rob/repos";

xhr.open(metodaGet, url2);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `${repo.full_name}`;
      document.querySelector("#imena").appendChild(li);
    });
  }
};

xhr.send();
