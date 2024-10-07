// js/main.js

import { login, logout } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage'); 

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    errorMessage.textContent = '';
    
    if (!email || !password) {
      errorMessage.textContent = "Por favor, preencha todos os campos.";
      return;
    }

    login(email, password, 
      (message) => {
        errorMessage.textContent = message;
      }, 
      () => {
        window.location.href = "pages/main.html"; // Redirecionar para a home page
      });
  });

  // const logoutBtn = document.getElementById('logoutBtn');
  // logoutBtn.addEventListener('click', () => {
  //   logout()
  //     .then(() => {
  //       window.location.href = "index.html"; // Redirecionar para a página de login após logout
  //     })
  //     .catch((error) => {
  //       alert(`Erro ao fazer logout: ${error.message}`);
  //     });
  // });
});
