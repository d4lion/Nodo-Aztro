// Copyright (c) 2024 D4lion

const inputBaseMayor = document.getElementById('base-mayor');
const inputBaseMenor = document.getElementById('base-menor');
const inputAltura = document.getElementById('altura');

/*
Para todos los calculos se esta usando la suposicion de que es un trapecio común calculable o cuadrado:

 Existen 3 posibles casos para el calculo de la cantidad de pesticida basados en el area del trapecio

 Caso 1: La Base mayor, la base menor y la altura son iguales -> A = B^2

 Caso 2: La Base mayor y la menor son diferentes -> A = (B+b)*a/2

Caso 3: La Base mayor y la menor son iguales pero la altura es diferente -> A = B*a

*/

const calcularAreaTrapecio = ({ baseMayor: B, baseMenor: b, altura: a }) => {
  let area = 0;
  // primer caso
  if (B == b && a == B) {
    area = Math.pow(B, 2);
    return area;
  }

  // Segundo caso
  if (B !== b) {
    area = ((B + b) * a) / 2;
    return area;
  }

  // Tercer caso
  if (B == b && B !== a) {
    area = B * a;
    return area;
  }
};

const calcularPerimetroTrapecio = ({
  baseMayor: B,
  baseMenor: b,
  altura: a,
}) => {
  /* Para el perimetro tambien existen algunos casos:
    
    Caso 1: La base mayor y la menor son iguales pero la altura es diferente -> 2 * [B or b] + 2 * a

    Caso 2: La base mayor, la base menor y la altura son iguales -> p = [B or b or a ] * 4
    
    Caso 3: La base mayor y la menor son diferentes -> p =  B + b+ (a^2 + (B-b/2)^2)
    
    */

  let perimetro = 0;

  // Caso 1
  if (B == b && a !== B) {
    perimetro = 2 * B + 2 * a;
    return perimetro;
  }

  // Caso 2
  if (B == b && B == a) {
    perimetro = B * 4;
    return perimetro;
  }

  // Caso 3
  if (B !== b) {
    // B + b+ (a^2 + (B-b/2)^2)
    perimetro = B + b + 2 * (Math.pow(a, 2) + Math.pow((B - b) / 2, 2));
    return perimetro;
  }
};

const calcularTotalPesticida = (area, cantidadDePesticidaPorMetro = 1.5) => {
  let cantidadTotal = area / cantidadDePesticidaPorMetro;
  return cantidadTotal;
};

const actualizarDatosInputs = ({ area, perimetro, pesticida }) => {
  const resultado_area = document.getElementById('resultado_area');
  const resultado_perimetro = document.getElementById('resultado_perimetro');
  const resultado_pesticida = document.getElementById('resultado_pesticida');

  resultado_area.value = area + 'm²';
  resultado_perimetro.value = perimetro + 'm²';
  resultado_pesticida.value = pesticida + 'L';
};

// Detectar el estado de enviado del formulario para realizar los calculos
document.getElementById('form-data').addEventListener('submit', (e) => {
  e.preventDefault();

  const baseMayor = parseFloat(inputBaseMayor.value);
  const baseMenor = parseFloat(inputBaseMenor.value);
  const altura = parseFloat(inputAltura.value);

  const datos = { baseMayor, baseMenor, altura };

  const areaTrapecio = calcularAreaTrapecio(datos).toFixed(2);
  const pesticida = calcularTotalPesticida(areaTrapecio).toFixed(2);
  const perimetroDelTrapecio = calcularPerimetroTrapecio(datos).toFixed(2);

  // Se actualizan los graficos de las barras
  actualizarDatos({
    area: areaTrapecio,
    perimetro: perimetroDelTrapecio,
    pesticida,
  });

  actualizarDatosInputs({
    area: areaTrapecio,
    perimetro: perimetroDelTrapecio,
    pesticida,
  });
});
