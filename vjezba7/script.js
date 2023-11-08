const dan = prompt("Koji je danas dan?");

switch (dan) {
  case "ponedjeljak": //dan === ponedjeljak
    console.log("Ponedjeljak je najgori dan u tjednu.");
    break;

  case "utorak": //dan === utorak
    console.log("Utorak je danas.");
    break;

  case "srijeda":
    console.log("srijeda je na pola puta do vikenda.");
    break;

  case "cetvrtak":
    console.log("Mali petak je...");
    break;

  case "petak":
    console.log("Petak, kraj tjedna napokon :D ");
    break;

  case "subota":
  case "nedjelja":
    console.log("vikend je, jeeej!");
    break;

  default:
    console.log("Niste upisali dan u tjednu!");
}
