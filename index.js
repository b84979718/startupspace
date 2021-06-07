let emailEl = document.getElementById('email');
let message = document.getElementById('message');
let password = document.getElementById('password');

let signIn = document.getElementById('signIn');

signIn.addEventListener('click', function() {
    let email = emailEl.value;
    if (email.endsWith("@gmail.com")) {
        message.textContent = "Login Success!!!!!";
        message.style.color = "#47d68e";
        emailEl.value = "";
        password.value = "";
    } else {
        message.textContent = "Email must end with @gmail.com";
        message.style.color = '#d91107';
        emailEl.value = "";
        password.value = "";
    }
})
