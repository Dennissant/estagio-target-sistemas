import data from '../assets/data/faturamento.json';

export default function analyzeBilling() {
  const faturamento = data;
  let total = 0;
  let count = 0;
  let min = Infinity;
  let max = -Infinity;

  faturamento.forEach(dia => {
    if (dia.valor !== 0) {
      total += dia.valor;
      count++;
      if (dia.valor < min) min = dia.valor;
      if (dia.valor > max) max = dia.valor;
    }
  });

  const media = total / count;
  const diasAcimaMedia = faturamento.filter(dia => dia.valor > media && dia.valor !== 0).length;

  document.getElementById('faturamentoResults').innerHTML = `
    Menor valor: R$ ${min.toFixed(2)}<br>
    Maior valor: R$ ${max.toFixed(2)}<br>
    Dias acima da média: ${diasAcimaMedia}
  `;
}
