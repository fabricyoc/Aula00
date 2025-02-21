import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

// Sua configuração do Firebase (copie do console Firebase)
const firebaseConfig = {

};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Realtime Database
const db = getDatabase(app);


import { ref, set } from "firebase/database";

function adicionarUsuario(userId, nome, idade) {
  const usuarioRef = ref(db, 'usuarios/' + userId);
  set(usuarioRef, {
    nome: nome,
    idade: idade
  });
}
