let registerButton = document.getElementById("register");
let loginButton = document.getElementById("login");
let container = document.getElementById("container");

registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});
$(document).ready(function () {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    function redirectToPage(page) {
        window.location.href = page;
    }

    $('#registerForm').on('submit', function (e) {
        e.preventDefault();

        let firstName = $('#firstName').val().trim();
        let lastName = $('#lastName').val().trim();
        let email = $('#registerEmail').val().trim();
        let password = $('#registerPassword').val();
        let confirmPassword = $('#confirmPassword').val();

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            showAlert('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            showAlert('Passwords do not match.');
            return;
        }

        let existingUser = users.find(user => user.email === email);
        if (existingUser) {
            showAlert('Email is already registered.');
            return;
        }

        users.push({ firstName, lastName, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful!');
        redirectToPage('customize.html');
    });

    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        let email = $('#loginEmail').val().trim();
        let password = $('#loginPassword').val().trim();

        if (!email || !password) {
            alert('Both fields are required.');
            return;
        }

        let user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            alert('Invalid email or password.');
            return;
        }

        showAlert(`Welcome back, ${user.firstName}!`);
        localStorage.setItem('isLoggedIn', 'true');
        redirectToPage('customize.html');
    });
    $(document).ready(function () {
        $('.toggle-password').on('click', function () {
            console.log('Toggle button clicked');
            let passwordInput = $(this).siblings('input');
            let eyeIcon = $(this).find('.eye');
            let eyeSlashIcon = $(this).find('.eye-slash');

            if (passwordInput.attr('type') === 'password') {
                passwordInput.attr('type', 'text');
                eyeIcon.show();
                eyeSlashIcon.hide();
                console.log('Password is now visible');
            } else {
                passwordInput.attr('type', 'password');
                eyeIcon.hide();
                eyeSlashIcon.show();
                console.log('Password is now hidden');
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-btn');
    const logoutButton = document.createElement('button');

    if (!loginButton) return;

    logoutButton.textContent = 'Log Out';
    logoutButton.classList.add('button', 'logout-btn');
    logoutButton.style.marginLeft = '20px';
    logoutButton.style.display = 'none';
    loginButton.parentNode.appendChild(logoutButton);

    if (localStorage.getItem('isLoggedIn') === 'true') {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
    }

    logoutButton.addEventListener('click', function () {
        localStorage.setItem('isLoggedIn', 'false');
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
        alert('You have logged out.');
        window.location.href = 'index.html'; // Redirect to home page
    });
});

