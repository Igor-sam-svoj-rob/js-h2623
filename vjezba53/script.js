"use strict";

const btn = document.querySelector("button");

const dohvatiUsere = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        console.log("Ne možemo dohvatiti podatke");
        return;
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", dohvatiUsere);

// Idemo isto ovo napraviti sa Async/Await pristupom

const noviUser = {
  name: "Igor",
  email: "mail@mail.com",
};

const dohvatiUsere2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noviUser),
    });
    if (!res.ok) {
      console.log("Ne mogu dohvatiti podatke");
      return;
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", dohvatiUsere2);
