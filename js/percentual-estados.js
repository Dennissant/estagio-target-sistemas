export default function stateShare() {
    const data = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      OUTROS: 19849.53,
    };
    const list = document.getElementById('percentualResults');
    
    const total = Object.values(data).reduce((acc, curr) => acc + curr, 0);
    let percentages = {};
  
    Object.entries(data).forEach(([state, value]) => {
      percentages[state] = ((value / total) * 100).toFixed(2);
    });
  
    list.innerHTML = Object.entries(percentages)
      .map(([state, percent]) => `${state}: ${percent}%`)
      .join('<br>');
  }
  