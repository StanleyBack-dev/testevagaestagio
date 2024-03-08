// ----------------------------------------------------------------------------------------- //
// EXERCÍCIO 01 - Valor da variável SOMA:
// ----------------------------------------------------------------------------------------- //

// Ao final do processamento, o valor da variável SOMA será 91. 

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log("Valor da variável SOMA: " + SOMA);


// ----------------------------------------------------------------------------------------- //
// EXERCÍCIO 02 - Programa para verificar se um número pertence à sequência de Fibonacci:
// ----------------------------------------------------------------------------------------- //

function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b <= numero) {
        if (b === numero) {
            return true; // O número pertence à sequência de Fibonacci
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return false; // O número não pertence à sequência de Fibonacci
}

let numero = 21; // Número a ser verificado
if (verificaFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}

// ----------------------------------------------------------------------------------------- //
// EXERCÍCIO 03 - Próximos elementos das sequências:
// ----------------------------------------------------------------------------------------- //

/* 

a) 1, 3, 5, 7, ___
Resposta: 9

b) 2, 4, 8, 16, 32, 64, ____
Resposta: 128

c) 0, 1, 4, 9, 16, 25, 36, ____
Resposta: 49

d) 4, 16, 36, 64, ____
Resposta: 100

e) 1, 1, 2, 3, 5, 8, ____
Resposta: 13

f) 2,10, 12, 16, 17, 18, 19, ____
Resposta: 20

*/

// ----------------------------------------------------------------------------------------- //
// EXERCÍCIO 04 - Descobrir qual interruptor controla cada lâmpada:
// ----------------------------------------------------------------------------------------- //

/* 

1. Ligue o primeiro interruptor e deixe-o ligado por alguns minutos.
2. Depois, desligue o primeiro interruptor e ligue o segundo interruptor.
3. Entre na sala das lâmpadas.
    .A lâmpada que estiver acesa corresponde ao segundo interruptor.
    .A lâmpada que estiver apagada e quente corresponde ao primeiro interruptor.
    .A lâmpada que estiver apagada e fria corresponde ao terceiro interruptor.
    
*/

// ----------------------------------------------------------------------------------------- //
// EXERCÍCIO 05 - Programa para inverter os caracteres de uma string:
// ----------------------------------------------------------------------------------------- //

function inverterString(string) {
    let invertedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    return invertedString;
}

let palavra = "hello"; // String a ser invertida
console.log("String original: " + palavra);
console.log("String invertida: " + inverterString(palavra));
