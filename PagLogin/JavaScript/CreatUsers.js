// Array to store users' data
let users = [];

// Manually add a user to the users array
const adUser = {
  name: "Renan",
  lastname: "Xavier",
  username: "RenanX",
  email: "renanlima2000.aer@gmail.com",
  password: "RenanX1@"
};

users.push(adUser);

// Function to save users' data to the localStorage
function saveUsersToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to save a new user's data
function saveUser() {
  if (validateForm()) {
    // Retrieve input values from the form and trim them
    const nameInput = document.getElementById("inputNameMainDois").value.trim();
    const lastnameInput = document.getElementById("inputLastnameMainDois").value.trim();
    const userNameInput = document.getElementById("inputUserNameMainDois").value.trim();
    const emailInput = document.getElementById("inputEmailMainDois").value.trim();
    const passwordInput = document.getElementById("inputPassMainDois").value;

    // Create a new user object with the retrieved values
    const user = {
      name: nameInput,
      lastname: lastnameInput,
      username: userNameInput,
      email: emailInput,
      password: passwordInput
    };

    // Add the new user to the users array
    users.push(user);

    // Clear form fields after saving the user
    document.getElementById("inputNameMainDois").value = "";
    document.getElementById("inputLastnameMainDois").value = "";
    document.getElementById("inputUserNameMainDois").value = "";
    document.getElementById("inputEmailMainDois").value = "";
    document.getElementById("inputPassMainDois").value = "";
    document.getElementById("inputPassMainDoisAgain").value = "";

    // Save the updated users array to the localStorage
    saveUsersToLocalStorage();
    
    openModal(`Successfully created user !`);
    
    console.log(users);
    
    // Perform other actions (not provided in the code)
    desfazerAcoes();
  }
}

// Function to load users' data from the localStorage when the page starts
function loadUsersFromLocalStorage() {
  const storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
}

// Call the function to load users' data when the page starts
loadUsersFromLocalStorage();

console.log(users);
