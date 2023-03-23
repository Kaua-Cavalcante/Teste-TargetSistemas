//Questão 1
function resultadoSoma() {
  let indice = 13;
  let soma = 0;
  let k = 0;

  while (k < indice) {
    k++;
    soma = soma + k;
  }

  document.getElementById("resultado1").textContent = soma;
}

// Questão 2
function verificarFibonacci() {
  const numero = Number(document.getElementById("numero").value);

  // Inicia a sequência com os primeiros números 0 e 1
  let anterior = 0;
  let atual = 1;

  if (numero == 0) {
    document.getElementById(
      "resultado2"
    ).innerHTML = `${numero} pertence à sequência de Fibonacci.`;
    return;
  }

  while (atual <= numero) {
    if (atual === numero) {
      document.getElementById(
        "resultado2"
      ).innerHTML = `${numero} pertence à sequência de Fibonacci.`;
      return;
    } else {
      document.getElementById(
        "resultado2"
      ).innerHTML = `${numero} não pertence à sequência de Fibonacci`;
    }

    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
}

//Questão 4
function calcularDistancia() {
  let distancia = 100;
  let velocidadeCarro = 110;
  let velocidadeCaminhao = 80;
  let tempoPedagio = 5 / 60; // 5 minutos convertidos para horas

  let tempoCarro = distancia / velocidadeCarro;
  let tempoCaminhao = distancia / velocidadeCaminhao + tempoPedagio * 2; // 2 pedágios

  let distanciaCarro = velocidadeCarro * tempoCarro;
  let distanciaCaminhao = distancia - velocidadeCaminhao * tempoCaminhao;

  if (distanciaCarro < distanciaCaminhao) {
    document.getElementById("resultado3").innerHTML =
      "O carro estará mais próximo de Ribeirão Preto.";
  } else {
    document.getElementById("resultado3").innerHTML =
      "O caminhão estará mais próximo de Ribeirão Preto.";
  }
}

//Questão 5
function inverterString(str) {
    let resultado = "";
    for(let i = str.length-1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

function inverter() {
    let frase = document.getElementById("frase").value;
    let resultado = inverterString(frase);
    document.getElementById("resultado4").innerHTML = resultado;
}