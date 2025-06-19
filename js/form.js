document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formContato');
  const feedback = document.getElementById('mensagem-feedback');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Coleta os dados
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validações
    if (!nome || !email || !assunto || !mensagem) {
      mostrarFeedback('Por favor, preencha todos os campos.', false);
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      mostrarFeedback('E-mail inválido.', false);
      return;
    }

    if (mensagem.length < 20) {
      mostrarFeedback('A mensagem deve conter no mínimo 20 caracteres.', false);
      return;
    }

    // Se tudo estiver certo
    mostrarFeedback('Mensagem enviada com sucesso!', true);
    form.reset();
  });

  function mostrarFeedback(msg, sucesso) {
    feedback.textContent = msg;
    feedback.className = sucesso ? 'sucesso' : 'erro';
  }
});
