// Add event listener to the login button
document.getElementById("btnLogin").addEventListener("click", login);

// Function to handle the login process
function login() {
    // Get input values and trim the username
    const usernameInput = document.getElementById("inputName").value.trim();
    const passwordInput = document.getElementById("inputPass").value;

    // Find the user in the users list
    const user = users.find(user => user.username === usernameInput);

    if (user) {
        // User found, now check the password
        if (user.password === passwordInput) {
            WelcomeUser();
            setTimeout(function() {
                // Altere "outra-pasta/index.html" para o caminho da outra página que você deseja redirecionar
                window.location.href = "PagMain/index.html";
              }, 2000);
        } else {
            // Incorrect password
            openModal(`Incorret Password !`)
        }
    } else {
        // User not found
        openModal(`User not found !`)
    }
}