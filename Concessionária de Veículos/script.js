let input = prompt("Digite o valor do carro:");
let valorCarro = parseFloat(input);

if (!isNaN(valorCarro) && valorCarro > 0) {

    let forma = prompt(
        "Escolha a forma de pagamento:\n" +
        "1 - PIX (15% de desconto)\n" +
        "2 - Cartão de Crédito (até 24x, 5% de juros)\n" +
        "3 - Financiamento (até 48x, 20% de juros)"
    );

    if (forma === "1") {

        let valorFinal = valorCarro * 0.85;
        alert("Pagamento via PIX.");
        alert("Valor final: R$ " + valorFinal.toFixed(2));

    } else if (forma === "2") {

        let parcelasInput = prompt("Digite o número de parcelas (máx 24):");
        let parcelas = parseInt(parcelasInput);

        if (!isNaN(parcelas) && parcelas > 0 && parcelas <= 24) {

            let valorFinal = valorCarro * 1.05;
            let valorParcela = valorFinal / parcelas;

            alert("Pagamento no Cartão.");
            alert("Valor final: R$ " + valorFinal.toFixed(2));
            alert(parcelas + "x de R$ " + valorParcela.toFixed(2));

        } else {
            alert("Número de parcelas inválido.");
        }

    } else if (forma === "3") {

        let parcelasInput = prompt("Digite o número de parcelas (máx 48):");
        let parcelas = parseInt(parcelasInput);

        if (!isNaN(parcelas) && parcelas > 0 && parcelas <= 48) {

            let valorFinal = valorCarro * 1.20;
            let valorParcela = valorFinal / parcelas;

            alert("Financiamento selecionado.");
            alert("Valor final: R$ " + valorFinal.toFixed(2));
            alert(parcelas + "x de R$ " + valorParcela.toFixed(2));

        } else {
            alert("Número de parcelas inválido.");
        }

    } else {
        alert("Forma de pagamento inválida.");
    }

} else {
    alert("Entrada inválida. Digite um valor válido para o carro.");
}