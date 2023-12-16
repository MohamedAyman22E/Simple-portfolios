// website dark
const themBtn = document.querySelector(".them-btn");
themBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-them");
  themBtn.classList.toggle("sun");
  localStorage.setItem("saved-them", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});
const getCurrentTheme = () =>
  document.body.classList.contains("dark-them") ? "dark" : "light";
const getCurrentIcon = () =>
  themBtn.classList.contains("sun") ? "sun" : "moon";

const savedThem = localStorage.getItem("saved-them");
const savedIcon = localStorage.getItem("saved-icon");
if (savedThem) {
  document.body.classList[savedThem === "dark" ? "add" : "remove"]("dark-them");
  themBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
// navList
let menuBtn = document.querySelector(".nav-menu-btn");
let closeBtn = document.querySelector(".nav-close-btn");
let navList = document.querySelector(".navList");

menuBtn.addEventListener("click", () => {
  navList.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navList.classList.remove("active");
});
// service
const servesModel = document.querySelectorAll(".service-models");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modelCloseBtn = document.querySelectorAll(".fa-xmark");
var model = function (modelClick) {
  servesModel[modelClick].classList.add("active");
};
learnMoreBtn.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener("click", () => {
    model(i);
  });
});
modelCloseBtn.forEach(modelCloseBtn => {
  modelCloseBtn.addEventListener("click", () => {
    servesModel.forEach(modelView => {
      modelView.classList.remove("active");
    });
  });
});
// // // portfolio ////////////////////////////
const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtn = document.querySelectorAll(".fa-xmark");
var portfolioModel = function (modelClick) {
  portfolioModels[modelClick].classList.add("active");
};
imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModel(i);
  });
});
portfolioCloseBtn.forEach(portfolioCloseBtnIndex => {
  portfolioCloseBtnIndex.addEventListener("click", () => {
    portfolioModels.forEach(portfolioModelView => {
      portfolioModelView.classList.remove("active");
    });
  });
});
// scroll to top page
let scrollTop = document.querySelector(".scroll-top-btn");
window.addEventListener("scroll", function () {
  scrollTop.classList.toggle("active", this.window.scrollY > 500);
});
scrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
////////// hover in navList a
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(current => {
    const scrollY = window.scrollY;
    let sectionHight = current.offsetHeight;
    let sectionTop = current.offsetTop - 100;
    let id = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHight) {
      document
        .querySelector(".navItems a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navItems a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});
// /////////// scroll Reveal
ScrollReveal({
  reset: true,
  distance: "30px",
  duration: 2000,
  delay: 50,
});
// home
ScrollReveal().reveal(".media-icon a ", {
  delay: 100,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".img-home img", { delay: 100, origin: "bottom" });
ScrollReveal().reveal(".info h2", { delay: 100, origin: "left" });
ScrollReveal().reveal(".info .text-info span", { delay: 100, origin: "right" });
ScrollReveal().reveal(".info p", { delay: 100, origin: "right" });
// about
ScrollReveal().reveal(".about-img img", { delay: 100, origin: "left" });
ScrollReveal().reveal(".about-content h2", { delay: 100, origin: "right" });
ScrollReveal().reveal(".about-content h3", { delay: 100, origin: "left" });
ScrollReveal().reveal(".about-content p", { delay: 100, origin: "bottom" });
ScrollReveal().reveal("hr", { delay: 100, origin: "right" });
ScrollReveal().reveal(".about-content-two li", { delay: 100, origin: "right" });
ScrollReveal().reveal(".about-content-two li h2", {
  delay: 100,
  origin: "right",
});
// skill
ScrollReveal().reveal(".skill-heading-left", { delay: 100, origin: "left" });
ScrollReveal().reveal(".content-skill .col1 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
// work
ScrollReveal().reveal(".heading h2", { delay: 100, origin: "left" });
ScrollReveal().reveal(".container-work .row", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
// service
ScrollReveal().reveal(".container-service .show", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
// portfolio
ScrollReveal().reveal(".portfolio-list .img-card", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
// cat
ScrollReveal().reveal(".cat", { delay: 100, origin: "left" });
// contact
ScrollReveal().reveal(".contact-left", { delay: 100, origin: "left" });
ScrollReveal().reveal(".contact-left ul li", {
  delay: 100,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".contact-right ", { delay: 100, origin: "right" });
