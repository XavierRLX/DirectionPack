function redirectToLoginPage(){
    setTimeout(function(){
        window.location.href = '/login';
    }, 2000);
   }

   window.addEventListener('load', redirectToLoginPage);