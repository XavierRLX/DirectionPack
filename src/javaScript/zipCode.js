
const imgBr = document.getElementById('brimgG');
const imgEua = document.getElementById('euaimgG');
const zipCodeResult = document.getElementById('InlinezipCode');

function validateZipCode() {
    const inputElement = document.getElementById('zipCodeText');
    
    inputElement.value = inputElement.value.replace(/\D/g, '').slice(0, 8);
  }


function checkZipCode() {
    
    const zipCode = document.getElementById("zipCodeText").value;

    zipCodeResult.style.display = "none" ;

    // Verifica se o CEP é válido para o Brasil
    if (zipCode.length === 8 && zipCode.match(/^[0-9]{8}$/)) {

      imgBr.style.display = "inline";
      imgEua.style.display = "none";
      
      fetchBrazilianData(zipCode);
    }
  
    // Verifica se o CEP é válido para os EUA
    else if (zipCode.length === 5 && zipCode.match(/^[0-9]{5}$/)) {
        imgBr.style.display = "none";
        imgEua.style.display = "inline";

        zipCodeResult.style.display = "inline" ;

      fetchUSData(zipCode);
    }
  
    // Se o CEP for inválido, esconde as duas imagens
    else {
        imgBr.style.display = "none";
        imgEua.style.display = "none";
    //   openModal(`Invalid zip code format.`);
    alert("error") ;
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
                openModal('not found');
            } else {
                // Update the UI with the received data
                updateAddressFields(data.uf, data.ddd, data.localidade, data.bairro, data.logradouro);
                zipCodeResult.style.display = "inline";
                zipCodeResult.scrollIntoView({ behavior: "smooth" });
            }
        })
        .catch(error => {
            // Use console.error para identificar possíveis problemas
            openModal('error API');
        });
}


// function fetchUSData(zipCode) {
//     // Perform API request for USA zip code
//     // Replace the placeholder URL with the actual API endpoint
//     const apiUrl = `https://api.example.com/usa/${zipCode}`;
    
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // Update the UI with the received data
//             updateAddressFields(data.state, data.code, data.city, data.street);
//         })
//         .catch(error => {
//             alert("") ;
//         });
// }

function updateAddressFields(state, code, city, neighborhood, street) {
    // Update the address fields in your UI
    document.getElementById("state").innerText = state;
    document.getElementById("stateCode").innerText = code;
    document.getElementById("city").innerText = city;
    document.getElementById("neighborhood").innerText = neighborhood;
    document.getElementById("street").innerText = street;
}