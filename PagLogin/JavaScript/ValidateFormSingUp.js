

// Function to validate the user registration form
function validateForm() {
    // Get input elements and corresponding labels
    const nameInput = document.getElementById("inputNameMainDois");
    const nameLabel = document.getElementById("labelNomeMainDois");
    const lastnameInput = document.getElementById("inputLastnameMainDois");
    const lastNameLabel = document.getElementById("labelLastNameMainDois");
    const userNameInput = document.getElementById("inputUserNameMainDois");
    const userNameLabel = document.getElementById("labelUserNameMainDois");
    const emailInput = document.getElementById("inputEmailMainDois");
    const emailLabel = document.getElementById("labelEmailMainDois");
    const passwordInput = document.getElementById("inputPassMainDois");
    const passwordLabel = document.getElementById("labelPassMainDois");
    const passwordAgainInput = document.getElementById("inputPassMainDoisAgain");
    const passwordAgainLabel = document.getElementById("labelPassMainDoisAgain");

    // Helper function to show error message and return false to stop form submission
    const showErrorAndReturnFalse = (inputElement, message) => {
        showError(inputElement, message);
        return false;
    };

    // Clear any previous error styles
    clearError(nameLabel);
    clearError(lastNameLabel);
    clearError(userNameLabel);
    clearError(emailLabel);
    clearError(passwordLabel);
    clearError(passwordAgainLabel);

    // Validate name field
    const name = nameInput.value.trim();
    if (name === "") {
        return showErrorAndReturnFalse(nameLabel, "The name field must not be empty.");
    }

    // Validate lastname field
    const lastName = lastnameInput.value.trim();
    if (lastName === "") {
        return showErrorAndReturnFalse(lastNameLabel, "The lastname field must not be empty.");
    }

    // Validate username field
    const userName = userNameInput.value.trim();
    if (userName === "") {
        return showErrorAndReturnFalse(userNameLabel, "The Username field must not be empty.");
    } else if (userName.length < 6 || userName.length > 12 || /\d/.test(userName) || /\s/.test(userName)) {
        return showErrorAndReturnFalse(userNameLabel, "The username must be between 6 and 12 characters and not contain numbers or spaces.");
    }

    // Validate email field
    const email = emailInput.value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        return showErrorAndReturnFalse(emailLabel, "The email field must contain a valid email address.");
    }

    // Validate password field
    const password = passwordInput.value;
    if (
        password.length < 14 ||
        !/[!@#$%^&*()_+-]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[A-Z]/.test(password)
    ) {
        return showErrorAndReturnFalse(
            passwordLabel,
            "The password must be at least 8 characters long and contain at least one special character, one number, and one uppercase letter."
        );
    }

    // Validate password again field
    const passwordAgain = passwordAgainInput.value;
    if (password !== passwordAgain) {
        return showErrorAndReturnFalse(passwordAgainLabel, "The password and password again fields must match.");
    }

    // Check if the username already exists
    const isUsernameExists = users.some(user => user.username === userName);
    if (isUsernameExists) {
        return showErrorAndReturnFalse(userNameLabel, "This username already exists.");
    }

    return true;
}
