
document.addEventListener("DOMContentLoaded", () => {
    const nextSection = document.querySelector(".next-section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });
    observer.observe(nextSection);
});
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
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
const cars = [
    {
      id: 1,
      model: "911",
      color: "Deep blue",
      price: 379,
      details: "Ideal for special occasions or exploring with style and power.",
      image: "img/porsche1-removebg-preview.png",
    },
    {
      id: 2,
      model: "911 ",
      color:'Gentian Blue Metallic',
      price: 349,
      details: "Perfect for road trips, formal events, or an unforgettable weekend getaway.",
      image: "img/porsche2-removebg-preview.png",
    },
    {
      id: 3,
      model: "911",
      color:'Carmine Red',
      price: 359,
      details: "Reliable and easy to Combines luxury, power, and elegance in one sleek package.",
      image: "img/porsche3-removebg-preview.png",
    },
    {
      id: 4,
      model: "911",
      color:'Racing Green',
      price: 399,
      details: "Make a bold statement with the unique green color.",
      image: "img/porsche4-removebg-preview.png",
    },
    {
      id: 5,
      model: "911",
      color: 'Chalk White',
      price: 369,
      details: "Offers a smooth, elegant driving experience for any road.",
      image: "img/porsche5-removebg-preview.png",
    },
  ];
  
  let currentIndex = 0;
  
  const carsContainer = document.getElementById("cars-container");
  
  // Display a single car in the slider
  function displayCar(index) {
    carsContainer.innerHTML = "";
    const car = cars[index];
    const carBox = document.createElement("div");
    carBox.classList.add("car-box");
    carBox.innerHTML = `
      <img src="${car.image}" alt="${car.model}">
      <h3>${car.model}</h3>
      <p>${car.color}</p>
      <p>$${car.price} / day</p>
      <button onclick="showPopup(${car.id})">Rent</button>
      <div class="slider-controls">
        <button onclick="navigate(-1)">&#8592;</button>
        <button onclick="navigate(1)">&#8594;</button>
      </div>
    `;
    carsContainer.appendChild(carBox);
  }
  
  // Navigate through cars
  function navigate(direction) {
    currentIndex = (currentIndex + direction + cars.length) % cars.length;
    displayCar(currentIndex);
  }
  
  // Show rental popup
  function showPopup(carId) {
    const car = cars.find((c) => c.id === carId);
    document.getElementById("carImage").src = car.image;
    document.getElementById("carTitle").textContent = car.model;
    document.getElementById("carDetails").textContent = car.details;
    document.getElementById("carPrice").textContent = `Price: $${car.price} / day`;
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".overlay").classList.remove("hidden");
  }
  
  // Close popup
  document.getElementById("closePopup").onclick = () => {
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".overlay").classList.add("hidden");
  };
  
  // Initialize the slider
  displayCar(currentIndex);
  
  // Confirm rental action
  document.getElementById("rentButton").addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".overlay").classList.add("hidden");
    alert("Thank you for renting!");
  });
  
