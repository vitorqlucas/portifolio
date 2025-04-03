// Script para um possível menu responsivo no futuro
const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');

// Caso o menu seja adicionado futuramente
if (menu && nav) {
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
  };
}

// Criação de um elemento de feedback que será usado para mostrar mensagens no formulário
let feedbackDiv = document.createElement('div');
feedbackDiv.className = 'form-feedback';
document.getElementById('contato').appendChild(feedbackDiv);

// Função para mostrar mensagens de erro ou sucesso
function mostrarMensagem(texto, tipo = 'erro') {
  feedbackDiv.textContent = texto;
  feedbackDiv.style.backgroundColor = tipo === 'erro' ? '#ff4d4d' : '#4CAF50';
  feedbackDiv.style.display = 'block';

  // Esconde a mensagem após 4 segundos
  setTimeout(() => {
    feedbackDiv.style.display = 'none';
  }, 4000);
}

// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita o envio padrão do formulário

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mails

  // Verificações dos campos
  if (nome === '') {
    mostrarMensagem('Por favor, preencha o campo Nome.');
    return;
  }

  if (!emailRegex.test(email)) {
    mostrarMensagem('Por favor, insira um e-mail válido.');
    return;
  }

  if (mensagem === '') {
    mostrarMensagem('Por favor, escreva sua mensagem.');
    return;
  }

  // Se tudo estiver correto, mostra mensagem de sucesso
  mostrarMensagem(`Mensagem enviada com sucesso! Obrigado pelo contato, ${nome}.`, 'sucesso');

  // Limpa o formulário
  this.reset();
});
