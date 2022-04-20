let email = document.getElementById("inputEmail4");
let error = document.getElementById("error");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regexp.test(email.value)){
        alert('Valid Email Id');
        error.innerHTML = "Valid Email Id";
        error.style.color = "green";
        return (true);
    }
    else{
        alert('Invalid Email Id');
        error.innerHTML = "Invalid Email Id";
        error.style.color = "red";
        return (false);
    }
}