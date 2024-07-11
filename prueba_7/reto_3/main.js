// Obtener los datos del ladrillo
const alto_ladrillo = document.getElementById('alto_ladrillo');
const ancho_ladrillo = document.getElementById('ancho_ladrillo');
const largo_ladrillo = document.getElementById('largo_ladrillo');
const volumen_ladrillo = document.getElementById('volumen_ladrillo');

// Obtener los datos del muro
const alto_muro = document.getElementById('alto_muro');
const largo_muro = document.getElementById('largo_muro');
const ancho_muro = document.getElementById('ancho_muro');
const volumen_muro = document.getElementById('volumen_muro');

// Obtener los elementos de resultado
const volumen_total = document.getElementById('volumen_total');
const cantidad_ladrillos = document.getElementById('cantidad_ladrillos');

function actualizarDatos({ elemento: e, valor: v }) {
  e.value = `${v}`;
}

function calcularVolumen({ alto: a, largo: l, ancho: an }) {
  a = parseFloat(a);
  l = parseFloat(l);
  an = parseFloat(an);

  return a * l * an;
}

function calcularCantidadLadrillos({ volumenMuro: vm, volumenLadrillo: vl }) {
  return Math.ceil(vm / vl);
}

document
  .getElementById('formulario-rectangulo')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const volumenLadrillo = calcularVolumen({
      alto: alto_ladrillo.value,
      largo: largo_ladrillo.value,
      ancho: ancho_ladrillo.value,
    });

    const volumenMuro = calcularVolumen({
      alto: alto_muro.value,
      largo: largo_muro.value,
      ancho: ancho_muro.value,
    });

    const cantidadDeLadrillos = calcularCantidadLadrillos({
      volumenLadrillo,
      volumenMuro,
    });

    const volumenTotal = volumenMuro + volumenLadrillo;

    actualizarDatos({ elemento: volumen_muro, valor: `${volumenMuro} m³` });
    actualizarDatos({
      elemento: volumen_ladrillo,
      valor: `${volumenLadrillo} m³`,
    });
    actualizarDatos({ elemento: volumen_total, valor: `${volumenTotal} m³` });
    actualizarDatos({
      elemento: cantidad_ladrillos,
      valor: cantidadDeLadrillos,
    });
  });
