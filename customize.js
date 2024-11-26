var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// "Learn More" buttons in the carousel
document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', function () {
    const carItem = this.closest('.tranding-slide'); // Get the parent car container
    const carImage = carItem.querySelector('img').src; // Get car image
    const carName = carItem.querySelector('h2').textContent; // Get car name

    //container for selected cars
    const selectedCarsContainer = document.getElementById('selected-cars-container');
    let existingCar = selectedCarsContainer.querySelector(`[data-car-name="${carName}"]`);

    if (existingCar) {
      // Remove  car if it's already there
      existingCar.remove();
    } else {
      // Create a new div for the selected car
      const selectedCar = document.createElement('div');
      selectedCar.classList.add('selected-car');
      selectedCar.setAttribute('data-car-name', carName); // Add unique identifier
      selectedCar.innerHTML = `
        <img src="${carImage}" alt="${carName}" style="width: 300px; height: auto; border-radius: 10px; cursor: pointer;">
        <h2>${carName}</h2>
      `;

      // Add click event to open the outer div with car details
      selectedCar.addEventListener('click', function () {
        openOuterDiv(carName, carImage);
      });

      // Append to the selected cars container
      selectedCarsContainer.appendChild(selectedCar);
    }
  });
});

// Function to open the outer div with car details
function openOuterDiv(carName, carImage) {
  let outerDiv = document.getElementById('outer-div');
  
  if (!outerDiv) {
    // Create the outer div if it doesn't exist
    outerDiv = document.createElement('div');
    outerDiv.id = 'outer-div';
    outerDiv.style.position = 'fixed';
    outerDiv.style.top = '10%';
    outerDiv.style.left = '10%';
    outerDiv.style.width = '80%';
    outerDiv.style.height = '80%';
    outerDiv.style.backgroundColor = '#ffffff';
    outerDiv.style.border = '2px solid #ccc';
    outerDiv.style.borderRadius = '10px';
    outerDiv.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    outerDiv.style.padding = '20px';
    outerDiv.style.zIndex = '1000';
    outerDiv.style.overflow = 'auto';
    document.body.appendChild(outerDiv);
  }

  outerDiv.innerHTML = `
    <button style="float: right; padding: 10px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="document.getElementById('outer-div').remove()">Close</button>
    <h1>${carName}</h1>
    <img id="car-image" src="${carImage}" alt="${carName}" style="width: 90%; max-height: 400px; object-fit: cover; margin-top: 20px; border-radius: 10px;">
    <p style="font-size: 18px; margin-top: 20px; color:black;">Customize your ${carName} 911 GT3 RS Porsche below.</p>
    <div>
      <button class="customization-btn" data-option="color" >Color</button>
      <button class="customization-btn" data-option="wheels">Wheels</button>
      <button class="customization-btn" data-option="Engine">Engine</button>
      <button class="customization-btn" data-option="seats">Interior</button>
    </div>
    <div id="customization-details" style="margin-top: 20px; padding: 10px; border-top: 1px solid #ccc;"></div>
  `;
  document.querySelectorAll('.customization-btn').forEach(button => {
    button.addEventListener('click', function () {
      const option = this.getAttribute('data-option');
      openCustomizationDiv(option, carName); 
    });
  });
}
function openCustomizationDiv(option, carName) {
  const customizationDetails = document.getElementById('customization-details');
  let content = '';
  if (option === 'wheels') {
    content = `
      <h3>${carName} - Wheel Options</h3>
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="wheel-option" style="text-align: center;">
          <img src="imgs/wheel1.jpg" alt="Sport Wheels" style="width: 180px; height: 150px; border-radius: 10px;">
          <p style="color:black;">Silver Rim Wheels</p>
             <p style ="color:black;"><strong>Price:</strong>4500$</p>
             <button class="add-to-cart-btn" onclick="addToCart('Silver Rim Wheels', 4000)">Add to Cart</button>
        </div>
        <div class="wheel-option" style="text-align: center;">
          <img src="imgs/wheel2.jpg" alt="Luxury Wheels" style="width: 180px; height: 150px; border-radius: 10px;">
          <p style ="color:black;">Luxury Black Wheels</p>
          <p style ="color:black;"><strong>Price:</strong>4000$</p>
          <button class="add-to-cart-btn" onclick="addToCart('Luxury Black Wheels', 4000)">Add to Cart</button>
        </div>
        <div class="wheel-option" style="text-align: center;">
          <img src="imgs/wheel3.jpg" alt="Performance Wheels" style="width: 180px; height: 150px; border-radius: 10px;">
          <p style ="color:black;">Spider Webbed Wheels</p>
          <p style ="color:black;"><strong>Price:</strong>5000$</p>
          <button class="add-to-cart-btn" onclick="addToCart('Spider Webbed Wheels', 4000)">Add to Cart</button>
        </div>
      </div>
    `;
  } else if  (option === 'color') {
    content = `
      <h3>${carName} - Exterior Colors</h3>
      <div class="color-options">
  <div class="color-item">
    <button class="color-box" data-color="skyBlue" style="background-color: #1E98EB;" title="Sky Blue"></button>
     <p><strong>Price:</strong>10,000$</p>
    <button class="add-to-cart-btn" onclick="addToCart('Sky Blue', 2000)">Add to Cart</button>
  </div>
  <div class="color-item">
    <button class="color-box" data-color="darkBlue" style="background-color: #00308F;" title="Dark Blue"></button>
     <p style ="color:black;"><strong>Price:</strong>12,000$</p>
    <button class="add-to-cart-btn" onclick="addToCart('Dark Blue', 2100)">Add to Cart</button>
  </div>
  <div class="color-item">
    <button class="color-box" data-color="bloodRed" style="background-color: #99151D;" title="Blood Red"></button>
     <p style ="color:black;"><strong>Price:</strong>8,000$</p>
    <button class="add-to-cart-btn" onclick="addToCart('Blood Red', 2200)"  >Add to Cart</button>
  </div>
  <div class="color-item">
    <button class="color-box" data-color="forestGreen" style="background-color: #23572E;" title="Forest Green"></button>
     <p style ="color:black;"><strong>Price:</strong>25,000$</p>
    <button class="add-to-cart-btn" onclick="addToCart('Forest Green', 2450)">Add to Cart</button>
  </div>
  <div class="color-item">
    <button class="color-box" data-color="soothingBeige" style="background-color: #F5F5DC;" title="Soothing Beige"></button>
     <p style ="color:black;"><strong>Price:</strong>17,000$</p>
    <button class="add-to-cart-btn" onclick="addToCart('Soothing Beige', 1000)">Add to Cart</button>
  </div>
</div>

    `;
    customizationDetails.innerHTML=content;
  } if (option === 'Engine') {
    content = `
      <h3>${carName} - Engine Options</h3>
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="Engine-option" style="text-align: center;">
          <img src="imgs/engine1.png" alt="Engine" style="width: 200px; height: 150px; border-radius: 10px;">
          <p style ="color:black;"><strong>8-speed Porsche Doppelkupplung (PDK) </strong></p>
          <p style ="color:black;"><strong>Price:</strong>30,000$</p>
        <button class="add-to-cart-btn" onclick="addToCart('4.0-liter high revving naturally aspirated 518 hp engine', 4000)">Add to Cart</button>
          </div>
        <div class="Engine-option" style="text-align: center;">
          <img src="imgs/engine2.png" alt="Luxury Wheels" style="width: 200px; height: 150px; border-radius: 10px;">
          <p style ="color:black;"><strong>4-speed Porsche (PDK)</strong></p>
               <p"><strong>Price:</strong>45,000$</p>
                <button class="add-to-cart-btn" onclick="addToCart('6.0-liter high revving naturally aspirated 518 hp engine', 4000)">Add to Cart</button>
               </div>
    `;
  }else if (option === 'seats') {
    content = `
      <h3>${carName} - Seat Options</h3>
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="seat-option" style="text-align: center;">
          <img src="imgs/seat1.png" alt="Sport seats" style="width: 200px; height: 150px; border-radius: 10px;">
          <p  style="color:black;">Ash Grey Interior</p>
          <p style ="color:black;"><strong>Price:</strong>55,000$</p>
          <button class="add-to-cart-btn" onclick="addToCart('Ash Grey Interior', 4000)">Add to Cart</button>
        </div>
        <div class="seat-option" style="text-align: center;">
          <img src="imgs/seat2.png" alt="Sport seats" style="width: 200px; height: 150px; border-radius: 10px;">
          <p style ="color:black;">Sleek Red Interior</p>
          <p style ="color:black;"><strong>Price:</strong>62,000$</p>
          <button class="add-to-cart-btn" onclick="addToCart('Sleek Red Interior', 4000)">Add to Cart</button>
        </div>
    `;
  }
  customizationDetails.innerHTML = content;
  if (option === 'color') {
    const colorBoxes = customizationDetails.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
      box.addEventListener('click', function () {
        const selectedColor = this.getAttribute('data-color');
        updateCarImageColor(selectedColor); 
      });
    });
  }
}
function updateCarImageColor(color) {
  const carImage = document.getElementById('car-image');

  // Map color options to image paths
  const carImages = {
    darkBlue: 'imgs/porsche1-removebg-preview.png',
    skyBlue: 'imgs/porsche2-removebg-preview.png',
    bloodRed: 'imgs/porsche3-removebg-preview.png',
    forestGreen: 'imgs/porsche4-removebg-preview.png',
    soothingBeige: 'imgs/porsche5-removebg-preview.png',
  };

  // Update the car image source
  carImage.src = carImages[color] || carImage.src; // Fallback to the original image if color not found
}

