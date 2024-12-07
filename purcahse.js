document.addEventListener('DOMContentLoaded', () => {
  let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
  let receiptItemsContainer = document.getElementById('receipt-items');
  let basePrice = 300000;

  receiptItemsContainer.innerHTML = ''; 

  if (cartData.length > 0) {
    let total = basePrice; 

    cartData.forEach(item => {
      let itemDiv = document.createElement('div');
      itemDiv.className = 'receipt-item';
      itemDiv.innerHTML = `
        <div>
          <p><strong>Item:</strong> ${item.name}</p>
          <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
        </div>
      `;
      receiptItemsContainer.appendChild(itemDiv);
      total += item.price; 
    });
    let totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    receiptItemsContainer.appendChild(totalDiv);
  } else {
    receiptItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  }
});
document.getElementById('customer-info-form').addEventListener('submit', (event) => {
  event.preventDefault(); 
  let nameField = document.getElementById('customer-name').value.trim();
  let emailField = document.getElementById('email').value.trim();
  let phoneField = document.getElementById('phone').value.trim();
  let addressField = document.getElementById('address').value.trim();
 let paymentMethod = document.querySelector('input[name="payment-method"]:checked');

  if (!nameField || !emailField || !phoneField || !addressField || !paymentMethod) {
    alert('Please fill out all fields and select a payment method.');
    return;
  }
 let duration = 4 * 1000;
  let animationEnd = Date.now() + duration;

  let colors = ["#D7AE5D", "#5B8586", "#FF5733"];

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  let interval = setInterval(() => {
    let timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    confetti({
      particleCount: 70,
      startVelocity: 30,
      spread: 360,
      ticks: 100,
      scalar: 3,
      origin: {
        x: randomInRange(0.1, 0.9),
        y: Math.random() - 0.2,
      },
      colors: colors,
    });
  }, 250);

  alert('Your order has been successfully placed!');
  localStorage.removeItem('selectedCar');
});
let backToTopBtn = document.querySelector('.backToTop-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.opacity = '0';
        setTimeout(() => {
            backToTopBtn.style.display = 'none';
        }, 300);
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 
let ThemeToggle= document.getElementById('theme-toggle');
let savedTheme = localStorage.getItem('theme');
document.addEventListener('DOMContentLoaded', () => {
  let ThemeToggle = document.getElementById('theme-toggle'); 
  let savedTheme = localStorage.getItem('theme'); 

  if (savedTheme) {
    document.body.classList.add(savedTheme);
    ThemeToggle.checked = savedTheme === 'light-theme'; 
  }

  ThemeToggle.addEventListener('change', () => {
    if (ThemeToggle.checked) {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light-theme'); 
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark-theme'); 
    }
  });
});
