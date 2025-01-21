// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


function quadradoPerfeito(number) {
  const raiz = Math.sqrt(number);
  return raiz === Math.floor(raiz);
};

function isFibonacci(number) {
  const condition1 = 5 * Math.pow(number, 2) + 4;
  const condition2 = 5 * Math.pow(number, 2) - 4;

  return quadradoPerfeito(condition1) || quadradoPerfeito(condition2);
};

const number = 100;

if (isFibonacci(number)) {
  console.log(`O número ${number} pertence a sequência Fibonacci`);
} else {
  console.log(`O número ${number} não pertence a sequência Fibonacci`);
};