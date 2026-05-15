import readline = require('readline-sync');

console.log("--- Sistema de Médias Escolares ---");

// Entrada de dados
const n1 = Number(readline.question("Digite a nota 1: "));
const n2 = Number(readline.question("Digite a nota 2: "));
const n3 = Number(readline.question("Digite a nota 3: "));

// Cálculo da média
const media = (n1 + n2 + n3) / 3;
let situacao: string;

// Lógica de decisão (conforme a imagem f9fa41)
if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5 && media < 7) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log(`Média Final: ${media.toFixed(2)} - Situação: ${situacao}`);
