"use strict";

const url = "https://jsonplaceholder.typicode.com/todos/1";

/* function dohvatiPodatke() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

dohvatiPodatke(); */

fetch("./filmovi.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("h1").textContent = data.title;
    /*     console.log(data.title, data.id, data.userId, data.completed); */
  });
