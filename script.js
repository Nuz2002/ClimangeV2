document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".scroll-images");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollImages.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  }

  function rightScroll() {
    scrollImages.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});

//scroll to the appropriate parts of the page
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll(".header-right .nav-link");

  // Add click event listeners to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

//Order now
document
  .querySelectorAll(
    ".order-now-btn, .order-now-btn-fp, .pop-order-btn, .button-33, .get-ur-bag-btn"
  )
  .forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("order-now").scrollIntoView({
        behavior: "smooth",
      });
    });
  });

//Sidebar
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Close sidebar when clicking anywhere outside of it
window.onclick = function (event) {
  var navLinks = document.getElementById("nav-links");
  if (
    !event.target.matches(".hamburger") &&
    !event.target.closest(".nav-links")
  ) {
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
    }
  }
};

// Close sidebar when a link inside the sidebar is clicked
var links = document.querySelectorAll(".nav-link");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("show");
  });
});
