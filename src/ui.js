import { AuthErrorCodes } from 'firebase/auth';

export const txtName = document.querySelector('#txtName')
export const txtEmail = document.querySelector('#txtEmail')
export const txtPassword = document.querySelector('#txtPassword')

export const btnLogin = document.querySelector('#btnLogin')
export const btnSignup = document.querySelector('#btnSignup')

export const btnCreateAccount = document.querySelector('#btnCreateAccount')
export const btnCancelRegister = document.querySelector('#btnCancelRegister')

export const btnLogout = document.querySelector('#btnLogout')

export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lblAuthState')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')


export const showRegisterForm = () => {
  hideLoginError()
  inputName.style.display = 'block'
  buttonsCreateNewAccount.style.display = 'inline'
  buttonsLogin.style.display = 'none'
}

export const showLoginForm = () => {
  hideLoginError()
  login.style.display = 'block'
  inputName.style.display = 'none'
  buttonsCreateNewAccount.style.display = 'none'
  buttonsLogin.style.display = 'inline'
  app.style.display = 'none'
}

export const showApp = () => {
  login.style.display = 'none'
  inputName.style.display = 'none'
  app.style.display = 'block'
}

export const hideLoginError = () => {
  divLoginError.style.display = 'none'
  lblLoginErrorMessage.innerHTML = ''
}

export const showLoginError = (error) => {
  divLoginError.style.display = 'block'    
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `ERRO: A senha está incorreta.`
  }
  else if (error.code == AuthErrorCodes.EMAIL_EXISTS){
    lblLoginErrorMessage.innerHTML = `ERRO: Já existe uma conta associada ao email informado.`
  }
  else if (error.code == AuthErrorCodes.INVALID_EMAIL){
    lblLoginErrorMessage.innerHTML = `ERRO: O email informado é inválido.`
  }
  else {
    lblLoginErrorMessage.innerHTML = `ERRO: ${error.message}`      
  }
}

export const showLoginState = (user) => {
  lblAuthState.innerHTML = `Olá ${user.displayName} !`
}

hideLoginError()