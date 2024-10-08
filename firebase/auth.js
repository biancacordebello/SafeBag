// js/auth.js

import app from './firebaseConfig.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js';

const auth = getAuth(app);

// Função para login
export const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login realizado com sucesso
      const user = userCredential.user;
    
      // Redirecionar para a home page
      window.location.href = "pages/main.html"; // ou o caminho para sua home page
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
          switch (errorCode) {
            case 'auth/invalid-email':
              errorMessage.textContent = "O e-mail fornecido é inválido.";
              break;
            case 'auth/user-disabled':
              errorMessage.textContent = "Este usuário foi desativado.";
              break;
            case 'auth/user-not-found':
              errorMessage.textContent = "Não há nenhum usuário correspondente a este e-mail.";
              break;
            case 'auth/invalid-credential':
              errorMessage.textContent = "E-mail ou Senha incorretos.";
              break;
            case 'auth/wrong-password':
              errorMessage.textContent = "A senha fornecida está errada.";
              break;
            default:
              errorMessage.textContent = "Erro desconhecido. Tente novamente.";
              break;
          }
    });
};

// Função para logout
export const logout = () => {
    return signOut(auth)
  };

// Verificação do estado de autenticação
export const checkAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

