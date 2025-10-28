// js/templates.js

export function loadTemplate(page) {
  switch (page) {
    case "index":
      return `
        <section>
          <h2>Bem-vindo à ONG Amigos de Quatro Patas 🐾</h2>
          <p>Nosso objetivo é cuidar e encontrar lares para animais abandonados.</p>
        </section>
      `;
    case "projetos":
      return `
        <section>
          <h2>Projetos e Ações</h2>
          <p>Conheça nossos projetos de resgate, vacinação e adoção responsável.</p>
        </section>
      `;
    case "cadastro":
      return `
        <section>
          <h2>Cadastro de Voluntário</h2>
          <form id="formCadastro">
            <label>Nome:</label>
            <input type="text" id="nome" required>

            <label>Email:</label>
            <input type="email" id="email" required>

            <label>Telefone:</label>
            <input type="tel" id="telefone" required>

            <button type="submit">Enviar</button>
          </form>
          <p id="mensagem"></p>
        </section>
      `;
    default:
      return `<h2>Página não encontrada 😕</h2>`;
  }
}
