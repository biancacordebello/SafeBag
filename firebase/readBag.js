import { readData } from "../firebase/db.js";

const notificaTexto = localStorage.getItem('ID');

if (notificaTexto) {
  console.log(`notificaTexto recuperado: ${notificaTexto}`);

  readData(`Mala/ID/${notificaTexto}`, (data) => {
    console.log('Dados encontrados:', data);
    console.log(data.Liberado);
    const nomeContainer = document.getElementById('nome-dono');
    const telContainer = document.getElementById('telefone-dono');
    const cpfContainer = document.getElementById('cpf-dono');
    const emailContainer = document.getElementById('email-dono');
    if (data) {
        
        nomeContainer.textContent = data.Dono;
        telContainer.textContent = data.Telefone;
        cpfContainer.textContent = data.CPF;
        emailContainer.textContent = data.Email;
    } else {
        nomeContainer.textContent = 'Nenhum dado encontrado.';
    }
  });
}