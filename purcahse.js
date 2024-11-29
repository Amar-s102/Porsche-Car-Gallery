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
    receiptItemsContainer.innerHTML = '<p>No customization Selected.Please go back a customize you dream machine! </p>';
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
const backToTopBtn = document.querySelector('.backToTop-btn');

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
// let lightmodeImages ={
//   img1:"imgs/lightmode1.jpg",
//   img2:"imgs/lightmode1.jpg",
//   img2:"imgs/lightmode1.jpg",
// };
// function updateGallery(mode){
//   let images = document.querySelectorAll('.image-gallery');
//   images.forEach((img)=>{
//     let imgId = img.id;
//     img.src= mode === 'light-theme'? lightmodeImages[imgId]
//   })
// }
document.addEventListener('DOMContentLoaded', () => {
  const ThemeToggle = document.getElementById('theme-toggle'); 
  const savedTheme = localStorage.getItem('theme'); 

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
