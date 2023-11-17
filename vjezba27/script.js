"use strict";

for (let i = 1; i <= 5; i++) {
  console.log(`dižemo uteg ${i} puta`);
}

// While petlju (loop)

let i = 1;
while (i <= 5) {
  console.log(`dižemo uteg ${i} puta`);
  i++;
}

let kocka = Math.floor(Math.random() * 6 + 1);
console.log(kocka);

while (kocka !== 6) {
  console.log(`Dobio si ${kocka}`);
  kocka = Math.floor(Math.random() * 6 + 1);
  if (kocka === 6) {
    console.log(`Dobio si broj ${kocka}`);
  }
}
