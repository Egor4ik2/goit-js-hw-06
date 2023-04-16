const input = document.getElementById('validation-input');

input.addEventListener('blur', (event) => {
  const inputValue = event.target.value;
  const requiredLength = parseInt(input.dataset.length);
  

  if (inputValue.length === requiredLength) {
 
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
 
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});