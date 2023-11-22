"use strict";

/* console.log(window);

S ispisom windowa u konzoli dobit ćemo uvid u window objekt i sve metode koje možemo primjeniti na window objektu, među ostalima
nama je najinteresantniji DOM koji je u biti programsko sučelje za naše HTML elemente. Unutar njega se nalazi document metoda koja
će nam dati pristup manipulaciji naših HTML elemenata.

console.log(document); */

/* 
// ovako možemo vidjeti isključivo naš HTML u konzoli
console.log(document.body.innerHTML); 
*/

// ovako možemo vidjeti isključivo sadržaj našeg HTML dokumenta u konzoli
/* console.log(document.body.innerText); */

// ovako možemo doslovno zamijeniti postojeći HTML sa onim koji napišemo putem JavaScripte
/* document.body.innerHTML = "<h1>Hello World</h1>";
 */

// getElementByID

/* console.log(document.getElementById("header")); */

/* Dohvaćanje elementa pomoću ID-a na elementu i izmjena njegovog sadržaja
const header = document.getElementById("header");
header.innerHTML = "<h1>Hello World</h1>";

document.getElementById("header").innerHTML = "<p>Hello World</p>"; */

//
const header = document.getElementById("header");

/* Insertanje nove klase na postojeći element */
header.setAttribute("class", "header__klasa");

/* Insertanje stilizacije na postojeći element */

header.style.color = "#ff0000";
header.style.backgroundColor = "#eee";
header.style.padding = "2rem";
header.style.borderRadius = "25px";

// Query Selector
/* Uz getElementByID imamo i getElementByClass koji funkcionira isto kao i getElementByID.
Ali nama je zgodniji QuerySelector kojim možemo odabrati što god hoćemo putem atributa.
Ako imamo više od jednog elementa sa tim atributom kojeg zovemo, QuerySelector će dohvatiti
samo prvog kojeg nađe. */

console.log(document.querySelector("#header"));
console.log(document.querySelector("li"));
console.log(document.querySelector(".header__klasa"));
console.log(document.querySelector("li:nth-child(2)"));

//Query Selector All
/* Funkcionira kao i QuerySelector ali selektira sve instance koje imaju podešen atribut koji targetiramo. */
const lista = document.querySelectorAll("ul li");
console.log(lista);

console.log(lista[3]);

console.log(lista[3].innerHTML);
