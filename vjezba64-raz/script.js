/* Kod Jquerya možemo pisati funkcije na ovaj način, a kada selektiramo elemente, možemo direktno u nastavku
pisati pomoću metoda ono što želimo da se dogodi na selektiranom elementu. S time da metode možemo slagat lančano. */

/* $(function () {
  $("#btn1").hide();
  $("#btn2").hide(2000).show(1000);
  $("#btn3").slideUp(1000).slideDown(500);
}); */

/* Još neke popularnije metode:
delay,
fadeIn,
fadeOut,
toggle, njega možete čak dodat kao fadeToggle */

// modificiranje CSS-a

/* $(function () {
  $(".col-sm-3:first-child").css({ fontWeight: "bold" });
}); */

// promjene HTML-a

/* $(function () {
  $("#btn1").html("Gumbić 1");
}); */

// event listeneri i callback funkcije

/* $("#btn1").on("click", function () {
  $(".col-sm-3:last-child").slideToggle(300);
}); */

// Idemo složiti click funkcije na naše buttone..

$(document).ready(function () {
  $(".btn-info").click(function () {
    const panelClass = $(this).data("panel-class");
    $("." + panelClass).toggle();
  });
});
