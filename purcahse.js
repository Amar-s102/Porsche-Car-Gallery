// document.addEventListener('DOMContentLoaded', () => {
//   const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
//   const receiptItemsContainer = document.getElementById('receipt-items');

//   if (cartData.length > 0) {
//     let total = 300000; 
//     receiptItemsContainer.innerHTML = ''; 


//     cartData.forEach(item => {
//       const itemDiv = document.createElement('div');
//       itemDiv.className = 'receipt-item';
//       itemDiv.innerHTML = `
        
//         <div>
//           <p><strong>Item:</strong> ${item.name}</p>
//           <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
//         </div>
//       `;
//       receiptItemsContainer.appendChild(itemDiv);
//       total += item.price;
//     });
//     const totalDiv = document.createElement('div');
//     totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
//     receiptItemsContainer.appendChild(totalDiv);
//   } else {
//     receiptItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const paymentMethods = document.getElementsByName('payment-method');
//   const creditCardInfo = document.getElementById('credit-card-info');

//   paymentMethods.forEach((method) => {
//     method.addEventListener('change', () => {
//       if (method.value === 'Credit Card') {
//         creditCardInfo.classList.remove('hidden');
//       } else {
//         creditCardInfo.classList.add('hidden');
//       }
//     });
//   });
// });
// document.getElementById('customer-info-form').addEventListener('submit', (event) => {
//   const nameField = document.getElementById('customer-name');
//   const emailField = document.getElementById('email');
//   const phoneField = document.getElementById('phone');
//   const addressField = document.getElementById('address');
//   const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

//   if (!nameField.value || !emailField.value || !phoneField.value || !addressField.value || !paymentMethod) {
//     alert('Please fill out all fields and select a payment method.');
//     event.preventDefault(); 
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const purchaseButton = document.querySelector(".submit-btn");

//   purchaseButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     const duration = 4 * 1000; 
//     const animationEnd = Date.now() + duration;

//     const colors = ["#D7AE5D", "#5B8586", "#FF5733"];

//     function randomInRange(min, max) {
//       return Math.random() * (max - min) + min;
//     }

//     const interval = setInterval(() => {
//       const timeLeft = animationEnd - Date.now();

//       if (timeLeft <= 0) {
//         clearInterval(interval);
//         return;
//       }

//       confetti({
//         particleCount: 70,
//         startVelocity: 30,
//         spread: 360,
//         ticks: 100,
//         scalar:3,
//         origin: {
//           x: randomInRange(0.1, 0.9),
//           y: Math.random() - 0.2,  
//         },
//         colors: colors,
//       });
//     }, 250);
//     alert("Your order is being sent successfully!");
//   });
// });
// let ThemeToggle= document.getElementById('theme-toggle');
// let savedTheme = localStorage.getItem('theme');
// if(savedTheme){
//   document.body.classList.add(savedTheme);
//   ThemeToggle.checked = savedTheme === 'light-theme';
// }
// ThemeToggle.addEventListener('change',()=>{
//   if(ThemeToggle.checked){
//     document.body.classList.add('light-theme');
//     document.body.classList.remove('dark-theme');
//     localStorage.setItem('theme','dark-theme');
//   }else{
//     document.body.classList.add('dark-theme');
//     document.body.classList.remove('light-theme');
//     localStorage.setItem('theme','dark-theme');
//   }
// });
// const backToTopBtn = document.querySelector('.backToTop-btn');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 200) {
//         backToTopBtn.style.display = 'block';
//         backToTopBtn.style.opacity = '1';
//     } else {
//         backToTopBtn.style.opacity = '0';
//         setTimeout(() => {
//             backToTopBtn.style.display = 'none';
//         }, 300);
//     }
// });
// backToTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
  const selectedCar = JSON.parse(localStorage.getItem('selectedCar')); // Get selected car
  const receiptItemsContainer = document.getElementById('receipt-items');
  const basePrice = 300000; // Default base price of the car

  receiptItemsContainer.innerHTML = ''; // Clear receipt section

  if (selectedCar) {
    // Add the selected car to the receipt
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

    // Add total price
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3>Total: $${basePrice.toFixed(2)}</h3>`;
    receiptItemsContainer.appendChild(totalDiv);
  } else {
    // If no car is selected, show a message
    receiptItemsContainer.innerHTML = '<p>No car selected. Please go back and choose a car.</p>';
  }
});

// Form submission with validation
document.getElementById('customer-info-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Validate form fields
  const nameField = document.getElementById('customer-name').value.trim();
  const emailField = document.getElementById('email').value.trim();
  const phoneField = document.getElementById('phone').value.trim();
  const addressField = document.getElementById('address').value.trim();
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

  if (!nameField || !emailField || !phoneField || !addressField || !paymentMethod) {
    alert('Please fill out all fields and select a payment method.');
    return;
  }

  // Trigger confetti celebration
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

  // Clear selected car data
  localStorage.removeItem('selectedCar');
});
