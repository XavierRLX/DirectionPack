function LoginMain(){
  let LoginMainUp = document.getElementById('divLoginMainUp');
  let divImgMainUp = document.getElementById('divImgMainEdit');
  LoginMainUp.style.height = '95%'
  divImgMainUp.style.height = '5%'
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

function deleteImg(){
  let deleteImgNone = document.getElementById('img_2');
  deleteImgNone.style.display = 'none';
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
