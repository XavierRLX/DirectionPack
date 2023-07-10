const showPasswordButton = document.getElementById('showPasswordButton');
const inputPass = document.getElementById('inputPass');

showPasswordButton.addEventListener('click', function() {
  if (inputPass.type === 'password') {
    inputPass.type = 'text';
  } else {
    inputPass.type = 'password';
  }
});