import { logout } from "./auth.js";

    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', () => {
      logout()
        .then(() => {
          window.location.href = "../index.html"; 
        })
        .catch((error) => {
          alert(`Erro ao fazer logout: ${error.message}`);
        });
    });
