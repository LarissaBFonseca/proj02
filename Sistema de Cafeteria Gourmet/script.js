let input = prompt("Digite o valor do pedido:");
let valorPedido = parseFloat(input);

if (!isNaN(valorPedido) && valorPedido > 0) {

    if (valorPedido > 50) {

        let fidelidade = prompt("Você possui Cartão Fidelidade? (sim/não)");

        if (fidelidade.toLowerCase() === "sim") {

            let valorFinal = valorPedido * 0.90;

            alert("Desconto aplicado!");
            alert("Valor final: R$ " + valorFinal.toFixed(2));

        } else if (fidelidade.toLowerCase() === "não" || fidelidade.toLowerCase() === "nao") {

            alert("Você ganhou um cookie de brinde! 🍪");
            alert("Valor a pagar: R$ " + valorPedido.toFixed(2));

        } else {
            alert("Resposta inválida.");
        }

    } else {

        alert("Valor a pagar: R$ " + valorPedido.toFixed(2));
        alert("Nenhum benefício aplicado.");

    }

} else {
    alert("Entrada inválida. Digite um valor válido.");
}