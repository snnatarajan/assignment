let passwd = document.getElementById("inputPassword4");
let errorpw = document.getElementById("errorpw");


function validatesignuppassword() 
{ 
    var strngpassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(passwd.value.match(strngpassw)) 
    { 
        //alert('Strong password');
        errorpw.innerHTML = "Strong Valid Password";
        errorpw.style.color = "green" ; 
        //return true;
    }
    else
    { 
        //alert('Wrong Password...!');
        errorpw.innerHTML = "Weak Invalid Password";
        errorpw.style.color = "red";
        //return false;
    }
}


