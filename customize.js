let isLightTheme = document.body.classList.contains('light-theme');
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: isLightTheme ?0:20,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    clickable: true,
  },
});
document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', function () {
    const carItem = this.closest('.tranding-slide'); 
    const carImage = carItem.querySelector('img').src; 
    const carName = carItem.querySelector('h2').textContent; 
    const selectedCarsContainer = document.getElementById('selected-cars-container');
    let existingCar = selectedCarsContainer.querySelector(`[data-car-name="${carName}"]`);

    if (existingCar) {
      existingCar.remove();
    } else {
      const selectedCar = document.createElement('div');
      selectedCar.classList.add('selected-car');
      selectedCar.setAttribute('data-car-name', carName);
      selectedCar.innerHTML = `
        <img src="${carImage}" alt="${carName}" style="width: 300px; height: auto; border-radius: 10px; cursor: pointer;">
        <h2>${carName}</h2>
      `;
      selectedCar.addEventListener('click', function () {
        openOuterDiv(carName, carImage);
      });
      selectedCarsContainer.appendChild(selectedCar);
    }
  });
});
function openOuterDiv(carName, carImage) {
  let outerDiv = document.getElementById('outer-div');
  
  if (!outerDiv) {
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
    <button style="float: right; padding: 10px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;width:100px;height:40px;" onclick="document.getElementById('outer-div').remove()">Close</button>
    <h1>${carName}</h1>
    <img id="car-image" src="${carImage}" alt="${carName}" style="width: 90%; max-height: 400px; object-fit: cover; margin-top: 20px; border-radius: 10px;">
    <p style="font-size: 18px; margin-top: 20px; color:black; margin-bottom:10px;">Customize your ${carName} 911 GT3 RS Porsche below.</p>
    <div  class="button-container" style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 20px;">
      <button class="customization-btn" data-option="color" >Color</button>
      <button class="customization-btn" data-option="wheels">Wheels</button>
      <button class="customization-btn" data-option="Engine">Engine</button>
      <button class="customization-btn" data-option="seats">Interior</button>
  <button class="customization-btn" onclick="window.location.href='purchase.html'" > Proceed to Purchase</button>
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
        <div class="wheel-option">
          <img src="imgs/wheel1.jpg" alt="Sport Wheels" style="width: 180px; height: 150px; border-radius: 10px;">
          <p style="color:black;">Silver Rim Wheels</p>
             <p style ="color:black;"><strong>Price:</strong>4500$</p>
             <button class="add-to-cart-btn" onclick="addToCart('Silver Rim Wheels', 4000)">Add to Cart</button>
        </div>
        <div class="wheel-option">
          <img src="imgs/wheel2.jpg" alt="Luxury Wheels" style="width: 180px; height: 150px; border-radius: 10px;">
          <p style ="color:black;">Luxury Black Wheels</p>
          <p style ="color:black;"><strong>Price:</strong>4000$</p>
          <button class="add-to-cart-btn" onclick="addToCart('Luxury Black Wheels', 4000)">Add to Cart</button>
        </div>
        <div class="wheel-option">
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
          <img src="imgs/engine2.png" alt="Engine" style="width: 200px; height: 150px; border-radius: 10px;">
          <p style ="color:black;"><strong>4.0L V8 Turbo, Horsepower: 500HP</strong></p>
               <p"><strong>Price:</strong>45,000$</p>
                <button class="add-to-cart-btn" onclick="addToCart('4.0L V8 Turbo, Horsepower: 500HP, Price:', 4000)">Add to Cart</button>
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
  function proceedToPurchase(){
    let cart= JSON.parse(localStorage.getItem('cart')||[]);
    let selectedCar= JSON.parse(localStorage.getItem('selectedCar'));
    let purchaseData=('purchaseDate', JSON.stringify(purchaseData));
    window.location.href='purchase.html';
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
  const carImages = {
    darkBlue: 'imgs/porsche1-removebg-preview.png',
    skyBlue: 'imgs/porsche2-removebg-preview.png',
    bloodRed: 'imgs/porsche3-removebg-preview.png',
    forestGreen: 'imgs/porsche4-removebg-preview.png',
    soothingBeige: 'imgs/porsche5-removebg-preview.png',
  };
  carImage.src = carImages[color] || carImage.src; 
}
document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', function () {
    const car = this.getAttribute('data-car'); 
    updateCarInfo(car); 
  });
});
function updateCarInfo(car) {
  const carInfoDiv = document.querySelector('.carinfo');
  const carData = {
    darkBlue: {
      name: 'Dark Blue',
      description: 'This car has a stunning dark blue exterior with a sleek design and powerful engine.',
      specs: 'Engine: 4.0L V8 Turbo, Horsepower: 500HP, Price: $300,000',
      color: '#1E11A6'
    },
    skyBlue: {
      name: 'Sky Blue',
      description: 'The sky blue Porsche offers unmatched performance and style.',
      specs: 'Engine: 4.0L V6, Horsepower: 510HP, Price:  $300,000',
      color: '#1E98EB'
    },
    bloodRed: {
      name: 'Blood Red',
      description: 'The Blood Red Porsche offers an elegant exterior and top-notch performance.',
      specs: 'Engine: 3.8L V6, Horsepower: 450HP, Price:  $300,000',
      color: '#99151D'
    },
    forestGreen: {
      name: 'Forest Green',
      description: 'With forest green, the GT3 RS takes on a rugged, earthy appeal.',
      specs: 'Engine: 4.0L V8 Turbo, Horsepower: 520HP, Price: $300,000',
      color: '#23572E'
    },
    soothingBeige: {
      name: 'Soothing Beige',
      description: 'The Porsche in beige brings an understated elegance to this sports car.',
      specs: 'Engine: 4.0L V8, Horsepower: 500HP, Price:  $300,000',
      color: '#F5F5DC'
    }
  };
  carInfoDiv.innerHTML = '';  
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
  color: null, 
  wheels: null, 
  engine: null, 
  seats: null, 
};
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cart = []; 
const basePrice = 300000; 
cartIcon.addEventListener('click', (e) => {
  e.preventDefault(); 
  cartDropdown.classList.toggle('visible'); 
});
document.addEventListener('click', (e) => {
  if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
    cartDropdown.classList.remove('visible');
  }
});
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCartDisplay();
  alert(`${itemName} has been added to your cart!`);
}
function removeFromCart(index) {
  cart.splice(index, 1); 
  updateCartDisplay(); 
}
function updateCartDisplay() {
  cartItemsContainer.innerHTML = ''; 
  let total = basePrice; 
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
  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  localStorage.setItem('cartData', JSON.stringify(cart));
  const totalAmount = cart.reduce((sum, item) => sum + item.price, basePrice);
  alert(`Your total is $${totalAmount.toFixed(2)}. Redirecting to payment...`);
  window.location.href = 'purchase.html';
}
const holdSoundBtn = document.getElementById('hold-sound-btn');
const engineSound = document.getElementById('engine-sound');
holdSoundBtn.addEventListener('mousedown', () => {
  engineSound.currentTime = 0; 
  engineSound.play(); 
});
holdSoundBtn.addEventListener('mouseup', () => {
  engineSound.pause(); 
});
holdSoundBtn.addEventListener('mouseleave', () => {
  engineSound.pause(); 
});
window.addEventListener('load', () => {
  const audio = document.getElementById('page-sound');
  audio.play().catch((error) => {
    console.log('Auto-play prevented:', error);
  });
});
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme'); 
  }
});
window.addEventListener('scroll', () => {
  navbar.style.position = 'sticky';
  navbar.style.top = '0';
  navbar.style.zIndex = '1000'; 
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
              link.style.color = "#a8a8a8";
              link.addEventListener("mouseover", () => link.style.color = "#ffffff"); 
              link.addEventListener("mouseout", () => link.style.color = "#a8a8a8"); 
          });
      }
  });
});
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
