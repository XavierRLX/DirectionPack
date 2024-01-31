function checkZipCode() {
    const zipCode = document.getElementById("zipCodeText").value;
  
    // Verifica se o CEP é válido para o Brasil
    if (zipCode.length === 8 && zipCode.match(/^[0-9]{8}$/)) {
      document.getElementById("brimg").style.display = "inline";
      document.getElementById("euaimg").style.display = "none";
      fetchBrazilianData(zipCode);
    }
  
    // Verifica se o CEP é válido para os EUA
    else if (zipCode.length === 5 && zipCode.match(/^[0-9]{5}$/)) {
      document.getElementById("brimg").style.display = "none";
      document.getElementById("euaimg").style.display = "inline";
      fetchUSData(zipCode);
    }
  
    // Se o CEP for inválido, esconde as duas imagens
    else {
      document.getElementById("brimg").style.display = "none";
      document.getElementById("euaimg").style.display = "none";
    //   openModal(`Invalid zip code format.`);
    alert("error")
    }
  }
  
//   function checkZipCode() {
//     // Your existing code to check and display images based on zip code format
// }

// function searchZipCode() {
//     const zipCode = document.getElementById("zipCodeText").value;

//     // Check if the zip code is from Brazil or the USA
//     if (/^\d{5}-\d{3}$/.test(zipCode)) {
//         // Perform API request for Brazilian zip code
//         fetchBrazilianData(zipCode);
//     } else if (/^\d{5}$/.test(zipCode)) {
//         // Perform API request for USA zip code
//         fetchUSData(zipCode);
//     } else {
//         openModal("Invalid zip code format.");
//     }
// }

function fetchBrazilianData(zipCode) {
    // Perform API request for Brazilian zip code
    const apiUrl = `https://viacep.com.br/ws/${zipCode}/json/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Check if the returned data contains an error
            if (data.erro) {
                // openModal("CEP not found in the database.");
            } else {
                // Update the UI with the received data
                updateAddressFields(data.uf, data.localidade, data.logradouro);
            }
        })
        .catch(error => {
            // openModal("Error fetching data from the API.");
        });
}

function fetchUSData(zipCode) {
    // Perform API request for USA zip code
    // Replace the placeholder URL with the actual API endpoint
    const apiUrl = `https://api.example.com/usa/${zipCode}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the UI with the received data
            updateAddressFields(data.state, data.city, data.street);
        })
        .catch(error => {
            // openModal("Error fetching data from the API.");
        });
}

function updateAddressFields(state, city, street) {
    // Update the address fields in your UI
    document.getElementById("state").innerText = state;
    document.getElementById("city").innerText = city;
    document.getElementById("street").innerText = street;
}