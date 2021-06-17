const senha = document.querySelector('.password');
const login = document.querySelector('.login');
const entrar = document.querySelector('.buttonLogin');
const check = document.querySelector('#agreement');
const buttonCheck = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#text-area');

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

function checkButton() {
  check.addEventListener('click', () => {
    if (this.checked) {
      buttonCheck.disabled = true;
    } else {
      buttonCheck.disabled = false;
    }
  });
}
checkButton();

/* referencia, requisito 20
https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea */
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

counterCaracter(this.value);
