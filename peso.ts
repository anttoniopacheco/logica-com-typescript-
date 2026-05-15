// Índice de massa corporal
import readline = require('readline-sync')

console.clear()

const nome: string = readline.question('Informe o nome da pessoa: ')
const peso: number = Number(readline.question('Informe o peso (kg): ')
const altura: number = Number(readline.question('Informe a altura (m): ')


const imc: number = peso / (altura * altura)	
let classificacao: string = ""


if (imc < 18.5) {
       classificacao = 'Baixo peso'
} else if (imc >= 18.5 && imc <= 24.9) {
       classificacao = 'Peso normal'
} else if (imc >= 25.0 && imc <= 29.9) {
	classificacao = 'Excesso de peso'
} else if (imc >= 30.0 && imc <= 34.9) {
	classificacao = 'Obessidade de classe 1'
} else if (imc >= 35.0 && imc <= 39.9) {
	classificacao = 'Obessidade de classe 2'
} else {
	classificacao = 'Obessidade de classe 3'
}


console.log(`Olá, ${nome}! Seu IMC é de ${imc.toFixed(2)} e sua classificação é: ${classificacao}`)




