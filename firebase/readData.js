import { subscribeToData, readData } from './db.js';



function lerDadosMala(){


    subscribeToData('Notifica', (data) => {
        console.log('Atualização em tempo real:', data);
        const idMala = document.getElementById('alerta');
        
        idMala.innerHTML='';
        if(data && typeof data === 'object'){
            Object.keys(data).forEach((notificaId) => {
                const notificaTexto = data[notificaId];
            
                const notificaElement = document.createElement('button');
                
                notificaElement.classList.add('id-mala');
                notificaElement.textContent = 'Bagagem SAFE' + notificaId;

          
                const notificaContent = document.createElement('div');
                notificaContent.classList.add("info-mala");
                const notificaP = document.createElement('p');
                
                readData(`Mala/ID/${notificaTexto}/Dono`, (mensagem)=>{
                  notificaP.textContent= "Destino Incorreto. Dono da mala: " + mensagem;
                });   
                notificaContent.appendChild(notificaP);

                const icon = document.createElement('span');
                icon.classList.add('icon');
                notificaElement.appendChild(icon);

                icon.addEventListener('click', ()=>{
                  event.stopPropagation();
                  icon.classList.toggle('active');
                  
                    if (notificaContent.style.maxHeight) {
                      notificaContent.style.maxHeight = null; 
                    } else {
                      notificaContent.style.maxHeight = notificaContent.scrollHeight + "px"; 
                    }
                });

               
                notificaElement.addEventListener('click', () => {
                  localStorage.setItem('ID', notificaTexto);
                  localStorage.setItem('BAGID', notificaId);
                  window.location.href = 'bag_details.html';
                  });

                  

            
                idMala.appendChild(notificaElement);
                idMala.appendChild(notificaContent);
              });
        }else{
            idMala.textContent="Nenhum alerta emitido"
        }
       
      });
    // }
  // });
}

function configurarBusca() {
  const txtBusca = document.getElementById('txtBusca');
  const btnBusca = document.getElementById('btnBusca');
  const idMala = document.getElementById('alerta');

  btnBusca.addEventListener('click', () => {
      // const filtro = txtBusca.value.toLowerCase();
      const notificacoes = idMala.querySelectorAll('.id-mala');


      if (txtBusca.value == 'Vinicius' || txtBusca.value == '') {
          lerDadosMala();
      } else {
        idMala.textContent = "Nenhum resultado encontrado";
      }
  });
}

// document.addEventListener('DOMContentLoaded', lerDadosMala);
document.addEventListener('DOMContentLoaded', () => {
  lerDadosMala();
  configurarBusca();
});