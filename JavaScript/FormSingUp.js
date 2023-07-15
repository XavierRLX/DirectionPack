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

// Validation Forms SingUp

function validateForm() {

    // Check if the name field is empty.
    var name = document.getElementById("inputNameMainDois").value;
    var nameLabel = document.getElementById("labelNomeMainDois");
    var pModal = document.getElementById("avisoForm");
    if (name == "") {
      openModal();
      nameLabel.innerText = "* ";
      pModal.innerText = "The name field must not be empty."
      nameLabel.style.color = "red";
      return false;
    } else {
      nameLabel.innerText = "";
      nameLabel.style.color = "initial";
    }


    // Check if the lastname field is empty.
    var lastname = document.getElementById("inputLastnameMainDois").value;
    var lastLameLabel = document.getElementById("labelLastNameMainDois");
    if (lastname == "") {
      openModal();
      lastLameLabel.innerText = "* ";
      pModal.innerText = "The lastname field must not be empty."
      lastLameLabel.style.color = "red";
      return false;
    } else {
      lastLameLabel.innerText = "";
      lastLameLabel.style.color = "initial";
    }


   // Check if the Username field is empty.
var userName = document.getElementById("inputUserNameMainDois").value;
var userNameLabel = document.getElementById("labelUserNameMainDois");
var pModal = document.getElementById("avisoForm");

if (userName == "") {
  openModal();
  userNameLabel.innerText = "* ";
  pModal.innerText = "The Username field must not be empty.";
  userNameLabel.style.color = "red";

  return false;
} else if (userName.length < 6 || userName.length > 12) {
  openModal();
  userNameLabel.innerText = "* ";
  pModal.innerText = "The username must be between 6 and 12 characters.";
  userNameLabel.style.color = "red";

  return false;
} else if (/^\d+$/.test(userName)) {
  openModal();
  userNameLabel.innerText = "* ";
  pModal.innerText = "The username must not contain numbers.";
  userNameLabel.style.color = "red";

  return false;
} else if (/\s/.test(userName)) {
  openModal();
  userNameLabel.innerText = "* ";
  pModal.innerText = "The username must not contain spaces.";
  userNameLabel.style.color = "red";
  return false;
} else {
  userNameLabel.innerText = "";
  userNameLabel.style.color = "initial";
}


    // Check if the email field contains a valid email address.
    var email = document.getElementById("inputEmailMainDois").value;
    var emailLabel = document.getElementById("labelEmailMainDois");
    if (!email.includes("@") && !email.includes(".")) {
      openModal();
      pModal.innerText = "The email field must contain a valid email address.";
      emailLabel.style.color = "red";
      return false;
    } else {
      emailLabel.innerText = "";
      emailLabel.style.color = "initial";
    }
  
    // Check if the password field is at least 8 characters long and contains at least one special character, one number, and one uppercase letter.
    var password = document.getElementById("inputPassMainDois").value;
    var passwordLabel = document.getElementById("labelPassMainDois");
    if (password.length < 8 || !/[!@#$%^&*()_+-]/.test(password) || !/[0-9]/.test(password) || !/[A-Z]/.test(password)) {
      openModal();
      pModal.innerText = "The password must be at least 8 characters long and contain at least one special character, one number, and one uppercase letter.";
      passwordLabel.style.color = "red";
      return false;
    } else {
      passwordLabel.innerText = "";
      passwordLabel.style.color = "initial";
    }
  
    // Check if the password and password again fields match.
    var passwordAgain = document.getElementById("inputPassMainDoisAgain").value;
    var passwordAgainLabel = document.getElementById("labelPassMainDoisAgain");
    if (password != passwordAgain) {
      openModal();
      pModal.innerText = "The password and password again fields must match.";
      passwordAgainLabel.style.color = "red";
      return false;
    } else {
      passwordAgainLabel.innerText = "";
      passwordAgainLabel.style.color = "initial";
    }
  
    // The form is valid.
    openModal();
    pModal.innerText = "Successfully registered"
    return true;
  }