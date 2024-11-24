const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
const purchaseContainer = document.getElementById('purchase-container');

if (cartData.length > 0) {
  let total = 300000; // Add base price
  cartData.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'receipt-item';
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; margin-right: 10px; border-radius: 5px;">
      <div>
        <p><strong>Item:</strong> ${item.name}</p>
        <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
      </div>
    `;
    purchaseContainer.appendChild(itemDiv);
    total += item.price;
  });

  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
  purchaseContainer.appendChild(totalDiv);
} else {
  purchaseContainer.innerHTML = '<p>Your cart is empty.</p>';
}
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

  // Handle form submission
  document.getElementById('customer-info-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Your purchase information has been submitted successfully!');
  });
});

const video = document.getElementById('porsche-video');

// Play or pause the video when clicked
video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
// Select all image containers and the gallery
const gallery = document.querySelector('.image-gallery');
const containers = document.querySelectorAll('.image-container');

// Add event listeners to each image container
containers.forEach((container) => {
  container.addEventListener('click', (e) => {
    // Remove active class from all images
    containers.forEach((c) => c.classList.remove('active'));
    // Add active class to the clicked image
    container.classList.add('active');
    // Add blurred class to the gallery
    gallery.classList.add('blurred');
    // Prevent event propagation to the gallery
    e.stopPropagation();
  });
});

// Add an event listener to the gallery to clear the active/blurred state
document.addEventListener('click', () => {
  // Remove active class and blurred state
  containers.forEach((c) => c.classList.remove('active'));
  gallery.classList.remove('blurred');
});
