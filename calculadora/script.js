const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const multiplicacion = document.querySelector('#multiplicacion');
const division = document.querySelector('#division');
const resultado = document.querySelector('#resultado')

suma.addEventListener('click', function () {

    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value)
    const total = numero1 + numero2

    resultado.textContent = (total)

})

resta.addEventListener('click', function () {

    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const total = numero1 - numero2
    resultado.textContent = (total)

})

multiplicacion.addEventListener('click', function () {

    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const total = numero1 * numero2
    resultado.textContent = (total)



})

division.addEventListener('click', function(){

const numero1 = Number(num1.value);
const numero2 = Number(num2.value);
const total = numero1 / numero2
resultado.textContent = (total)



})