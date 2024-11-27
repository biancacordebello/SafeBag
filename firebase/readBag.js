import { readData } from "../firebase/db.js";

const notificaTexto = localStorage.getItem('ID');
const notificaID = localStorage.getItem('BAGID');

if (notificaTexto) { 
  console.log(`notificaTexto recuperado: ${notificaTexto}`);
  console.log(`ID recuperado: ${notificaID}`);

  readData(`Mala/ID/${notificaTexto}`, (data) => {
    console.log('Dados encontrados:', data);
    console.log(data.Liberado);
    const nomeContainer = document.getElementById('nome-dono');
    const telContainer = document.getElementById('telefone-dono');
    const cpfContainer = document.getElementById('cpf-dono');
    const emailContainer = document.getElementById('email-dono');
    const idContainer = document.getElementById('id-bagagem');
    const vooContainer = document.getElementById('destino');
    if (data) {
        
        nomeContainer.textContent = data.Dono;
        telContainer.textContent = data.Telefone;
        cpfContainer.textContent = data.CPF;
        emailContainer.textContent = data.Email;
        idContainer.textContent = 'BAGAGEM SAFE'+ notificaID;
        vooContainer.textContent = 'Destino Previsto: ' + data.Destino;
    } else {
        nomeContainer.textContent = 'Nenhum dado encontrado.';
    }
  });
}