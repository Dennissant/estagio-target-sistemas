// js/inverter-string.js
export default function reverseString() {
  const result = document.getElementById('stringResult');
  const wordInput = document.getElementById('stringInput');
  const word = wordInput.value;

  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  result.textContent = reversedWord;
}
