let botoncitoDeNat = document.querySelector("#sortear_simple");
let publiNat = document.querySelector("#sortear-pub");
let resultados = document.querySelector("#simple_resultados");
let ganadores = document.querySelector("#ganadores");
botoncitoDeNat.addEventListener("click", () => {
  publiNat.remove();
  resultados.style.display = "inline";
  ganadores.style.opacity = "0";
  setTimeout(function() {
    ganadores.style.opacity = "1";
  }, 800);
});
