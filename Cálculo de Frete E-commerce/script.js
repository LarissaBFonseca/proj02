let input = prompt("Digite o valor da compra:");
let valorCompra = parseFloat(input);

if (!isNaN(valorCompra) && valorCompra > 0) {

    let regiao = prompt(
        "Escolha a região de entrega:\n" +
        "1 - Sul\n" +
        "2 - Sudeste\n" +
        "3 - Outras"
    );

    let frete = 0;

    if (valorCompra > 250) {

        frete = 0;
        alert("Parabéns! Você ganhou frete grátis 🚚");

    } else {

        if (regiao === "1") {
            frete = 20;
        } else if (regiao === "2") {
            frete = 10;
        } else if (regiao === "3") {
            frete = 30;
        } else {
            alert("Região inválida.");
        }

    }

    let total = valorCompra + frete;

    alert("Valor da compra: R$ " + valorCompra.toFixed(2));
    alert("Frete: R$ " + frete.toFixed(2));
    alert("Total: R$ " + total.toFixed(2));

} else {
    alert("Entrada inválida. Digite um valor válido.");
}