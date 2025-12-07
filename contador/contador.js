let numero = 0; // vai começar em zero

const contar = document.getElementById("contar");
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", function () {
  numero = numero + 1;
  contar.textContent = numero;
});

const btnLimpar = document.getElementById("limpar");

btnLimpar.addEventListener("click", function () {
  numero = 0;
  contar.textContent = numero;
});

const btnMenos = document.getElementById("btn-menos");

btnMenos.addEventListener("click", function () {
  if (numero > 0) {
    numero = numero - 1;
    contar.textContent = numero;
  }
});
