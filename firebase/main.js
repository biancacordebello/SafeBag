// js/main.js

import { login } from './auth.js';

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
  
});

