document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  // Newsletter form handler
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      if (emailInput && emailInput.value) {
        const existing = newsletterForm.parentNode.querySelector(".subscribe-msg");
        if (!existing) {
          const msg = document.createElement("p");
          msg.className = "subscribe-msg";
          msg.textContent = "Thank you for subscribing!";
          msg.style.marginTop = "12px";
          msg.style.fontWeight = "600";
          newsletterForm.parentNode.appendChild(msg);
        }
        emailInput.value = "";
      }
    });
  }

  // Active nav link highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
