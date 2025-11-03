function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}


// Função que recebe outra função (Callback)

function calcular(a, b, operacao) {
  return operacao(a, b);
}

// Exemplo de uso do callback:
console.log("Soma (callback):", calcular(10, 5, soma));
console.log("Divisão (callback):", calcular(10, 2, divisao));

// Manipulação de Arrays
const numeros = [10, 21, 32, 43, 54, 65, 76, 87, 98];

// Arrow function para filtrar números pares
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", numerosPares);

// Função calcular média
const calcularMedia = function(arr) {
  const soma = arr.reduce((acc, val) => acc + val, 0);
  return soma / arr.length;
};

console.log("Média dos números pares:", calcularMedia(numerosPares));

// Arrow function para imprimir resultados formatados
const mostrarResultado = (titulo, valor) => {
  console.log(`🔹 ${titulo}: ${valor}`);
};

// Usando a arrow function
mostrarResultado("Média geral", calcularMedia(numeros));
mostrarResultado("Multiplicação (callback)", calcular(4, 6, multiplicacao));
