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
    header.style.borderBottom = "1px solid #333339";
    header.style.backgroundColor = "#18181b";
  } else {
    header.style.borderBottom = "1px solid transparent";
    header.style.backgroundColor = "#27272a";
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
const bullets = document.querySelectorAll('.carousel-bullet');
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', function(event) {
    event.preventDefault();
    scrollCarousel(index + 1);
    bullets.forEach(btn => btn.classList.remove('active-slide'));
    this.classList.add('active-slide');
  });
});


