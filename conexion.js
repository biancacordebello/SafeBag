
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyCWW0yI8qT1I-5pTXJNjsy5x0A34luN7oM",
  authDomain: "teste-83f22.firebaseapp.com",
  databaseURL: "https://teste-83f22-default-rtdb.firebaseio.com",
  projectId: "teste-83f22",
  storageBucket: "teste-83f22.appspot.com",
  messagingSenderId: "638855288336",
  appId: "1:638855288336:web:c03233837bec2528541c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login realizado com sucesso
      const user = userCredential.user;
      alert('Login realizado com sucesso!');
      
      // Redirecionar para a home page
      window.location.href = "pages/main.html"; // ou o caminho para sua home page
    })
    .catch((error) => {
      alert(`Erro: ${error.message}`);
    });
});

// Verificação do estado de autenticação (opcional)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('Usuário já logado:', user.email);
  }
});


const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    alert('Logout realizado com sucesso!');
  }).catch((error) => {
    alert(`Erro ao fazer logout: ${error.message}`);
  });
});

// Verificação do estado de autenticação
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Se não estiver logado, redireciona de volta para a página de login
    window.location.href = "index.html";
  } else {
    console.log('Usuário logado:', user.email);
  }
});