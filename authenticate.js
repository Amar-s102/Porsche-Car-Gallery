document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-btn');
    const navbarRight = document.querySelector('.navbar-right');

    if (!navbarRight) return; 
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Log Out';
    logoutButton.classList.add('button', 'logout-btn');
    logoutButton.style.marginLeft = '20px';
    logoutButton.style.display = 'none';
    navbarRight.appendChild(logoutButton);

    if (localStorage.getItem('isLoggedIn') === 'true') {
        if (loginButton) loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
    } else {
        if (loginButton) loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
    }

    logoutButton.addEventListener('click', function () {
        localStorage.setItem('isLoggedIn', 'false');
        if (loginButton) loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
        alert('You have logged out.');
        window.location.href = 'homePage.html'; 
    });
});
