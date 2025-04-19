//  завдання 1 
const radios = document.querySelectorAll('input[name="color"]');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    document.body.style.backgroundColor = radio.value;
  });
});


document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;
//  завдання 2
const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
  output.textContent = input.value.trim() !== '' ? input.value : 'незнайомець';
});
//  завдання 3
const inputValidation = document.getElementById('validation-input');
const requiredLength = Number(inputValidation.dataset.length);

inputValidation.addEventListener('blur', () => {
  const valueLength = inputValidation.value.length;

  if (valueLength === requiredLength) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.add('invalid');
    inputValidation.classList.remove('valid');
  }
});
//  завдання 4
const sizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

const updateFontSize = () => {
  text.style.fontSize = `${sizeControl.value}px`;
};

sizeControl.addEventListener('input', updateFontSize);


updateFontSize();
