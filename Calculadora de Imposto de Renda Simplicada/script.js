let inputSalario = prompt("Digite seu salário bruto:");
let salario = parseFloat(inputSalario);

if (!isNaN(salario) && salario > 0) {

    let imposto = 0;

    if (salario <= 2112) {

        imposto = 0;

    } else if (salario <= 2826.65) {

        imposto = salario * 0.075;

    } else if (salario <= 3751.05) {

        imposto = salario * 0.15;

    } else {

        imposto = salario * 0.225;

    }

    let salarioLiquido = salario - imposto;

    alert("Salário bruto: R$ " + salario.toFixed(2));
    alert("Imposto: R$ " + imposto.toFixed(2));
    alert("Salário líquido: R$ " + salarioLiquido.toFixed(2));

} else {
    alert("Entrada inválida. Digite um valor válido.");
}