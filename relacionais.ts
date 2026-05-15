// Operadores relacionais >, <, ===, !==
const a: number = 10;
const b: number = 5;
const c: number = 6;

console.log('A > B', a > b);
console.log('C < A', c < a);
console.log('B === C', b === c);

// Operadores Lógicos
console.log('A > B AND C < A:', a > b && c < a);

// CORREÇÃO DA LINHA 14: Use o && para separar as duas perguntas
console.log('B === C AND C < A:', (b === c) && (c < a));

// Operador OR (||)
console.log('B || C < A:', b || c < a);
console.log('B === C OR C < A:', (b === c) || (c < a));
