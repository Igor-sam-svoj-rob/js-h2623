"use strict";

/* Event listener - addEventListener postavljamo na element i on ima 2 parametra - prvi je događaj koji se mora 
dogoditi kako bi se pokrenuo drugi parametar a to je funkcija... */

const clearBtn = document.querySelector("#clear");

/* clearBtn.addEventListener("click", function () {
  alert("Event Listener");
}); */

// kao arrow funkcija

/* clearBtn.addEventListener("click", () => {
  alert("Event Listener");
  console.log("Hello world");
}); */

function pocisti() {
  console.log("Hello world");
  const listaZadataka = document.querySelector(".zadatak");
  const zadaci = listaZadataka.querySelectorAll(".pojedinacni-zadatak");

  zadaci.forEach((zadatak) => {
    zadatak.remove();
  });
}

clearBtn.addEventListener("click", pocisti);

/* Mouse eventi :
1. "dblclick" - dupli klik mišem
2. "mousedown" - držanje lijevog klika miša
3. "mouseup" - pusti klik miša
4. "wheel" - kotačić miša
5. "mouseover" - "hover in" sa mišem
6. "mouseout" - "hover out" sa mišem
*/

/* Pointer eventi : 
1. target - daje nam element koji smo kliknuli 
2. type - daje nam vrstu eventa koji je aktiviran 
3. clientX - daje nam vrijednost po horizontali relativno prema prozoru
4. clientY - daje nam vrijednost po vertikali relativno prema prozoru
5. offsetX - daje nam vrijednost po horizontali relativno prema elementu
6. offsetY - daje nam vrijednost po vertikali relativno prema elementu
7. pageX - daje nam vrijednost po horizontali relativno prema stranici
8. pageY - daje nam vrijednost po vertikali relativno prema stranici
9. screenX - daje nam vrijednost po horizontali relativno prema ekranu monitora
10. screenY - daje nam vrijednost po vertikali relativno prema ekranu monitora
*/

const naslov = document.querySelector("h1");

naslov.addEventListener("click", (e) => {
  console.log(e.offsetX);
});

/* PreventDefault metoda - spriječava defaultno ponašanje određenog HTML elementa, najčešće ga koristimo da spriječimo refresh stranice
prilikom klika na gumb tj. ono što bi se recimo sa anchor elementom dogodilo prirodno da ga se klikne. */

/* document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();

  console.log("spriječili smo anchor tag da ode na drugu stranicu");
}); */

const gumb = document.querySelector("a");

const onDrag = (e) => {
  const naslov = document.querySelector("h1");
  naslov.textContent = `X : ${e.clientX} Y : ${e.clientY}`;
};

gumb.addEventListener("drag", onDrag);

/* Keyboard eventi - eventi tipkovnice 
1. keypress - bilo koja tipka će aktivirati funkciju
2. keyup - kada nešto stisnete, tek kada pustite tipku će se aktivirati
3. keydown - čim stinem tipku će se aktivirati

*/

/* const inputKey = document.getElementById("zadatak-input");

inputKey.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Stisnuo si enter");
  }
  if (e.repeat) {
    console.log(`Sjeo si na tipku, pusti tipku ${e.key}`);
  }
}); */

/* Input eventi - on u biti radi isto što i keydown, ali ga je bolje upotrijebiti kada se radi sa input poljima. 
Možemo koristiti i change event umjesto inputa ali to je stariji selektor i ima širu upotrebu.
*/

const inputForma = document.getElementById("zadatak-input");
const heading = document.querySelector("h1");

inputForma.addEventListener("input", (e) => {
  console.log(e.target.value); // target.value nam daje sve ono što se upisuje u input polje
  heading.textContent = e.target.value; // s ovim ćemo zamijeniti sadržaj headinga sa onim što upisujemo
});

inputForma.addEventListener("focus", (e) => {
  console.log("input je u fokusu");
}); // provjerava jesmo li kliknuli na input polje

inputForma.addEventListener("blur", (e) => {
  console.log("input nije u fokusu");
}); // provjerava jesmo li kliknuli van input polja
