// Function to display a modal with the given message
function openModal(message) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    const alertModal = document.getElementById("avisoForm");
    alertModal.innerText = message;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Function to display an error message, and highlight the corresponding input element
function showError(inputElement, message) {
    inputElement.classList.add("error");
    openModal(message);
}

// Function to clear the error style from the input element
function clearError(inputElement) {
    inputElement.classList.remove("error");
}

function WelcomeUser() {
    const h2 = document.getElementById("hModal");
    const btnModal = document.getElementById('btnModal');
    const usernameInput = document.getElementById("inputName").value.trim();
    const user = users.find(user => user.username === usernameInput);

    if (user) {
        h2.style.backgroundColor = '#e9c422'
        btnModal.style.display = 'none'
        h2.innerText = 'Welcome'
        openModal(` ${user.name} ${user.lastname} !`);
    } 
}