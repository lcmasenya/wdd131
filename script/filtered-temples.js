const hamButton = document.querySelector("#hamburger");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const today = new Date();

const currentYearElement = document.getElementById("currentyear");

currentYearElement.textContent = today.getFullYear();

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl:
      "data:image/jpeg;base64,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"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 19184,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtzzItJ34lBCnl4kSLHW7j-24-uld8HovqhLooFlicw&s"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13FEufOCkI_yCsYo6Neu22q0N5RhgoeSN6Q&s"
  }
];

// Function to display temples dynamically
function displayTemples(filteredTemples) {
  const container = document.getElementById("temples");
  container.innerHTML = ""; // clear old content

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Show all temples by default
displayTemples(temples);

// Filtering logic for navigation menu
document.getElementById("home").addEventListener("click", () => displayTemples(temples));

document.getElementById("old").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);

document.getElementById("new").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);

document.getElementById("large").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area > 90000))
);

document.getElementById("small").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area < 10000))
);

// Footer updates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;