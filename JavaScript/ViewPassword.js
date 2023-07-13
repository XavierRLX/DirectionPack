const showPasswordButton = document.getElementById('showPasswordButton');
const inputPass = document.getElementById('inputPass');

showPasswordButton.addEventListener('click', function() {
    if (inputPass.type === 'password') {
      inputPass.type = 'text';
      showPasswordButton.style.boxShadow = '5px 0px 0px 0px #4ae922';
    } else {
      inputPass.type = 'password';
      showPasswordButton.style.boxShadow = '5px 0px 0px 0px #e9c422';
    }
  });
  


  document.getElementById('login').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('inputEmail');
    var passwordInput = document.getElementById('inputPass');
    
    if (!validateEmail(emailInput.value)) {
      event.preventDefault(); // Impede o envio do formulário
      document.getElementById('labelEmail').textContent = 'Email (inválido)';
      emailInput.classList.add('error');
    }
    
    if (passwordInput.value.length < 6) {
      event.preventDefault(); // Impede o envio do formulário
      document.getElementById('labelPass').textContent = 'Password (mínimo de 6 caracteres)';
      passwordInput.classList.add('error');
    }
  });
  
  function validateEmail(email) {
    // Expressão regular para validar o formato do email
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
 

  function ativarAnimacao() {
    let divLoginMain = document.getElementById('IdDivLogMain');
    divLoginMain.classList.add('SumirDireita');
  
    setTimeout(function() {
      divLoginMain.style.display = 'none';
    }, 1000); // 1000 milissegundos = 1 segundo
  }

  function ativarMainDois(){
    let logMainDois = document.getElementById('logMainDois');
    
    setTimeout(function(){
       logMainDois.style.display = 'inline';
     }, 1000);
  }

  function deleteImg(){
    let deleteImgNone = document.getElementById('img_2');
    deleteImgNone.style.display = 'none';
  }

  function LoginMain(){
    let LoginMainUp = document.getElementById('divLoginMainUp');
    let divImgMainUp = document.getElementById('divImgMainEdit');
    LoginMainUp.style.height = '90%'
    divImgMainUp.style.height = '10%'
  }

  
  document.getElementById('aSingUp').addEventListener('click', function() {
    ativarAnimacao();
    ativarMainDois();
    deleteImg();
    LoginMain();
  });