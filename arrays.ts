let frutas:string[] = ['Morango', 'Banana', 'Pêra', 'Uva', 'Abacaxi']



console.log("Frutas", frutas)
console.log("Frutas[1]", frutas[1])
console.log("Tamanho do array", frutas.length)
console.log("Último elemento: ", frutas[frutas.length - 1])


// Carregar a lista

frutas.sort()
for (let i = 0; i < frutas.length; i++) {
	console.log(`${ i + 1 } - ${frutas[1]}`)
}
