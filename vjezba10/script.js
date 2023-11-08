"use strict";

/* Varijable definirane u globalnom scopeu su dostupne svuda, a lokalne su dostupne unutar određene funkcije ili objekta. */

var lopta = "nogometna";

const sport = () => {
  var lopta2 = "rukometna";
  return {
    sport2: () => {
      return console.log(lopta, lopta2);
    },
  };
};

/* 

lopta2 nam nije dostupna van funkcije, jer su sve varijable definirane unutar funkcije ograničene tom funkcijom (function scopeom). 
Leksički scope nam definira kako se imena varijabli rješavaju i ugniježđuju unutar funkcije. Ako imamo child funkciju (ugniježđenu funkciju
unutar druge funkcije), child funkcija će imati pristup varijablama parent funkcije.

*/

sport();

/* Ovo nam ne daje nikakav ispis koji je zapisan u podfunkciji, jer iako se pozvala parent funkcija, nije se odvrtila podfunkcija. A tome
možemo doskočiti tako da napravimo novu varijablu i u nju spremimo return parent funkcije. Onda možemo pomoću te varijable pozvati podfunkciju
i dohvatiti vrijednost koja je definirana u returnu podfunkcije. */

const noviSport = sport();
/* console.log(lopta, lopta2); */
noviSport.sport2();
