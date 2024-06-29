const inputBase = document.getElementById('base')
const inputAltura = document.getElementById('altura')
const inputArea = document.getElementById('area')
const inputPerimetro = document.getElementById('perimetro')
const inputDiagonal = document.getElementById('diagonal')
const btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', (e) => {
  e.preventDefault()

  let base = parseFloat(inputBase.value)
  let altura = parseFloat(inputAltura.value)

  let Area = base * altura
  inputArea.value = `${Area} m²`

  let Perimetro = base * 2 + altura * 2
  inputPerimetro.value = `${Perimetro} m²`

  let Diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2)).toFixed(2)
  inputDiagonal.value = `${Diagonal} m²`
})
