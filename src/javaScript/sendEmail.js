function sendEmailSaveUser(){
    const email = "renanlima2000.aer@gmail.com";
      const nome = "Renan";
      const sobrenome = "Xavier";
  
      fetch('/email/send-email-welcome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `toEmail=${email}&nome=${nome}&sobrenome=${sobrenome}`
      })
        .then(response => response.text())
        .then(message => {
          console.log('Email enviado:', message);
        })
        .catch(error => {
          // Lidar com erros de envio de email, se necessário
          console.error('Erro no envio do email:', error);
        });
  }

  function sendEmailForgotPassword(){
    const email = "renanlima2000.aer@gmail.com";
      const nome = "Renan";
      const sobrenome = "Xavier";
      const senha = 'RenanXavier1234@'
  
      fetch('/email/send-email-forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `toEmail=${email}&nome=${nome}&sobrenome=${sobrenome}&senha=${senha}`

      })
        .then(response => response.text())
        .then(message => {
          console.log('Email enviado:', message);
        })
        .catch(error => {
          console.error('Erro no envio do email:', error);
        });
  }