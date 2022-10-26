// // Lista de Exercicio - Aumento
var nome, salario, porcentagemAumento, salarioComAumento;

var repeat = true;
while (repeat) {
    PegaNomeSalario();
    CalculoAumento();
    console.log("Olá " + nome + " seu salario aualmente é de R$" + salario.toFixed(2) + " E com o aumento de " + porcentagemAumento + "% seu salario sera de R$" + salarioComAumento.toFixed(2))
    DesejaContinuar();
};
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
        salarioComAumento = salario * 1.20;
    } else if (porcentagemAumento == 15) {
        salarioComAumento = salario * 1.15;
    } else if (porcentagemAumento == 10) {
        salarioComAumento = salario * 1.10;
    } else {
        salarioComAumento = salario * 1.05;
    };
    return salarioComAumento;

}

function DesejaContinuar(continuar) {
    continuar = prompt("Deseja calcular novamente com novas Informações? S/N")
    if (continuar == "n" || continuar == "N") {
        repeat = false;

    } else {
        console.clear();
    }

}

