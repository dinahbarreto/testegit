var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
var nota4 = parseFloat(prompt("Digite a quarta nota:"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    console.log("Insira suas 4 notas.");
} else {
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        console.log("O aluno foi aprovado com média " + media.toFixed(2));
    } else {
        console.log("O aluno foi reprovado com média " + media.toFixed(2));
    }
}
