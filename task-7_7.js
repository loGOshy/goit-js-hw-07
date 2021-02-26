const inputControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function updateFontSize (value) {textRef.style.fontSize = `${value}px`};

inputControlRef.addEventListener('input', event => updateFontSize(event.target.value));