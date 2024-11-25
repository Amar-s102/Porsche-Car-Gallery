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
    // Simulate user storage with JSON in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Redirect function
    function redirectToPage(page) {
        window.location.href = page; // Redirect to the specified page
    }

    // Registration Form Submission
    $('#registerForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form refresh

        const firstName = $('#firstName').val().trim();
        const lastName = $('#lastName').val().trim();
        const email = $('#registerEmail').val().trim();
        const password = $('#registerPassword').val();
        const confirmPassword = $('#confirmPassword').val();

        // Validate input fields
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Check if email is already registered
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert('Email is already registered.');
            return;
        }

        // Add user to "database"
        users.push({ firstName, lastName, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful!');
        redirectToPage('index.html'); // Redirect to the homepage after registration
    });

    // Login Form Submission
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form refresh

        const email = $('#loginEmail').val().trim();
        const password = $('#loginPassword').val();

        // Validate input fields
        if (!email || !password) {
            alert('Both fields are required.');
            return;
        }

        // Check if user exists and password matches
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            alert('Invalid email or password.');
            return;
        }

        alert(`Welcome back, ${user.firstName}!`);
        redirectToPage('index.html'); // Redirect to the homepage after successful login
    });
    $(document).ready(function () {
        $('.toggle-password').on('click', function () {
            console.log('Toggle button clicked');
            const passwordInput = $(this).siblings('input');
            const eyeIcon = $(this).find('.eye');
            const eyeSlashIcon = $(this).find('.eye-slash');
    
            if (passwordInput.attr('type') === 'password') {
                passwordInput.attr('type', 'text');
                eyeIcon.hide();
                eyeSlashIcon.show();
                console.log('Password is now visible');
            } else {
                passwordInput.attr('type', 'password');
                eyeIcon.show();
                eyeSlashIcon.hide();
                console.log('Password is now hidden');
            }
        });
    });
    
    });
    
