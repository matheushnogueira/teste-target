// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function reverterString(palavra) {
  let splitString = palavra.split('');
  let newArr = []

  for (let i = 0; i < splitString.length; i++) {
    const element = splitString[i];
    newArr.unshift(element)
  }

  console.log(`Palavra original: ${palavra}`)
  console.log(`Palavra invertida: ${newArr.join('')}`)
};



reverterString('banana');