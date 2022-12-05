const $btnCalcularSalario = document.querySelector('#btn-calcular-salario');
const $salarioAnualUsuario = document.querySelector('#salario-anual');

$btnCalcularSalario.onclick = function() {
  const MESES_EN_UN_ANIO = 12;
  const salarioMensual = $salarioAnualUsuario.value / MESES_EN_UN_ANIO;
  document.querySelector('#salario-mensual').value = salarioMensual;
  return false;

}