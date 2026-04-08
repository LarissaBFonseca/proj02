let inputIdade = prompt("Digite sua idade:");
let idade = parseInt(inputIdade);

let estudante = prompt("Você é estudante? (sim/não)");

if (!isNaN(idade) && idade > 0) {

    let preco = 40;

    if (idade < 12 || idade > 60 || estudante.toLowerCase() === "sim") {

        preco = 20;

    }

    alert("Valor do ingresso: R$ " + preco.toFixed(2));

} else {
    alert("Entrada inválida. Digite uma idade válida.");
}