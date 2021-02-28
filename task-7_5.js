
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  event.target.value !=='' ? outputRef.textContent = event.target.value : outputRef.textContent = 'Незнакомец'
  })

