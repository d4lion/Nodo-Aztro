const inputRadio = document.getElementById('radio')
const inputPerimetro = document.getElementById('perimetro')
const inputArea = document.getElementById('area')

const btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', (e) => {
  e.preventDefault()

  let radio = parseFloat(inputRadio.value)

  let area = Math.PI * Math.pow(radio, 2)
  inputArea.value = `${area.toFixed(2)} m²`

  let perimetro = 2 * Math.PI * radio
  inputPerimetro.value = `${perimetro.toFixed(2)} m²`
})
