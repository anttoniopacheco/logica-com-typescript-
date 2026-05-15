import readline = require('readline-sync')

console.clear()

const nomeAluno:string = readline.question('Informe o noome do aluno ')
const nota1:number = Number( readline.question('Informe a primeira nota '))
const nota2:number = Number( readline.question('Informe a segunda nota '))
const nota3:number = Number(readline.question('Informe a terceira nota '))
const numeroFaltas:number = Number(readline.question('Informe a quantidade de faltas ')) 			    
let situacao:string = ""


const media = (nota1 + nota2 + nota3)/3

if (media >= 7 && numeroFaltas < 5){
	situacao = 'Aprovado'
} else if (media >=5 && media < 7 && numeroFaltas < 3){
	situacao = 'Recuperação'
}

console.log('console.log(`Olá, ${nomeAluno}! Sua média é de ${media.toFixed(2)} e sua situação é ${situacao}`)Olá, ${nomeAluno}! Sua média é de ${media.toFixed(2)} e  sua situação é ${situacao}')


