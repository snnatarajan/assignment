let email = document.getElementById("inputEmail4");
let error = document.getElementById("error");


function validatesignupemail(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(email.value)){
        //alert('Valid Email');
        error.innerHTML = "Valid Email";
        error.style.color = "green";
        //return (true);
    }
    else{
        //alert('Invalid Email');
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        //return (false);
    }
}
