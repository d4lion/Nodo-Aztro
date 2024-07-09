const backColors = [
  'rgba(255, 99, 132)',
  'rgba(54, 162, 235)',
  'rgba(255, 206, 86)',
];

const grafico = new Chart(document.getElementById('pesticida-grafica'), {
  type: 'bar',
  data: {
    labels: [
      'Area del terreno',
      'Perimetro del terreno',
      'Cantidad de pesticida',
    ],
    datasets: [
      {
        label: 'Cantidades',
        data: [1, 1, 1],
        backgroundColor: backColors,
      },
    ],
  },
});

function actualizarDatos({ area, perimetro, pesticida }) {
  grafico.data.datasets[0].data = [area, perimetro, pesticida];
  grafico.update();
}
