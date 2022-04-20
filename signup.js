let email = document.getElementById("inputEmail4");
let error = document.getElementById("error");
let passwd = document.getElementById("inputPassword4");
let errorpw = document.getElementById("errorpw");
let phone = document.getElementById("Phonenumber");
let errorph = document.getElementById("errorph");
let msgtime = document.getAnimations("timer");

function validatesignup(){
    validatesignupemail();
    validatesignupphone();
    validatesignuppassword();
}
function validatesignupemail(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(email.value)){
        alert('Valid Email');
        error.innerHTML = "Valid Email";
        error.style.color = "green";
        return (true);
    }
    else{
        alert('Invalid Email');
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        return (false);
    }
}
function validatesignupphone(){
  
    let regexp1 = /^([0-9]{3})([\-.\s]+)([0-9]{3})([\-.\s]+)([0-9]{4})$/;
    let regexp2 = /^([0-9]{10})$/;
    
    if (regexp1.test(phone.value)|| regexp2.test(phone.value)){
        alert('Valid Phone No');
        errorph.innerHTML = "Valid Phone no";
        errorph.style.color = "green";
        return (true);
    }
    else{
        alert('Invalid Phone No');
        errorph.innerHTML = "Invalid Phone no";
        errorph.style.color = "red";
        return (false);
    }
}

function validatesignuppassword() 
{ 
    var strngpassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(passwd.value.match(strngpassw)) 
    { 
        alert('Strong password');
        errorpw.innerHTML = "Strong Valid Password";
        errorpw.style.color = "green" ; 
        return true;
    }
    else
    { 
        alert('Wrong Password...!');
        errorpw.innerHTML = "Weak Invalid Password";
        errorpw.style.color = "red";
        return false;
    }
}


