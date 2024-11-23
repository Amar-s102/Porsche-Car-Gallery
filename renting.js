const cars = [
  {
    id: 1,
    model: "911",
    color: "Deep blue",
    type: "Sport",
    price: 300,
    details: "Perfection is never the start.",
    image: "image/porsche1-removebg-preview.png",
  },
  {
    id: 2,
    model: "911 ",
    type: "Sport",
    price: 250,
    details: "The one and always.",
    image: "image/porsche2-removebg-preview.png",
  },
  {
    id: 3,
    model: "911",
    type: "Sport",
    price: 260,
    details: "Reliable and easy to drive.",
    image: "image/porsche3-removebg-preview.png",
  },
  {
    id: 4,
    model: "911",
    type: "Sport",
    price: 260,
    details: "Reliable and easy to drive.",
    image: "image/porsche4-removebg-preview.png",
  },
  {
    id: 5,
    model: "911",
    type: "Sport",
    price: 260,
    details: "Reliable and easy to drive.",
    image: "image/porsche5-removebg-preview.png",
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
    <p>Type: ${car.type}</p>
    <p>Price: $${car.price} / day</p>
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
