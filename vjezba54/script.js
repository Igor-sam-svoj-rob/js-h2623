"use strict";

/* import dohvatiUsera from "./modules/gituser.js";

dohvatiUsera(); */

import { dodajKosarica, kosarica } from "./modules/cart.js";

dodajKosarica("kruh", 5);
dodajKosarica("pašteta", 3);
dodajKosarica("mlijeko", 1);

console.log(kosarica);
