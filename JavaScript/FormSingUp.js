const showPasswordButtonMainDois = document.getElementById('showPasswordButtonMainDois');
const inputPassMainDois = document.getElementById('inputPassMainDois');
const inputPassMainDoisAgain = document.getElementById('inputPassMainDoisAgain');

showPasswordButtonMainDois.addEventListener('click', function(){
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

//
function openModal(message) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var modalContent = document.getElementById("modalContent");
  modalContent.innerText = message;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function showError(inputElement, message) {
  inputElement.classList.add("error");
  openModal(message);
}

function clearError(inputElement) {
  inputElement.classList.remove("error");
}

function validateForm() {
  var nameInput = document.getElementById("inputNameMainDois");
  var nameLabel = document.getElementById("labelNomeMainDois");
  var lastnameInput = document.getElementById("inputLastnameMainDois");
  var lastLameLabel = document.getElementById("labelLastNameMainDois");
  var userNameInput = document.getElementById("inputUserNameMainDois");
  var userNameLabel = document.getElementById("labelUserNameMainDois");
  var emailInput = document.getElementById("inputEmailMainDois");
  var emailLabel = document.getElementById("labelEmailMainDois");
  var passwordInput = document.getElementById("inputPassMainDois");
  var passwordLabel = document.getElementById("labelPassMainDois");
  var passwordAgainInput = document.getElementById("inputPassMainDoisAgain");
  var passwordAgainLabel = document.getElementById("labelPassMainDoisAgain");
  var pModal = document.getElementById("avisoForm");

  clearError(nameLabel);
  clearError(lastLameLabel);
  clearError(userNameLabel);
  clearError(emailLabel);
  clearError(passwordLabel);
  clearError(passwordAgainLabel);

  if (nameInput.value.trim() === "") {
    showError(nameLabel, "The name field must not be empty.");
    return false;
  }

  if (lastnameInput.value.trim() === "") {
    showError(lastLameLabel, "The lastname field must not be empty.");
    return false;
  }

  var userName = userNameInput.value.trim();
  if (userName === "") {
    showError(userNameLabel, "The Username field must not be empty.");
    return false;
  } else if (userName.length < 6 || userName.length > 12) {
    showError(userNameLabel, "The username must be between 6 and 12 characters.");
    return false;
  } else if (/^\d+$/.test(userName)) {
    showError(userNameLabel, "The username must not contain numbers.");
    return false;
  } else if (/\s/.test(userName)) {
    showError(userNameLabel, "The username must not contain spaces.");
    return false;
  }

  var email = emailInput.value.trim();
  if (!email.includes("@") || !email.includes(".")) {
    showError(emailLabel, "The email field must contain a valid email address.");
    return false;
  }

  var password = passwordInput.value;
  if (
    password.length < 8 ||
    !/[!@#$%^&*()_+-]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[A-Z]/.test(password)
  ) {
    showError(
      passwordLabel,
      "The password must be at least 8 characters long and contain at least one special character, one number, and one uppercase letter."
    );
    return false;
  }

  var passwordAgain = passwordAgainInput.value;
  if (password !== passwordAgain) {
    showError(passwordAgainLabel, "The password and password again fields must match.");
    return false;
  }

  return true;
}



































  
// Função para verificar o usuário no localStorage ao carregar a página
function checkUserOnLoad() {
  // Recuperar o valor do campo de username
  var username = document.getElementById("inputEmail").value;

  // Verificar se o usuário existe no localStorage
  var storedUser = localStorage.getItem("user");

  if (storedUser) {
    // Converter a string JSON para objeto
    var user = JSON.parse(storedUser);

    // Verificar se o username corresponde ao usuário salvo
    if (username === user.username) {
      // Exibir mensagem de boas-vindas
      var welcomeMessage = "Welcome " + user.name + " " + user.lastname + "!";
      alert(welcomeMessage);
    }
  }
}

// Adicionar um event listener ao carregar a página
window.addEventListener("load", checkUserOnLoad);

// Função para salvar o usuário no localStorage
function saveUser() {
    // Recuperar os valores dos campos
    var name = document.getElementById("inputNameMainDois").value;
    var lastname = document.getElementById("inputLastnameMainDois").value;
    var username = document.getElementById("inputUserNameMainDois").value;
    var password = document.getElementById("inputPassMainDois").value;
  
    // Criar um objeto usuário com os valores dos campos
    var user = {
      name: name,
      lastname: lastname,
      username: username,
      password: password
    };
  
    // Converter o objeto para uma string JSON
    var userJSON = JSON.stringify(user);
  
    // Salvar o usuário no localStorage com a chave "user"
    localStorage.setItem("user", userJSON);

    console.log(user)
  }
  
  // Adicionar um event listener ao botão "Save"
  var btnSave = document.getElementById("btnSave");
  btnSave.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que o formulário seja enviado
  
    // Chamar a função para validar os campos
    var isValid = validateForm();
  
    if (isValid) {
      // Se os campos forem válidos, chamar a função para salvar o usuário
      saveUser();
  
      // Exibir uma mensagem de sucesso
      alert("User saved successfully!");
  
      // Redirecionar para a página de login
      desfazerAcoes();
    }
  });

// Função para verificar o usuário no localStorage
function checkUser() {
    // Recuperar o valor do campo de username
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassMainDois").value;
  
    // Verificar se o usuário existe no localStorage
    var storedUser = localStorage.getItem("user");
  
    if (storedUser) {
      // Converter a string JSON para objeto
      var user = JSON.parse(storedUser);
  
      // Verificar se o username corresponde ao usuário salvo
      if (username === user.username) {
        // Verificar se a senha corresponde à senha do usuário salvo
        if (password === user.password) {
          // Exibir mensagem de boas-vindas
          var welcomeMessage = "Welcome " + user.name + " " + user.lastname + "!";
          alert(welcomeMessage);
        } else {
          // Exibir mensagem de erro de senha incorreta
          alert("Invalid password");
        }
      } else {
        // Exibir mensagem de erro de username inválido
        alert("Invalid username");
      }
    } else {
      // Exibir mensagem de erro de usuário não encontrado
      alert("User not found");
    }
  }

// Adicionar um event listener ao formulário de login
var formLogin = document.getElementById("login");
formLogin.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que o formulário seja enviado

  // Chamar a função para verificar o usuário
  checkUser();

  // Redirecionar para a página de boas-vindas (caso necessário)
  // window.location.href = "welcome.html";
});
