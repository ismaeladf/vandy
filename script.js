document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o reload da página

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // Verificação simples de usuário e senha
    const validUsername = "vandy";
    const validPassword = "golfinha#68";

    if (username === validUsername && password === validPassword) {
      messageDiv.innerHTML = `
        <p style="color: green;">Login bem-sucedido!</p>
        <a href="https://lookerstudio.google.com/reporting/b2bbd72a-e1d8-4932-b21c-15de694786a8" target="_blank">Clique aqui para acessar</a>
      `;
    } else {
      messageDiv.textContent = "Usuário ou senha inválidos.";
    }
  });
