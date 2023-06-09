import './styles.css';
import {
  hideLoginError,
  showLoginState,
  showRegisterForm,
  showLoginForm,
  showApp,
  showLoginError,
  btnLogin,
  btnSignup,
  btnLogout
} from './ui'

import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  onAuthStateChanged, 
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  connectAuthEmulator
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDLdaAStyuLwIJmqHDLAuWMWXtgHJYmTcg",
  authDomain: "hoex-2e9f0.firebaseapp.com",
  projectId: "hoex-2e9f0",
  storageBucket: "hoex-2e9f0.appspot.com",
  messagingSenderId: "685922456326",
  appId: "1:685922456326:web:9034963e6cd7c31aa44487"
});

// Login
const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value
  const loginPassword = txtPassword.value

   try {
     await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
   }
   catch(error) {
     showLoginError(error)
  }
}

// Criar nova conta
const submitNewAccount = async () => {
  const name = txtName.value
  const email = txtEmail.value
  const password = txtPassword.value

  try {
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, { displayName: name }).catch(
      (error) => console.log(error)
    );
  }
  catch(error) {
    showLoginError(error)
  } 
}


const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      showApp()
      showLoginState(user)

      hideLoginError()
      //hideLinkError()
    }
    else {
      showLoginForm()
      lblAuthState.innerHTML = `Você não está logado, por favor crie uma conta ou entre.`
    }
  })
}

// Logout
const logout = async () => {
  await signOut(auth);
}

btnLogin.addEventListener("click", loginEmailPassword) 
btnSignup.addEventListener("click", submitNewAccount)
btnLogout.addEventListener("click", logout)
btnCreateAccount.addEventListener("click", () => {showRegisterForm()})
btnCancelRegister.addEventListener("click", () => {showLoginForm()})

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

monitorAuthState();