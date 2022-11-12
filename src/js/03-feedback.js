import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormLocal, 500));


const STORAGE_KEY = 'feedback-form-state';


function onFormLocal(evt) {
  object[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(object));
};

  const object = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  console.log(typeof object);

    onUpdatePage();

function onFormSubmit(evt) {
evt.preventDefault();
console.log(`email: ${refs.email.value}, message: ${refs.message.value}`);
evt.target.reset();
localStorage.removeItem(STORAGE_KEY);
};


function onUpdatePage() {
    Object.entries(object).forEach(([key, value]) => {
        refs.form[key].value = value;
    })
};

