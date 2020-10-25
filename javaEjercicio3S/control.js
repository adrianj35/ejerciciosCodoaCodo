var btn = document.getElementById('btn');
var pass = document.getElementById('pass');
var user = document.getElementById('user');
var arrobas = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btn.addEventListener('click', function(z){
	
	if(!arrobas.test(user.value)){

        alert('verifique su mail')
        z.preventDefault();
        return false;
	 }
     else if(user.value === ''){

         alert('Falta el Usuario!')
         z.preventDefault();
         return false; 
     }
     else if(pass.value === ''){
         alert('Falta la contraseña!')
         z.preventDefault();
         return false;
     }
});

