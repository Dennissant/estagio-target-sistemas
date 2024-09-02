export default function sumSequential() {
    // Código para calcular a soma sequencial
    const INDICE = 13;
    let K = 0;
    let SOMA = 0;
  
    while (K < INDICE) {
      K += 1;
      SOMA += K;
    }
  
    document.getElementById('result1').innerText = `Soma: ${SOMA}`;
  }
  