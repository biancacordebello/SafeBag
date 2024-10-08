import { subscribeToData } from './db.js';

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
                notificaP.textContent= notificaTexto;
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
                  window.location.href = 'bag_details.html';
                  });

                  

            
                idMala.appendChild(notificaElement);
                idMala.appendChild(notificaContent);
              });
        }else{
            idMala.textContent="Nnenhuma"
        }
       
      });
}
document.addEventListener('DOMContentLoaded', lerDadosMala);