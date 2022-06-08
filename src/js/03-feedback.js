import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
console.log(form);
form.addEventListener('input', changes);

function changes(event) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
  console.log(event.target.value);
}
