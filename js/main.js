// js/main.js

import { loadTemplate } from "./templates.js";
import { initFormValidation } from "./formValidation.js";

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const mainContent = document.querySelector("main");

  function navigate(page) {
    const template = loadTemplate(page);
    mainContent.innerHTML = template;

    if (page === "cadastro") {
      initFormValidation();
    }
  }

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = link.getAttribute("href").replace(".html", "");
      navigate(page);
    });
  });

  navigate("index");
});
