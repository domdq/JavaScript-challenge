const hora = document.querySelector("#horas");
const minuto = document.querySelector("#minutos");
const segundo = document.querySelector("#segundos");

setInterval(function () {
  let data = new Date();
  let horas = formataTempo(data.getHours());
  let minutos = formataTempo(data.getMinutes());
  let segundos = formataTempo(data.getSeconds());

  hora.textContent = horas;
  minuto.textContent = minutos;
  segundo.textContent = segundos;
}, 1000);

function formataTempo(tempo) {
  if (tempo < 10) {
    return "0" + tempo;
  } else {
    return tempo;
  }
}
