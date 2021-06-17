const senha = document.querySelector('.password');
const login = document.querySelector('.login');
const entrar = document.querySelector('.buttonLogin');
const check = document.querySelector('#agreement');
const buttonCheck = document.querySelector('#submit-btn');

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
