// Formulario de las pruebas
const formPruebas = document.getElementById('datos_pruebas');

// Se toma el canvas que dibujamos en el HTML y aplicamos el objeto Chart
const grafica = new Chart(document.getElementById('grafico_promedio'), {
  type: 'line',
  data: {
    // son 5 pruebas
    labels: ['prueba 1', 'prueba 2', 'prueba 3', 'prueba 4', 'prueba 5'],
    datasets: [
      {
        label: 'Promedio de la prueba',
        data: [0, 0, 0, 0, 0],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: true,
        pointBorderWidth: 5,
      },
      {
        label: 'Promedio',
        data: [0, 0, 0, 0, 0],
        borderColor: 'rgba(0, 255, 132, 1)',
      },
    ],
  },
});

function actualizarDatosGrafica(data, dataPromedio) {
  grafica.data.datasets[0].data = data;
  grafica.data.datasets[1].data = dataPromedio;
  grafica.update();
}

function calcularPromedio(datosDeLasPruebas) {
  let sumaTodasLasPruebas = 0;
  let arrParaGraficas = []; // va ser rellenado con el mismo numero varias veces [3, 3, 3, 3 ... n cantidad de datos de prueba]

  for (i = 0; i < datosDeLasPruebas.length; i++) {
    sumaTodasLasPruebas += parseFloat(datosDeLasPruebas[i]);
  }

  const promedio = sumaTodasLasPruebas / datosDeLasPruebas.length;

  datosDeLasPruebas.forEach((e) => {
    arrParaGraficas.push(promedio);
  });

  return [promedio, arrParaGraficas];
}

formPruebas.addEventListener('submit', (e) => {
  e.preventDefault();
  const datos = new FormData(formPruebas);

  // Con esto obtengo los valores del form de manera ordenada (todos los resultados solo de las pruebas) [1, 2, 3, 4, 5]
  const valoresPrueba = datos.getAll('valor_prueba');

  // Llamar a la funcion para calcular promedio
  const [promedio, arrParaGraficas] = calcularPromedio(valoresPrueba);

  // Actualizamos la grafica de los datos
  actualizarDatosGrafica(valoresPrueba, arrParaGraficas);

  // Actualizamos el valor del input de promedio
  document.getElementById('promedio').value = promedio.toFixed(2);
});
