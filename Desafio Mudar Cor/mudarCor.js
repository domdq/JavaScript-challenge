const main = document.querySelector("main");
const input = document.querySelector("input");

const corPadrao = "#fff";
main.style.backgroundColor = corPadrao;

function onChangeBg() {
  main.style.backgroundColor = input.value;
}
