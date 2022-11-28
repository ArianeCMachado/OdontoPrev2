export default () => {
  const containerLoginDentist = document.createElement('div');    
  containerLoginDentist.classList.add('container-login-dentist')    
  const templateLoginDentist = `    
      <div class="login-logo">
      <img class="logo-login" src="./assets/logo/logo-art.svg" alt="logo">
      </div>

      <div class="login-form">       

        <form class="login-form">
          <p class="welcome">Bem-vindo de volta!</p>
          <input type="email" placeholder="Digite seu e-mail" id="input-email" class="input-login-dentist">
          <input type="password" placeholder="Digite sua senha" id="input-password" class="input-login-dentist">
          <a href="" class="forgot-password" id="id-forgot-password">Esqueci minha senha.</a>
          <p class="error-message-text" id="error-message"></p>

          <p class="text-dentist-login">Ainda não é um dentista OdontoPrev?</p>
          <a href="" class="btn-register">Cadastra-se</a>

          <button id="btn-login-dentist" class="login-dentist-btn">Entrar</button>
        </form>          
      </div>

    `;
  containerLoginDentist.innerHTML = templateLoginDentist; 

  const emailDentist = containerLoginDentist.querySelector('#input-email');
  const passwordDentist = containerLoginDentist.querySelector('#input-password');
  const btnLoginDentist = containerLoginDentist.querySelector('#btn-login-dentist');

  btnLoginDentist.addEventListener('click', () => {
    window.location.hash = '#schedule'  
  })

  return containerLoginDentist;
};