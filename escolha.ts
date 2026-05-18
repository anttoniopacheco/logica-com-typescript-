import readline = require('readline-sync');

let loop: boolean = true;
let valores: number[] = []; // Array para guardar os preços dos pedidos

while (loop) {
    console.log("\n--- Combo para o lanche ---");

    const opcoes: string = readline.question("1 - Coca Pet com Bomba\n2 - Guarana Pet com Bomba\n3 - Bolo com cafe\n4 - Somente Cafe\nEscolha: ");

    switch (opcoes) {
        case "1":
            console.log("O Combo 1 custa R$ 10,00");
            valores.push(10.00);
            break;
        case "2":
            console.log("O combo 2 custa R$ 10,00");
            valores.push(10.00);
            break;
        case "3":
            console.log("O combo 3 custa R$ 7,50");
            valores.push(7.50);
            break; // Faltava este break!
        case "4":
            console.log("O Combo 4 custa R$ 2,50");
            valores.push(2.50);
            break;
        default:
            console.log("Ops! Opcao invalida. Informe numero de 1 a 4.");
            break;
    }

    const parar = readline.questionInt("\nDeseja algo a mais? (1 - Sim | 2 - Nao): ");
    
    // Lógica corrigida: Se 'parar' for igual a 2, loop vira 'false' e encerra.
    if (parar === 2) {
        loop = false;
    }
}

// Somando o total do array 'valores'
const total = valores.reduce((acc, curr) => acc + curr, 0);
console.log(`\nFim do pedido! O total a pagar e: R$ ${total.toFixed(2)}`);
