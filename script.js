// script.js - Updated for multi-page website

document.addEventListener("DOMContentLoaded", function () {
  // Navigation menu toggle for mobile
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768 && navMenu) {
        navMenu.classList.remove("active");
      }
    });
  });

  // Animate skill bars when Skills page is viewed
  const skillsSection = document.getElementById("skills");
  const skillProgressBars = document.querySelectorAll(".skill-progress");

  // Function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Function to animate skill bars
  function animateSkillBars() {
    if (skillsSection && isElementInViewport(skillsSection)) {
      skillProgressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width + "%";
      });
      // Remove event listener after animation
      window.removeEventListener("scroll", handleScroll);
    }
  }

  function handleScroll() {
    animateSkillBars();
  }

  // Set up scroll listener for skill bars animation
  if (skillsSection && skillProgressBars.length > 0) {
    window.addEventListener("scroll", handleScroll);
    // Initial check in case skills section is already in viewport
    animateSkillBars();
  }

  // Form validation for contact form
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Reset previous errors
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((msg) => (msg.textContent = ""));

      // Hide success/error messages
      const successMessage = document.getElementById("form-success");
      const errorMessage = document.getElementById("form-error");
      if (successMessage) successMessage.classList.add("hidden");
      if (errorMessage) errorMessage.classList.add("hidden");

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value.trim();

      let isValid = true;

      // Validate name
      if (name === "") {
        document.getElementById("name-error").textContent = "Name is required";
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        document.getElementById("email-error").textContent =
          "Email is required";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent =
          "Please enter a valid email address";
        isValid = false;
      }

      // Validate subject
      if (!subject) {
        document.getElementById("subject-error").textContent =
          "Please select a subject";
        isValid = false;
      }

      // Validate message
      if (message === "") {
        document.getElementById("message-error").textContent =
          "Message is required";
        isValid = false;
      } else if (message.length < 10) {
        document.getElementById("message-error").textContent =
          "Message must be at least 10 characters long";
        isValid = false;
      }

      // If form is valid, show success message
      if (isValid) {
        if (successMessage) {
          successMessage.classList.remove("hidden");

          // Reset form
          contactForm.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.classList.add("hidden");
          }, 5000);
        }
      } else {
        // Show error message if validation fails
        if (errorMessage) {
          errorMessage.classList.remove("hidden");
        }
      }
    });
  }

  // Highlight active page in navigation
  function highlightActivePage() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html") ||
        (currentPage === "index.html" && linkPage === "index.html")
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Call the function to highlight active page
  highlightActivePage();

  // Set current year in copyright
  const copyrightElements = document.querySelectorAll(".copyright");
  const currentYear = new Date().getFullYear();
  copyrightElements.forEach((element) => {
    element.textContent = element.textContent.replace("2023", currentYear);
  });
});
