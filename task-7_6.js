const inputRef = document.querySelector('#validation-input');

inputRef.style.border = '3px solid #bdbdbd';

const numOfChars = Number(inputRef.getAttribute('data-length'));
inputRef.setAttribute('placeholder', `Введи ${numOfChars} символов`); 

function valid() { inputRef.style.borderColor = '#4caf50' };
function invalid() { inputRef.style.borderColor = '#f44336' };


inputRef.addEventListener('change', e => {
  inputRef.value.length !== numOfChars ?
    invalid():
    valid();
  });
