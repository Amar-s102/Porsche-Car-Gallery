const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

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
            alert('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        let existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert('Email is already registered.');
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

        alert(`Welcome back, ${user.firstName}!`);
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
    
