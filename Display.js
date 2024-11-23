document.addEventListener("DOMContentLoaded", () => {
    // Highlight navbar links when scrolling
    const links = document.querySelectorAll(".navbar nav a");
    const sections = document.querySelectorAll(".car-card");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

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
  
  // Create Slider
  function createSlider(cars) {
    const slider = document.getElementById("slider");
    const featuredCars = cars.slice(0, 3);
  
    featuredCars.forEach(car => {
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `
        <img src="${car.image}" alt="${car.model}">
        <h3>${car.model} - ${car.color}</h3>
        <p>${car.details}</p>
      `;
      slider.appendChild(slide);
    });
  
    let currentIndex = 0;
  
    document.getElementById("prev-btn").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + featuredCars.length) % featuredCars.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  
    document.getElementById("next-btn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % featuredCars.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  }
  
  // Create Car Cards
  function displayCars(cars) {
    const carCardsContainer = document.getElementById("car-cards");
  
    cars.forEach(car => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
  
      carCard.innerHTML = `
        <img src="${car.image}" alt="${car.model}">
        <h3>${car.model} - ${car.color || "N/A"}</h3>
        <p>Type: ${car.type}</p>
        <p>Price: $${car.price}K</p>
        <p>${car.details}</p>
        <button class="btn" onclick="openModal(${car.id})">More Details</button>
      `;
  
      carCardsContainer.appendChild(carCard);
    });
  }
  
  // Initialize Page
  createSlider(cars);
  displayCars(cars);
  function openModal(carId) {
    const car = cars.find((car) => car.id === carId);
    if (car) {
        document.getElementById("modal-img").src = car.image;
        document.getElementById("modal-title").innerText = car.model;
        document.getElementById("modal-description").innerText = car.details;
        document.getElementById("modal-price").innerText = `$${car.price}K`;

        const modal = document.getElementById("car-details-modal");
        modal.style.display = "block";
    }
}

// Close Modal
document.getElementById("close-modal").addEventListener("click", () => {
    const modal = document.getElementById("car-details-modal");
    modal.style.display = "none";
});

// Close modal if clicked outside of modal content
window.addEventListener("click", (e) => {
    const modal = document.getElementById("car-details-modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});