// Add event listeners for buttons in the carousel
document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', function () {
    const car = this.getAttribute('data-car'); // Get the car from data attribute
    updateCarInfo(car); // Update the carinfo div
  });
});

// Function to update the carinfo div
function updateCarInfo(car) {
  const carInfoDiv = document.querySelector('.carinfo');
  const carData = {
    darkBlue: {
      name: 'Dark Blue',
      description: 'This car has a stunning dark blue exterior with a sleek design and powerful engine.',
      specs: 'Engine: 4.0L V8 Turbo, Horsepower: 500HP, Price: $330,000',
      color: '#1E11A6'
    },
    skyBlue: {
      name: 'Sky Blue',
      description: 'The sky blue Porsche offers unmatched performance and style.',
      specs: 'Engine: 4.0L V6, Horsepower: 510HP, Price:  $330,000',
      color: '#1E98EB'
    },
    bloodRed: {
      name: 'Blood Red',
      description: 'The Blood Red Porsche offers an elegant exterior and top-notch performance.',
      specs: 'Engine: 3.8L V6, Horsepower: 450HP, Price:  $330,000',
      color: '#99151D'
    },
    forestGreen: {
      name: 'Forest Green',
      description: 'With forest green, the GT3 RS takes on a rugged, earthy appeal.',
      specs: 'Engine: 4.0L V8 Turbo, Horsepower: 520HP, Price: $330,000',
      color: '#23572E'
    },
    soothingBeige: {
      name: 'Soothing Beige',
      description: 'The Porsche in beige brings an understated elegance to this sports car.',
      specs: 'Engine: 4.0L V8, Horsepower: 500HP, Price:  $330,000',
      color: '#F5F5DC'
    }
  };
  carInfoDiv.innerHTML = '';  

  // Check if car exists in the data
  if (carData[car]) {
    const { name, description, specs, color } = carData[car];
    carInfoDiv.innerHTML = `
      <h2 style="color: ${color};">${name}</h2>
      <p style="font-weight: bold;">${description}</p>
      <p style="font-weight: bold;">${specs}</p>
    `;
  } else {
    carInfoDiv.innerHTML = '<p>Car information not available.</p>';
  }
}




