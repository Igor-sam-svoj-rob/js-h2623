"use strict";

fetch("https://httpstat.us/404")
  .then((res) => {
    /*     console.log(res.status);
    console.log(res.ok);
    console.log(res.statusText); */

    /*     if (!res.ok) {
      throw new Error("Zahtjev je neuspješan!");
    } */

    if (res.status === 404) {
      throw new Error("Error 404, stranica nije nađena");
    } else if (res.status === 500) {
      throw new Error("Error 500, server nije nađen");
    } else if (res.status !== 200) {
      throw new Error("Zahtjev je neuspješan");
    }
    return res;
  })
  .then(() => {
    console.log("uspjeh");
  })
  .catch((greska) => {
    console.log(greska);
  });
