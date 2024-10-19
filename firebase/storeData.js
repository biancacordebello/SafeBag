import app from './firebaseConfig.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js';
const database = getDatabase(app);

const userForm = document.getElementById('form');

function validarID(id) {
    const regex = /^[a-zA-Z0-9_]+$ /;
    return regex.test(id);
}

userForm.addEventListener('submit', (e) => {
  e.preventDefault();  

  const idTag = document.getElementById('tag').value;
  const nome = document.getElementById('nome').value;
  const voo = document.getElementById('voo').value;
  const cpf = document.getElementById('cpf').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  if (!validarID(idTag)) {
    document.getElementById("errorMessage").textContent = "ID inválido. Apenas letras, números e underscores são permitidos.";
    return;
}


  const userRef = ref(database, 'Mala/ID/'+ idTag);  

  set(userRef, {
    Dono: nome,
    Destino: voo,
    CPF: cpf,
    Email: email,
    Telefone: telefone,
    Status: false
  })
  .then(() => {
    document.getElementById('errorMessage').style.color='#ffc079e1';
    document.getElementById('errorMessage').textContent = 'Dados gravados com sucesso!';
    userForm.reset();
  })
  .catch((error) => {
    console.log('erro: ${error}');
    document.getElementById('errorMessage').textContent = `Erro ao gravar dados: ${error}`;
  });
});
