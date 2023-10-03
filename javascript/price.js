const btn = document.querySelector(".container-button");
const bol = document.querySelector(".secundary-button");
const cards = document.querySelector(".container-cards");
const priceAnnualy = document.querySelectorAll(".price-annually");
const priceMonthly = document.querySelectorAll(".price-monthly");

//escucha la etiqueta cada vez que se acciona el boton recibe dos parametros evento (click) y la funcion

btn.addEventListener("click", changePrice);
//bol.addEventListener("click", changePrice)

function changePrice() {
  //

  if (
    priceMonthly.forEach((i) => i.className.includes("inactive")) ||
    bol.className.includes("check-bol")
  ) {
    priceMonthly.forEach((i) => i.classList.remove("inactive"));
    priceAnnualy.forEach((i) => i.classList.add("inactive"));
    bol.classList.remove("check-bol");
  } else if (
    !priceMonthly.forEach((i) => i.className.includes("inactive")) ||
    !bol.className.includes("check-bol")
  ) {
    priceMonthly.forEach((i) => i.classList.add("inactive"));
    priceAnnualy.forEach((i) => i.classList.remove("inactive"));
    bol.classList.add("check-bol");
  }
}
//function traslateBol() {
//if (bol.className.includes("check-bol")) {
//  bol.classList.remove("check-bol")
//} else if (!bol.className.includes("check-bol")) {
//  bol.classList.add("check-bol");
//}

//}
