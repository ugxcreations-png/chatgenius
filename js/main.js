document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  // Newsletter form handler
  var newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var emailInput = newsletterForm.querySelector("input[type='email']");
      if (emailInput && emailInput.value) {
        var msg = document.createElement("p");
        msg.textContent = "Thank you for subscribing!";
        msg.style.marginTop = "12px";
        msg.style.fontWeight = "600";
        newsletterForm.parentNode.appendChild(msg);
        emailInput.value = "";
      }
    });
  }

  // Active nav link highlighting
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
