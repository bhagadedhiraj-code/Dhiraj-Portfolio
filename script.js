/* Mobile navigation and small progressive enhancements */
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const profilePhoto = document.querySelector("#profilePhoto");
const photoFallback = document.querySelector("#photoFallback");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("open", !isExpanded);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

if (profilePhoto && photoFallback) {
  profilePhoto.addEventListener("error", () => {
    profilePhoto.style.display = "none";
    photoFallback.style.display = "grid";
  });
}
