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
                link.style.color = "#a8a8a8"; 
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
      type: "Sport",
      price: 300,
      details: "The Deep blue Porsche 911 embodies performance and luxury, featuring a 3.0L twin-turbo engine with 379 hp and 450 Nm of torque, allowing a top speed of 293 km/h. Highlights include a black leather interior with red stitching, adaptive cruise control, a 360-degree camera, and a customizable dashboard for an unmatched driving experience.",
      image: "img/porsche1-removebg-preview.png",
    },
    {
      id: 2,
      model: "911 ",
      color: "Gentian Blue Metallic",
      type: "Sport",
      price: 270,
      details: "The Gentian Blue Porsche 911 is a sleek and versatile sport coupe powered by a 3.0L twin-turbo engine with 379 hp and 450 Nm of torque, delivering a top speed of 182 mph. Key features include a panoramic sunroof, dual-zone climate control, and smart keyless entry. It’s packed with tech like a high-resolution touchscreen, gesture controls, and parking assist.",
      image: "img/porsche2-removebg-preview.png",
    },
    {
      id: 3,
      model: "911",
      color: "Carmine Red",
      type: "Sport",
      price: 290,
      details: "The Carmine Red Porsche 911 combines sporty performance and bold design, featuring a 3.0L twin-turbo flat-six engine with 379 hp and 450 Nm of torque, achieving 0-100 km/h in 4.0 seconds and a top speed of 293 km/h. Inside, enjoy heated leather seats, ambient lighting, and a premium 10-speaker sound system, paired with cutting-edge tech like Apple CarPlay and adaptive suspension.",
      image: "img/porsche3-removebg-preview.png",
    },
    {
      id: 4,
      model: "911",
      color:"Racing Green",
      type: "Sport",
      price: 280,
      details: "The Racing Green Porsche 911 offers exclusive luxury and power with a 3.0L twin-turbo engine, 379 hp, and 450 Nm of torque, reaching 0-100 km/h in 4.2 seconds. It boasts Alcantara-trimmed seats, a noise-canceling cabin, and advanced safety features like lane departure warning and fatigue monitoring, ensuring a premium driving experience.",
      image: "img/porsche4-removebg-preview.png",
    },
    {
      id: 5,
      model: "911",
      color:"Chalk White",
      type: "Sport",
      price: 260,
      details: "The Chalk White Porsche 911 delivers timeless elegance with its twin-turbo 3.0L engine producing 379 hp and 450 Nm of torque, hitting 100 km/h in just 4.0 seconds. Inside, enjoy hand-stitched leather seats, woodgrain detailing, and full-surround parking sensors, complemented by real-time GPS and wireless charging for ultimate convenience.",
      image: "img/porsche5-removebg-preview.png",
    },
  ];
  
  function createSlider(cars) {
    const slider = document.getElementById("slider");
    const featuredCars = cars.slice(0, 5);
  
    featuredCars.forEach(car => {
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `
        <img src="${car.image}" alt="${car.model}">

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
        <button class="btn" onclick="openModal(${car.id})">More Details</button>
      `;
  
      carCardsContainer.appendChild(carCard);
    });
  }
  
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
  
  document.getElementById("close-modal").addEventListener("click", () => {
    const modal = document.getElementById("car-details-modal");
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("car-details-modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
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
