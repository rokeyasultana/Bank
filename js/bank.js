document.getElementById('login-submit').addEventListener('click',function() {
const emailField = document.getElementById('user-email');
const userEmail = emailField.value;
console.log(userEmail);

const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;

if(userEmail == 'st@gamil.com' && userPassword =='secret'){
    window.location.href = 'js/banking.html' ;
}
});



 