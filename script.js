// // Lista de Exercicio - Aumento
var nome, salario, aumento, porcentagemAumento, salarioComAumento;

PegaNomeSalario();
CalculoAumento();


function PegaNomeSalario() {
    nome = prompt("Informe seu Nome:");
    salario = parseInt(prompt("Informe o Salario:"));
    if (salario <= 1500) {
        porcentagemAumento = 20;
    } else if (salario >= 1501 && salario <= 2000) {
        porcentagemAumento = 15;
    } else if (salario >= 2001 && salario <= 3000) {
        porcentagemAumento = 10;
    } else {
        porcentagemAumento = 5;
    }
    return nome, salario, porcentagemAumento;
};

function CalculoAumento(porcentagemAumento) {
    if (porcentagemAumento == 20) {
        aumento = (porcentagemAumento * salario) / 100;
    } else if (porcentagemAumento == 15) {
        aumento = (porcentagemAumento * salario) / 100;
    } else if (porcentagemAumento == 10) {
        aumento = (porcentagemAumento * salario) / 100;
    } else {
        aumento = (porcentagemAumento * salario) / 100;
    }
    salarioComAumento = salario + aumento;
    return aumento, salarioComAumento;

}

