import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
const testVar = {};

// console.log(form);
form.addEventListener('input', throttle(saveMessage, 500));
form.addEventListener('submit', onSubmit);

function saveMessage(event) {
  event.preventDefault();
  console.log();
  testVar.email = form.email.value;
  testVar.message = form.message.value;
  // console.log(testVar)
  localStorage.getItem('feedback-form-state');
  localStorage.setItem('feedback-form-state', JSON.stringify(testVar));
}
function onSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
function autoCheck() {
  const date = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!date) return;
  Object.keys(date).forEach(el => {
    form.elements[el].value = date[el];
  });
}
autoCheck();
