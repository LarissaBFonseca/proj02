let inputSalario = prompt("Digite o seu salário:");
let salario = parseFloat(inputSalario);

let inputParcela = prompt("Digite o valor da parcela desejada:");
let parcela = parseFloat(inputParcela);

if (!isNaN(salario) && salario > 0 && !isNaN(parcela) && parcela > 0) {

    let limite = salario * 0.30;

    if (parcela > limite) {

        alert("Empréstimo Negado: Parcela muito alta.");

    } else {

        alert("Empréstimo Pré-aprovado.");

    }

} else {
    alert("Entrada inválida. Digite valores numéricos válidos.");
}