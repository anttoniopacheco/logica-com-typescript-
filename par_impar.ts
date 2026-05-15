import readline = require('readline-sync');

console.log("--- Verificador de Par ou Ímpar ---");

// Recebe o número do usuário e converte para tipo Number
const numero = Number(readline.question("Digite um numero inteiro: "));

// A lógica: se o resto da divisão por 2 for zero, é par
if (numero % 2 === 0) {
    console.log(`O numero ${numero} é PAR!`);
} else {
    console.log(`O numero ${numero} é ÍMPAR!`);
}
