const showPasswordButton = document.getElementById('showPasswordButton');
const inputPass = document.getElementById('inputPass');

showPasswordButton.addEventListener('click', function() {
    if (inputPass.type === 'password') {
      inputPass.type = 'text';
      showPasswordButton.style.boxShadow = '5px 0px 0px 0px #4ae922';
    } else {
      inputPass.type = 'password';
      showPasswordButton.style.boxShadow = '5px 0px 0px 0px #000';
    }
  });
  

