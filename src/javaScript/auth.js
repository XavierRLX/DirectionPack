// // Verifica se o usuário está logado
// function checkLoggedIn() {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");

//     if (!isLoggedIn) {
//         window.location.href = "/login";
//     } else {
//         const loggedInFullName = localStorage.getItem("loggedInFullName");

//         if (loggedInFullName) {
//             document.getElementById("welcomeMessage").textContent = `${loggedInFullName}`;
//         }
//     }
// }

// // Logout
// function logout() {
//     // Remove as informações de login do localStorage
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("loggedInFullName");

//     // Redireciona para a página de login
//     window.location.href = "/login";
// }

// auth.js

function checkLoggedIn() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Se não estiver logado, redireciona para a página de login
        window.location.href = "/login";
    } else {
        // Se estiver logado, redireciona para a página home
        window.location.href = "/home";
    }
}

function logout() {
    // ... (código anterior)
}

