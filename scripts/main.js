var typed = new Typed("#typed", {
  strings: [
    "Website loading too slowly",
    "Security breaches and vulnerabilities",
    "App crashes on specific devices",
    "Scalability for increased user traffic",
    "Data loss and recovery strategies",
    "Cart abandonment and checkout optimization",
    "On-premises to cloud migration",
    "Project deadline challenges",
    "User experience improvement needed",
  ],
  typeSpeed: 35,
  backSpeed: 20,
  loop: true,
  smartBackspace: true,
});
// header background
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var headerHeight = header.offsetHeight;
  var scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > headerHeight) {
    if (this.document.documentElement.classList.contains("dark")) {
      header.style.backgroundColor = "#18181b";
    } else {
      header.style.backgroundColor = "#dbdbdb";
    }
    header.style.borderBottom = "1px solid #333339";
  } else {
    header.style.borderBottom = "1px solid transparent";
    header.style.backgroundColor = "transparent";
  }
});
// carousel bullets
const scrollCarousel = (targetImageNumber) => {
  if (carousel) {
    let targetImage = targetImageNumber - 1;
    let targetXPixel = carousel.children[targetImage].clientWidth * targetImage;
    carousel.scrollTo(targetXPixel, 0);
  }
};
const bullets = document.querySelectorAll(".carousel-bullet");
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", function (event) {
    event.preventDefault();
    scrollCarousel(index + 1);
    bullets.forEach((btn) => btn.classList.remove("active-slide"));
    this.classList.add("active-slide");
  });
});
// dark mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
const themeToggle = document.getElementById("themeToggle");
const app = document.getElementById("app");
themeToggle.addEventListener("change", () => {
  document.documentElement.scrollTop -= 1;
  if (themeToggle.checked) {
    // Dark mode enabled
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    // Light mode enabled
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
});
