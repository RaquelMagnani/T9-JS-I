let valor1;
let valor2;
let total;

function capturarValor1(valor) {
    valor1 = parseInt(valor);
}

function capturarValor2(x) {
    valor2 = parseInt(x);
}

function somar() {
    total = valor1 + valor2;
    alert('O total da soma é: ' + total);
}

function subtrair() {
    total = valor1 - valor2;
    alert('O total da subtracao é: ' + total);
}

function multiplicar(){
    total = valor1 * valor2;
    alert('O total da multiplicacao é: ' +total);
}

function dividir() {
    total = valor1 / valor2;
    alert('O total da divisao é: ' +total);
}