const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

const selectedCustomizations = {
  color: null, // Holds the currently selected color
  wheels: null, // Holds the currently selected wheels
  engine: null, // Holds the currently selected engine
  seats: null, // Holds the currently selected seats
};


// Select cart elements
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Cart storage
const cart = []; // Array to store cart items
const basePrice = 300000; // Constant price for the car

// Toggle cart visibility
cartIcon.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  cartDropdown.classList.toggle('visible'); // Toggle visibility class
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
  if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
    cartDropdown.classList.remove('visible');
  }
});

// Add an item to the cart
function addToCart(itemName, itemPrice) {
  // Add item to cart array
  cart.push({ name: itemName, price: itemPrice });

  // Update cart UI
  updateCartDisplay();

  // Show confirmation
  alert(`${itemName} has been added to your cart!`);
}

// Remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove item at index
  updateCartDisplay(); // Update UI
}

// Update cart display
function updateCartDisplay() {
  cartItemsContainer.innerHTML = ''; // Clear previous items
  let total = basePrice; // Start with base price

  // Populate cart items
  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price;
  });

  // Update cart count and total
  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  localStorage.setItem('cartData', JSON.stringify(cart));
  const totalAmount = cart.reduce((sum, item) => sum + item.price, basePrice);
  alert(`Your total is $${totalAmount.toFixed(2)}. Redirecting to payment...`);

  // Redirect to a checkout page (if implemented)
  window.location.href = 'purchase.html';
}

















