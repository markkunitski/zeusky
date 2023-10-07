// LANG
const english = document.querySelector('link[hreflang="en"]');
const estonian = document.querySelector('link[hreflang="et"]');
const russian = document.querySelector('link[hreflang="ru"]');
// typing text
let translated = [
  "Website loading too slowly",
  "Security breaches and vulnerabilities",
  "App crashes on specific devices",
  "Scalability for increased user traffic",
  "Data loss and recovery strategies",
  "Cart abandonment and checkout optimization",
  "On-premises to cloud migration",
  "Project deadline challenges",
  "User experience improvement needed",
];
function stringsLang() {
  if (estonian) {
    estonian.href = `${window.location.origin}/et/`;
    translated = [
      "Veebisait laadib liiga aeglaselt",
      "Turvalisuse rikkumised ja haavatavused",
      "Rakenduse kokkujooksed konkreetsetel seadmetel",
      "Skaleeritavus suurenenud kasutajaliikluse jaoks",
      "Andmete kaotamise ja taastamise strateegiad",
      "Korvi hülgamine ja kassasse optimeerimine",
      "Kohalikult pilve migreerumine",
      "Projekti tähtajaga seotud väljakutsed",
      "Kasutajakogemuse parandamine vajalik",
    ];
    return;
  }
  if (russian) {
    russian.href = `${window.location.origin}/ru/`;
    translated = [
      "Веб-сайт загружается слишком медленно",
      "Нарушения безопасности и уязвимости",
      "Краш приложения на определенных устройствах",
      "Масштабируемость для увеличения трафика",
      "Потеря данных и стратегии восстановления",
      "Отказ от корзины и оптимизация заказа",
      "Миграция с локальных серверов в облако",
      "Проблемы с сроками проекта",
      "Требуется улучшение UI/UX",
    ];
    return;
  }
  english.href = window.location.origin;
}
stringsLang();
var typed = new Typed("#typed", {
  strings: translated,
  typeSpeed: 13,
  backSpeed: 12,
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
      header.style.backgroundColor = "rgba(24, 24, 27, .8)";
    } else {
      header.style.backgroundColor = "rgb(219, 219, 219, .5)";
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
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggle.checked = true;
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
// SERVICES
function handleExpand(event) {
  let target = event.target;
  if (target.classList.contains("EXPANDER")) {
    target.textContent =
      target.textContent.trim() === "Show the rest >"
        ? "Hide >"
        : "Show the rest >";
    const parent = document.getElementById(event.target.dataset.parent);
    const hidden = parent.querySelector(".whenHidden");
    const shown = parent.querySelector(".whenShown");
    hidden.classList.toggle("hidden");
    shown.classList.toggle("hidden");
  }
}
services.addEventListener("click", (e) => handleExpand(e));
