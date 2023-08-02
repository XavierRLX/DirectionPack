function LoginMain() {
  const screenWidth = window.innerWidth;
  let LoginMainUp = document.getElementById('divLoginMainUp');
  let divImgMainUp = document.getElementById('divImgMainEdit');

  if (screenWidth >= 1000) {
    LoginMainUp.style.height = '100%';
    divImgMainUp.style.height = '15%';

  } else {
    LoginMainUp.style.height = '85%';
    divImgMainUp.style.height = '15%';
  }
}

function ativarAnimacao() {
  let divLoginMain = document.getElementById('IdDivLogMain');
  divLoginMain.classList.add('SumirDireita');

  setTimeout(function() {
    divLoginMain.style.display = 'none';
  }, 500); //
}

function ativarMainDois(){
  let logMainDois = document.getElementById('logMainDois');
  
  setTimeout(function(){
     logMainDois.style.display = 'inline';
   }, 500);
}

function deleteImg() {
  const screenWidth = window.innerWidth;
  let deleteImgNone = document.getElementById('img_2');

  if (screenWidth < 1000) {
    deleteImgNone.style.display = 'none';
  } else {
    deleteImgNone.style.display = 'inline'; // Or 'block', depending on the element's original display property
  }
}


document.getElementById('aSingUp').addEventListener('click', function() {
  LoginMain();
  ativarAnimacao();
  ativarMainDois();
  deleteImg();  
});


function desfazerAcoes() {
  let divLoginMain = document.getElementById('IdDivLogMain');
  let logMainDois = document.getElementById('logMainDois');
  let deleteImgNone = document.getElementById('img_2');
  let LoginMainUp = document.getElementById('divLoginMainUp');
  let divImgMainUp = document.getElementById('divImgMainEdit');

  divLoginMain.classList.remove('SumirDireita');
  divLoginMain.style.display = 'block';
  
  logMainDois.style.display = 'none';
  
  deleteImgNone.style.display = 'inline';
  
  LoginMainUp.style.height = ''; // Remove a altura definida anteriormente
  divImgMainUp.style.height = ''; // Remove a altura definida anteriormente
}
