let num1 = prompt('Digite o primeiro número: ');
const sinal = prompt('Digite a operação: ');
let num2 = prompt('Digite o segundo número: ');
let resultado;

num1 = parseInt(num1);
num2 = parseInt(num2);

if (sinal == "+"){
    resultado = num1 + num2;
    alert(`o resultado é: ${resultado}`);
}else if (sinal == '-'){
    resultado = num1 - num2;
    alert(`o resultado é: ${resultado}`);
}else if (sinal == '*'){
    resultado = num1 * num2;
    alert(`o resultado é: ${resultado}`);
}else if (sinal == '/' && num2 != 0){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    resultado = num1/num2;
    alert(`o resultado é: ${resultado}`);
}else{
    alert('Nenhuma operação encontrada');
}

