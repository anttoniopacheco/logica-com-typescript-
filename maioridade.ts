import readline = require('readline-sync')

console.log("Verifiador de idade")

const idade = Number(readline.question("Qual sua idade? "))

if ( idade >= 18) {
	console.log("Você é MAIOR de idade. ")
}	else {
	console.log("Você é MENOR de idade. ")
}
