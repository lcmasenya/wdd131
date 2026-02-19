// Update current year
const yearElement = document.getElementById("currentyear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Update last modified date
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = `Last updated: ${document.lastModified}`;
}

// Dark mode toggle (DOM + localStorage)
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Dark Mode";
document.body.prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Object + Array + Array method
const nutritionTips = {
  category: "Nutrition",
  tips: ["Eat more leafy greens", "Reduce sugar intake", "Drink 8 glasses of water"]
};

const tipsList = document.createElement("ul");
nutritionTips.tips.forEach(tip => {
  tipsList.insertAdjacentHTML("beforeend", `<li>${tip}</li>`);
});
document.body.appendChild(tipsList);

// Newsletter form (conditional + localStorage)
const newsletter = document.getElementById("newsletter");
if (newsletter) {
  newsletter.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (email.includes("@")) {
      localStorage.setItem("subscriberEmail", email);
      alert(`Thanks for subscribing, ${email}!`);
    } else {
      alert("Please enter a valid email.");
    }
  });
}

// Contact form (DOM + localStorage)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    localStorage.setItem("contactSubmission", JSON.stringify({ name, email, message }));
    alert(`Thank you ${name}, we’ll reply to ${email} soon!`);
  });
}