// js/formValidation.js

export function initFormValidation() {
  const form = document.getElementById("formCadastro");
  const mensagem = document.getElementById("mensagem");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if (!nome || !email || !telefone) {
      mensagem.textContent = "⚠️ Preencha todos os campos corretamente!";
      mensagem.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      mensagem.textContent = "⚠️ E-mail inválido!";
      mensagem.style.color = "red";
      return;
    }

    mensagem.textContent = "✅ Cadastro enviado com sucesso!";
    mensagem.style.color = "green";

    localStorage.setItem("cadastroVoluntario", JSON.stringify({ nome, email, telefone }));
    form.reset();
  });
}
