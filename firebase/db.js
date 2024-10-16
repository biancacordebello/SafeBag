import app from './firebaseConfig.js';
import { getDatabase, ref, onValue, get } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
console.log('db.js foi carregado');
const database = getDatabase(app);

export const readData = (path, callback) => {
    get(ref(database, path))
      .then((snapshot) => {
        if (snapshot.exists()) {
          callback(snapshot.val());
        } else {
          console.log('Nenhum dado disponível.');
        }
      })
      .catch((error) => {
        console.error('Erro ao ler dados:', error);
      });
  };
  
export const subscribeToData = (path, callback) => {
    const dataRef = ref(database, path);
    onValue(dataRef, (snapshot) => {
      callback(snapshot.val());
    });
  };