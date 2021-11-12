const senha = document.querySelector('.password');
const login = document.querySelector('.login');
const entrar = document.querySelector('.buttonLogin');

function alerta() {
  entrar.addEventListener('click', () => {
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
alerta();

const bntForm = document.querySelector('.submit-button');
const checkBox = document.querySelector('#agreement');

function checkButton() {
  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      bntForm.disabled = false;
    } else {
      bntForm.disabled = true;
    }
  });
}
checkButton();

const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');

function counterCaracter(valor) {
  const quantidade = 500;
  const total = valor.length;
  if (total <= quantidade) {
    const resto = quantidade - total;
    counter.innerHTML = resto;
  } else {
    textArea.value = valor.substr(0, quantidade);
  }
}

textArea.addEventListener('change', () => {
  const xablau = textArea.value;
  counterCaracter(xablau);
});

const submitbtn = document.querySelector('#submit-btn');
const form = ['Email:', 'Casa:', 'Família:', 'Matérias:', 'Avaliação:', 'Observações:'];
const subjects = document.querySelectorAll('.contents');
const evaluator = document.querySelectorAll('.evaluator');
const family = document.querySelectorAll('.containerFamily');
const numbersSubjects = [];

function checkFamily() {
  for (let index = 0; index < 3; index += 1) {
    if (family[index].checked) {
      sessionStorage.setItem('form4', family[index].value);
    }
  }
}

function checkStudies() {
  for (let index = 0; index < 6; index += 1) {
    if (subjects[index].checked) {
      numbersSubjects.push(` ${subjects[index].value}`);
    }
  }
  sessionStorage.setItem('form5', numbersSubjects);
}

function checkEvaluator() {
  for (let index = 0; index < 10; index += 1) {
    if (evaluator[index].checked) {
      sessionStorage.setItem('form6', evaluator[index].value);
    }
  }
}

submitbtn.addEventListener('click', () => {
  const containerMain = document.querySelectorAll('.containerMain');
  const house = document.querySelector('#house');
  sessionStorage.setItem('form0', containerMain[0].value);
  sessionStorage.setItem('form1', containerMain[1].value);
  sessionStorage.setItem('form2', containerMain[2].value);
  sessionStorage.setItem('form7', containerMain[3].value);
  sessionStorage.setItem('form3', house.value);
  checkFamily();
  checkStudies();
  checkEvaluator();
});

const main = document.querySelector('#evaluation-form');
submitbtn.addEventListener('click', (event) => {
  event.preventDefault();
  main.innerHTML = '';
});

submitbtn.addEventListener('click', () => {
  const name = sessionStorage.getItem(`form${0}`);
  const lastName = sessionStorage.getItem(`form${1}`);
  const mainForm = document.querySelector('#evaluation-form');
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${name} ${lastName}`;
  mainForm.appendChild(fullName);

  for (let index = 0; index < form.length; index += 1) {
    const paragraphName = document.createElement('p');
    paragraphName.innerText = `${form[index]} ${sessionStorage.getItem(`form${index + 2}`)}`;
    mainForm.appendChild(paragraphName);
  }
});
