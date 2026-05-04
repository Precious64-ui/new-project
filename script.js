
// ===============================
// MOBILE NAVBAR TOGGLE
// ===============================
const mobileMenu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close menu when a link is clicked (better UX on mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});


// ===============================
// LOGIN / CONTACT FORM HANDLING
// ===============================
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("user-email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!email || !password || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});


// ===============================
// ADD TO CART FUNCTIONALITY
// ===============================
const productButtons = document.querySelectorAll(".products-images button");

productButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.closest(".products-images");
    const productName = productCard.querySelector("h3").textContent;

    alert(`${productName} added to cart`);
  });
});


// ===============================
// OPTIONAL: SMOOTH SCROLL FIX (enhanced UX)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
