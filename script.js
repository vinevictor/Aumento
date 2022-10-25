// // Lista de Exercicio - Aumento
var nome, salario, aumento, porcentagemAumento, salarioComAumento;

PegaNomeSalario();
CalculoAumento();
console.log("Olá " + nome + " seu salario aualmente é de R$" + salario + ",00. E com o aumento de " + porcentagemAumento + "% seu salario sera de R$" + salarioComAumento + ",00")

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

function CalculoAumento() {
    if (porcentagemAumento == 20) {
        aumento = parseInt(porcentagemAumento * salario) / 100;
    } else if (porcentagemAumento == 15) {
        aumento = parseInt(porcentagemAumento * salario) / 100;
    } else if (porcentagemAumento == 10) {
        aumento = parseInt(porcentagemAumento * salario) / 100;
    } else {
        aumento = parseInt(porcentagemAumento * salario) / 100;
    }
    salarioComAumento = salario + aumento;
    return aumento, salarioComAumento;

}

