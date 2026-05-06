
    document.getElementById('toggle-senha').addEventListener('click', () => {
      const input = document.getElementById('senha');
      const icon  = document.getElementById('toggle-icon');
      const show  = input.type === 'password';
      input.type     = show ? 'text' : 'password';
      icon.className = show ? 'bi bi-eye-slash' : 'bi bi-eye';
    });

    
    function showFeedback(msg, type = 'error') {
      const box  = document.getElementById('feedback-msg');
      const text = document.getElementById('feedback-text');
      const icon = box.querySelector('i');
      box.className = `feedback-msg ${type}`;
      icon.className = type === 'error' ? 'bi bi-exclamation-circle-fill' : 'bi bi-check-circle-fill';
      text.textContent = msg;
    }


    document.addEventListener('DOMContentLoaded', () => {

      const form = document.getElementById('login-form');
      const btn  = document.getElementById('btn-submit');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const apolice = document.getElementById('apolice').value.trim();
        const senha   = document.getElementById('senha').value;

        if (!apolice) { showFeedback('Informe o número de apólice.'); return; }
        if (senha.length < 8) { showFeedback('A senha precisa ter pelo menos 8 caracteres.'); return; }

        btn.classList.add('loading');

        try {
          
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ apolice, senha }),
          });

          if (response.ok) {
            showFeedback('Login realizado! Redirecionando…', 'success');
          } else {
            const data = await response.json().catch(() => ({}));
            showFeedback(data.message || 'Apólice ou senha incorretos.');
          }
        } catch (err) {
          showFeedback('Não foi possível conectar ao servidor. Tente novamente.');
          console.error('Erro de login:', err);
        } finally {
          btn.classList.remove('loading');
        }
      });
    });