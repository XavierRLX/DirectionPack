// Selecting DOM elements
const imgBr = document.getElementById('brimgG');
const imgEua = document.getElementById('euaimgG');
const zipCodeResult = document.getElementById('InlinezipCode');
const zipCodeInput = document.getElementById('zipCodeText');
const btnsearch = document.getElementById('btnsearch');


// Event listener for checking the zip code when "Enter" key is pressed
zipCodeInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkZipCode();
    }
});

// Function to validate zip code input
function validateZipCode() {
    zipCodeInput.value = zipCodeInput.value.replace(/\D/g, '').slice(0, 8);
}

// Function to check the validity of the zip code and fetch data accordingly
function checkZipCode() {
    const zipCode = zipCodeInput.value;
    zipCodeResult.style.display = 'none';

    // Checks if the zip code is valid for Brazil
    if (/^[0-9]{8}$/.test(zipCode)) {
        imgBr.style.display = 'inline';
        imgEua.style.display = 'none';
        fetchBrazilianData(zipCode);
    } else {
        // If the zip code is invalid, hide both images and show modal
        hideImages();
        openModal('Invalid zip code format');
    }
}

// Function to fetch Brazilian address data using an API
function fetchBrazilianData(zipCode) {
    const apiUrl = `https://viacep.com.br/ws/${zipCode}/json/`;
    
    btnsearch.style.animation = 'pulse .5s infinite alternate';

    setTimeout(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    openModal('Address not found');
                } else {
                    updateAddressFields(data.uf, data.ddd, data.localidade, data.bairro, data.logradouro);
                    zipCodeResult.style.display = 'inline';
                    zipCodeResult.scrollIntoView({ behavior: 'smooth' });
                }
            })
            .catch(error => {
                openModal('Error fetching address data');
            })
            .finally(() => {
                btnsearch.style.animation = '';
            });
    }, 2000);
}


// Function to update the address fields in the UI
function updateAddressFields(state, code, city, neighborhood, street) {
    document.getElementById('state').innerText = state;
    document.getElementById('stateCode').innerText = code;
    document.getElementById('city').innerText = city;
    document.getElementById('neighborhood').innerText = neighborhood;
    document.getElementById('street').innerText = street;
}

// Function to hide both images
function hideImages() {
    imgBr.style.display = 'none';
    imgEua.style.display = 'none';
}


