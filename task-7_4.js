let value = 0;

const btnDecRef = document.querySelector('[data-action="decrement"]');
const btnIncRef = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

const decrement = () => { 
    value -=1;
    return counterValue.textContent = value
   }

const increment = () => { 
    value +=1;
    return counterValue.textContent = value
   }

btnDecRef.addEventListener('click', decrement);
btnIncRef.addEventListener('click', increment);

