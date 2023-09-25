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
  typeSpeed: 40,
  backSpeed: 25,
  loop: true,
  smartBackspace: true,
});
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var body = document.querySelector("body");

  // Get the header height
  var headerHeight = header.offsetHeight;

  // Get the scroll position
  var scrollY = window.scrollY || window.pageYOffset;

  // Check if the scroll position is greater than the header height
  if (scrollY > headerHeight) {
    // Set the body background color to zinc-800
    header.style.borderBottom = "1px solid #333339";

    header.style.backgroundColor = "#18181b"; // Use your desired color code here
  } else {
    // Set the body background color to zinc-900
    header.style.borderBottom = "1px solid transparent";
    header.style.backgroundColor = "#27272a"; // Use your desired color code here
  }
});
