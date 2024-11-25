document.addEventListener('DOMContentLoaded', () => {
  const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
  const receiptItemsContainer = document.getElementById('receipt-items');

  if (cartData.length > 0) {
    let total = 300000; 
    receiptItemsContainer.innerHTML = ''; 


    cartData.forEach(item => {
      const itemDiv = document.createElement('div');
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
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    receiptItemsContainer.appendChild(totalDiv);
  } else {
    receiptItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const paymentMethods = document.getElementsByName('payment-method');
  const creditCardInfo = document.getElementById('credit-card-info');

  paymentMethods.forEach((method) => {
    method.addEventListener('change', () => {
      if (method.value === 'Credit Card') {
        creditCardInfo.classList.remove('hidden');
      } else {
        creditCardInfo.classList.add('hidden');
      }
    });
  });
});
document.getElementById('customer-info-form').addEventListener('submit', (event) => {
  const nameField = document.getElementById('customer-name');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const addressField = document.getElementById('address');
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

  if (!nameField.value || !emailField.value || !phoneField.value || !addressField.value || !paymentMethod) {
    alert('Please fill out all fields and select a payment method.');
    event.preventDefault(); // Prevent form submission
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const purchaseButton = document.querySelector(".submit-btn");

  purchaseButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Confetti burst effect
    const duration = 4 * 1000; // 2 seconds
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
        scalar:3,
        origin: {
          x: randomInRange(0.1, 0.9), // Randomize x-position
          y: Math.random() - 0.2,     // Randomize y-position
        },
        colors: colors,
      });
    }, 250);

    // Display success message
    alert("Your order is being sent successfully!");
  });
});



//   const totalDiv = document.createElement('div');
//   totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
//   purchaseContainer.appendChild(totalDiv);
//  else {
//   purchaseContainer.innerHTML = '<p>Your cart is empty.</p>';
// }
