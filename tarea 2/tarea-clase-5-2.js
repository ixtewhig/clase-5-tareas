const $btnSaludo = document.querySelector('#input-ingreso');
const $userInfo = document.querySelector('#usuario-informacion');
const $nombreUsuario = document.querySelector('#nombre-usuario');
const $apellidoUsuario = document.querySelector('#apellido-usuario');
const $edadUsuario = document.querySelector('#edad-usuario');

$btnSaludo.onclick = function() {
    document.querySelector('h1').innerText = 'Bienvenido ' + $nombreUsuario.value;
    $userInfo.innerText = $nombreUsuario.value + ' ' + $apellidoUsuario.value + ' ' + $edadUsuario.value;
}