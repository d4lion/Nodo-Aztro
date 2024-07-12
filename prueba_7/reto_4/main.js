// tomar datos del input
const input_altura = document.getElementById('altura');
const input_peso = document.getElementById('peso');
const input_resultado = document.getElementById('imc_input');

function calcularIndice({ peso: p, altura: a }) {
  const IMC = p / Math.pow(a, 2);
  let resultado = '';

  switch (true) {
    case IMC < 18.5:
      resultado = 'Bajo peso';
      break;

    case IMC >= 18.5 && IMC <= 24.9:
      resultado = 'Peso normal';
      break;

    case IMC >= 25 && IMC <= 29.9:
      resultado = 'Sobre peso';
      break;

    default:
      resultado = 'Sobre peso';
  }

  return [resultado, IMC];
}

document
  .getElementById('formulario-rectangulo')
  .addEventListener('submit', (e) => {
    e.preventDefault();

    const altura = parseFloat(input_altura.value);
    const peso = parseFloat(input_peso.value);

    const [resultadoIMC, IMC] = calcularIndice({ altura, peso });

    input_resultado.value = `${resultadoIMC} (${IMC.toFixed(2)})`;
  });
