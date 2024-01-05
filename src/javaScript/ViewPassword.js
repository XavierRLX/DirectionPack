// Get the elements for the first password input field
const showPasswordButton = document.getElementById('showPasswordButton');
const inputPass = document.getElementById('inputPass');

// Function to toggle password visibility for the first password input
const togglePasswordVisibility = () => {
  const type = inputPass.type;
  // Toggle password visibility
  inputPass.type = type === 'password' ? 'text' : 'password';
  // Change the button's box shadow based on password visibility
  showPasswordButton.style.boxShadow = type === 'password'
    ? '5px 0px 0px 0px #4ae922' // Green shadow when password is visible
    : '5px 0px 0px 0px #e9c422'; // Yellow shadow when password is hidden
};

// Add event listener to the button for the first password input
showPasswordButton.addEventListener('click', togglePasswordVisibility);



/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get the elements for the second set of password input fields
const showPasswordButtonMainDois = document.getElementById('showPasswordButtonMainDois');
const inputPassMainDois = document.getElementById('inputPassMainDois');
const inputPassMainDoisAgain = document.getElementById('inputPassMainDoisAgain');

// Function to toggle password visibility for the second set of password inputs
const togglePasswordVisibilityMainDois = () => {
  const type = inputPassMainDois.type;
  // Toggle password visibility for both password inputs
  inputPassMainDois.type = type === 'password' ? 'text' : 'password';
  inputPassMainDoisAgain.type = type === 'password' ? 'text' : 'password';
  // Change the button's box shadow based on password visibility
  showPasswordButtonMainDois.style.boxShadow = type === 'password'
    ? '5px 0px 0px 0px #4ae922' // Green shadow when passwords are visible
    : '5px 0px 0px 0px #e9c422'; // Yellow shadow when passwords are hidden
};

// Add event listener to the button for the second set of password inputs
showPasswordButtonMainDois.addEventListener('click', togglePasswordVisibilityMainDois);
