let phone = document.getElementById("Phonenumber");
let errorph = document.getElementById("errorph");

function validatesignupphone(){
    
    var phonenoexp = /^([0-9]{3})([\-.\s]+)([0-9]{3})([\-.\s]+)([0-9]{4})$/;

    var phonenonogap = /^([0-9]{10})$/;

    if(phone.value.match(phonenoexp) || phone.value.match(phonenonogap) ) 
    { 
        
        errorph.innerHTML = "Valid Phone";
        errorph.style.color = "green" ; 
       
    }
    else
    { 
       
        errorph.innerHTML = "Invalid Phone";
        errorph.style.color = "red";
        
    }
    
   
}


