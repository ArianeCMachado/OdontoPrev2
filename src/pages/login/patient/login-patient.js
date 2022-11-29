import {
  filterDentistByLoginAndPassword,
  authDentists,
} from "../../../lib/storage.js";

export default () => {
  const containerLoginPatient = document.createElement('div');
  containerLoginPatient.classList.add('container-login-patient')    
  const templateLoginPatient = `    
  <div class="box">
    <div class="login-logo">
      <img class="logo-login" src="./assets/logo/logo-art.svg" alt="logo">
    </div>
    <form class="login-form">
      <p class="welcome">Bem-vindo de volta!</p>
      <input type="email" placeholder="Digite seu e-mail" id="input-email" class="input-login-patient">
      <input type="password" placeholder="Digite sua senha" id="input-password" class="input-login-patient">
      <a href="" class="forgot-password" id="id-forgot-password">Esqueci minha senha.</a>
      <p class="error-message-text" id="error-message"></p>

      <p class="text-patient-login">É beneficiário e não possui uma conta?</p>
      <a href="" class="btn-register">Cadastra-se</a>

      <button id="btn-login-patient" class="login-patient-btn">Entrar</button>
    </form>          
  </div>"
    `;
  containerLoginPatient.innerHTML = templateLoginPatient; 

  const emailPatient = containerLoginPatient.querySelector('#input-email');
  const passwordPatient = containerLoginPatient.querySelector('#input-password');
  const btnLoginPatient = containerLoginPatient.querySelector('#btn-login-patient');

  btnLoginPatient.addEventListener('click', () => {
    const dentist = filterDentistByLoginAndPassword(emailPatient.value, passwordPatient.value);
    if (dentist !== null) {
      const dentistId = authDentists(dentist.id);
      console.log(dentistId);
      window.location.hash = "#appointment";  
    } else {
      window.alert('erro');
    }
  })

    
  return containerLoginPatient;
};