document.addEventListener('DOMContentLoaded', () => {
  const selectedCar = JSON.parse(localStorage.getItem('selectedCar')); 
  const receiptItemsContainer = document.getElementById('receipt-items');
  const basePrice = 300000; 

  receiptItemsContainer.innerHTML = ''; 

  if (selectedCar) {
    const carDiv = document.createElement('div');
    carDiv.className = 'receipt-item';
    carDiv.innerHTML = `
      <div>
        <p><strong>Selected Car:</strong> ${selectedCar.name}</p>
        <img src="${selectedCar.image}" alt="${selectedCar.name}" style="width: 300px; border-radius: 10px;">
        <p><strong>Base Price:</strong> $${basePrice.toFixed(2)}</p>
      </div>
    `;
    receiptItemsContainer.appendChild(carDiv);
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3>Total: $${basePrice.toFixed(2)}</h3>`;
    receiptItemsContainer.appendChild(totalDiv);
  } else {
    receiptItemsContainer.innerHTML = '<p>Porsche 911 GT3 RS price = 300,000$ </p>';
  }
});
document.getElementById('customer-info-form').addEventListener('submit', (event) => {
  event.preventDefault(); 
  const nameField = document.getElementById('customer-name').value.trim();
  const emailField = document.getElementById('email').value.trim();
  const phoneField = document.getElementById('phone').value.trim();
  const addressField = document.getElementById('address').value.trim();
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

  if (!nameField || !emailField || !phoneField || !addressField || !paymentMethod) {
    alert('Please fill out all fields and select a payment method.');
    return;
  }
  const duration = 4 * 1000;
  const animationEnd = Date.now() + duration;

  const colors = ["#D7AE5D", "#5B8586", "#FF5733"];

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

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
