var users = [];

// Adicionar um usuário manualmente
var adUser = {
  name: "Renan",
  lastname: "Xavier",
  username: "RenanX",
  email: "renan@gmail.com",
  password: "RenanX1@" 
};

users.push(adUser);

function saveUsersToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}


function saveUser() {
    if (validateForm()) {
        var nameInput = document.getElementById("inputNameMainDois").value.trim();
        var lastnameInput = document.getElementById("inputLastnameMainDois").value.trim();
        var userNameInput = document.getElementById("inputUserNameMainDois").value.trim();
        var emailInput = document.getElementById("inputEmailMainDois").value.trim();
        var passwordInput = document.getElementById("inputPassMainDois").value;

        var user = {
            name: nameInput,
            lastname: lastnameInput,
            username: userNameInput,
            email: emailInput,
            password: passwordInput
        };

        users.push(user);

        // Limpar os campos do formulário após salvar o usuário
        document.getElementById("inputNameMainDois").value = "";
        document.getElementById("inputLastnameMainDois").value = "";
        document.getElementById("inputUserNameMainDois").value = "";
        document.getElementById("inputEmailMainDois").value = "";
        document.getElementById("inputPassMainDois").value = "";
        document.getElementById("inputPassMainDoisAgain").value = "";

        saveUsersToLocalStorage();
        openModal(`Successfully created user !`)

        console.log(users)

        desfazerAcoes();

    }
}

// Carregar os usuários do localStorage ao iniciar a página
function loadUsersFromLocalStorage() {
    var storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
}

loadUsersFromLocalStorage();
console.log(users);



