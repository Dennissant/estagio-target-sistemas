export default function isFibonacci() {
    const number = parseInt(document.getElementById('fibonacciInput').value);
    let a = 0, b = 1, c = 0;
  
    while (c < number) {
      c = a + b;
      a = b;
      b = c;
    }
  
    const result = (c === number) ? `${number} pertence à sequência de Fibonacci` : `${number} não pertence à sequência de Fibonacci`;
    document.getElementById('fibonacciResult').innerText = result;
  }
  