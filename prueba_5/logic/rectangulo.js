const inputBase = document.getElementById('base')
const inputAltura = document.getElementById('altura')
const inputArea = document.getElementById('area')
const inputPerimetro = document.getElementById('perimetro')
const inputDiagonal = document.getElementById('diagonal')
const btnCalcular = document.getElementById('btnCalcular')

// tomar el evento del formulario "Se hace con document directo para evitar usar mas constantes"
document
  .getElementById('formulario-rectangulo')
  .addEventListener('submit', (e) => {
    e.preventDefault()

    let base = parseFloat(inputBase.value)
    let altura = parseFloat(inputAltura.value)

    let Area = base * altura
    inputArea.value = `${Area.toFixed(2)} m²`

    let Perimetro = base * 2 + altura * 2
    inputPerimetro.value = `${Perimetro.toFixed(2)} m²`

    let Diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))
    inputDiagonal.value = `${Diagonal.toFixed(2)} m²`
  })
