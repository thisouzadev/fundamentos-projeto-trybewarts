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
