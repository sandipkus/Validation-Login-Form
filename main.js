var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput', pass_verify);


function validated(){
    if (email.value.length < 9) {
        emailInput.style.border = "1px solid red";
        email_error.style.display = "block";
        emailInput.focus();
        return false;
    }

    if (password.value.length < 6) {
        passInput.style.border = "1px solid red";
        pass_error.style.display = "block";
        passInput.focus();
        return false;
    }
}

function email_verify(){
    if (email.value.length >= 8) {
        emailInput.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function pass_verify(){
    if (password.value.length >= 5) {
        passInput.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}