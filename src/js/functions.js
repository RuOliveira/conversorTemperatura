function Converter() {
  var valorGraus = document.getElementById("graus");
  var graus = valorGraus.value;
  var grausCelsius = parseFloat(graus);

  var valorGrausFahrenheit = (9 * grausCelsius + 160) / 5;
  console.log(valorGrausFahrenheit);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "A temperatura em graus Fahrenheit é de " + valorGrausFahrenheit + "°F.";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorGraus = document.getElementById("graus");
  var graus = valorGraus.value;
  var grausFahrenheit = parseFloat(graus);

  var valorGrausCelsius = (5 * (grausFahrenheit - 32)) / 9;
  console.log(valorGrausCelsius);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "A temperatura em graus Celsius é de " + valorGrausCelsius + "°C.";
  elementoValorConvertido.innerHTML = valorConvertido;
}
