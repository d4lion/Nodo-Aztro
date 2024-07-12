const input_dias_trabajados = document.getElementById('dias_trabajados');
const input_horas_extra_diurnas = document.getElementById(
  'horas_extra_diurnas'
);
const input_horas_extra_nocturnas = document.getElementById(
  'horas_extra_nocturna'
);
const input_horas_extra_festivos = document.getElementById(
  'horas_extra_festivos'
);
const input_salario_bruto = document.getElementById('input_salario_bruto');
const input_salario_neto = document.getElementById('input_salario_neto');

function calcularSalario({
  dias_trabajados: dt,
  horas_nocturas: hn = 0,
  horas_diurnas: hd = 0,
  horas_festivos: hf = 0,
  valor_dia: vd,
  valor_hora_nocturna: vhn = 0,
  valor_hora_diurna: vhd = 0,
  valor_hora_festivo: vhf = 0,
}) {
  const total_dias_trabajados = dt * vd;
  const total_horas_extra = hn * vhn + hd * vhd + hf * vhf;

  const salarioNeto = total_dias_trabajados + total_horas_extra;

  const deduccion_salud = salarioNeto * 0.04;
  const deduccion_pension = salarioNeto * 0.04;
  const deduccion_alimentacion = salarioNeto * 0.04;
  const total_deducciones =
    deduccion_alimentacion + deduccion_pension + deduccion_salud;

  const salarioBruto = salarioNeto - total_deducciones;

  return { salarioBruto, salarioNeto };
}

function actualizarInputs({ element: e, data }) {
  const monedaLocal = new Intl.NumberFormat().format(data);
  e.value = `$${monedaLocal}`;
}

document
  .getElementById('formulario-rectangulo')
  .addEventListener('submit', (e) => {
    e.preventDefault();

    const dias_trabajados = parseFloat(input_dias_trabajados.value);
    const horas_extra_diurnas = parseFloat(input_horas_extra_diurnas.value);
    const horas_extra_nocturnas = parseFloat(input_horas_extra_nocturnas.value);
    const horas_extra_festivos = parseFloat(input_horas_extra_festivos.value);

    const { salarioBruto, salarioNeto } = calcularSalario({
      dias_trabajados: dias_trabajados,
      valor_dia: 43000,
      horas_diurnas: horas_extra_diurnas,
      horas_nocturas: horas_extra_nocturnas,
      horas_festivos: horas_extra_festivos,
      valor_hora_diurna: 6915,
      valor_hora_nocturna: 9681,
      valor_hora_festivo: 11064,
    });

    actualizarInputs({ element: input_salario_bruto, data: salarioBruto });
    actualizarInputs({ element: input_salario_neto, data: salarioNeto });
  });
