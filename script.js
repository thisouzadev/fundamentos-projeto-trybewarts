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
