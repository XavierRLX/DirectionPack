// Function to mask the email
function maskEmail(email) {
    const atIndex = email.indexOf("@");
    const maskedEmail = email.replace(email.slice(0, atIndex - 2), "*".repeat(atIndex - 2));
    return maskedEmail;
}


// Function to check if the username input is empty
function isUsernameEmpty() {
    const usernameInput = document.getElementById("inputName").value.trim();
    return usernameInput === "";
}

// Function to handle the "Forgot your password?" link click
function handleForgotPasswordClick(event) {
    event.preventDefault();

    if (isUsernameEmpty()) {
        openModal(`Enter your username...`);
    } else {
        const usernameInput = document.getElementById("inputName").value.trim();
        const foundUser = users.find(user => user.username === usernameInput);

        if (foundUser) {
            const emailSend = foundUser.email;
            const maskedEmail = maskEmail(emailSend);
            openModal(`Email sent to ${maskedEmail}`);
        } else {
            openModal("User not found !");
        }
    }
}

// Add event listener to the "Forgot your password?" link
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
forgotPasswordLink.addEventListener("click", handleForgotPasswordClick);