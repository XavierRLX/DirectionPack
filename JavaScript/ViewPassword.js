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
  
  const showPasswordButtonMainDois = document.getElementById('showPasswordButtonMainDois');
  const inputPassMainDois = document.getElementById('inputPassMainDois');
  const inputPassMainDoisAgain = document.getElementById('inputPassMainDoisAgain');
  
  showPasswordButtonMainDois.addEventListener('click', function () {
    if (inputPassMainDois.type === 'password') {
      inputPassMainDois.type = 'text';
      inputPassMainDoisAgain.type = 'text'
      showPasswordButtonMainDois.style.boxShadow = '5px 0px 0px 0px #4ae922';
  
    } else {
      inputPassMainDois.type = 'password';
      inputPassMainDoisAgain.type = 'password'
      showPasswordButtonMainDois.style.boxShadow = '5px 0px 0px 0px #e9c422';
    }
  });
  