const holdSoundBtn = document.getElementById('hold-sound-btn');
const engineSound = document.getElementById('engine-sound');

// Event listener to play sound while holding the button
holdSoundBtn.addEventListener('mousedown', () => {
  engineSound.currentTime = 0; // Reset sound to the beginning
  engineSound.play(); // Play sound
});

// Event listener to stop sound when releasing the button
holdSoundBtn.addEventListener('mouseup', () => {
  engineSound.pause(); // Pause sound
});

// Optional: Stop sound if the mouse leaves the button
holdSoundBtn.addEventListener('mouseleave', () => {
  engineSound.pause(); // Pause sound
});


// Play the audio when the page loads
window.addEventListener('load', () => {
  const audio = document.getElementById('page-sound');
  audio.play().catch((error) => {
    console.log('Auto-play prevented:', error);
  });
});

// Select the theme toggle checkbox
let themeToggle = document.getElementById('theme-toggle');
let navbar = document.querySelector('.navbar'); // Ensure this matches your navbar class
let allTextElements = document.querySelectorAll('body *'); // Select all elements inside the body

// Add an event listener to handle the toggle
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    // Light mode: Change the navbar and body styles
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    allTextElements.forEach((el) => {
      el.style.color = 'black'; // Change all text to visible in light mode
    });
  } else {
    // Dark mode: Revert styles to dark theme
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    allTextElements.forEach((el) => {
      el.style.color = 'white'; // Change all text to visible in dark mode
    });
  }
});

// Make the navbar sticky on scroll
window.addEventListener('scroll', () => {
  navbar.style.position = 'sticky';
  navbar.style.top = '0';
  navbar.style.zIndex = '1000'; // Ensure it stays above other elements
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-checkbox");
  const footer = document.getElementById("main-footer");

  themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
          footer.style.backgroundColor = "#ffffff"; 
          footer.style.color = "#000000"; 

          const headings = footer.querySelectorAll("h1, h2, h3, h4, h5, h6");
          headings.forEach(heading => {
              heading.style.color = "#000000"; 
          });

          const links = footer.querySelectorAll("a"); 
          links.forEach(link => {
              link.style.color = "#000000"; 
              link.addEventListener("mouseover", () => link.style.color = "#555555"); 
              link.addEventListener("mouseout", () => link.style.color = "#000000"); 
          });
      } else {
          footer.style.backgroundColor = "#000000";
          footer.style.color = "#ffffff"; 

          const headings = footer.querySelectorAll("h1, h2, h3, h4, h5, h6");
          headings.forEach(heading => {
              heading.style.color = "#ffffff";
          });

          const links = footer.querySelectorAll("a"); 
          links.forEach(link => {
              link.style.color = "#a8a8a8"; // Set link color to light gray
              link.addEventListener("mouseover", () => link.style.color = "#ffffff"); 
              link.addEventListener("mouseout", () => link.style.color = "#a8a8a8"); 
          });
      }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      const speed = 100; 
      let count = 0;

      const updateCount = () => {
          count += Math.ceil(target / speed);
          if (count > target) count = target;
          counter.textContent = count;

          if (count < target) {
              requestAnimationFrame(updateCount);
          }
      };

      updateCount();
  };

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  animateCounter(entry.target);
                  observer.unobserve(entry.target);
              }
          });
      },
      { threshold: 0.5 } 
  );

  counters.forEach(counter => {
      observer.observe(counter);
  });
});
