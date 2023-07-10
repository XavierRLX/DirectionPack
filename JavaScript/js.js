const showPasswordButton = document.getElementById('showPasswordButton');
const inputPass = document.getElementById('inputPass');

showPasswordButton.addEventListener('click', function() {
  if (inputPass.type === 'password') {
    inputPass.type = 'text';
    showPasswordButton.style.boxShadow = '5 0 0 0 #4fda0e'
  } else {
    inputPass.type = 'password';
  }
});

