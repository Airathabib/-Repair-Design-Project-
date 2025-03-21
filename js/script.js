const formBtn = document.querySelector('.form__btn');
formBtn.addEventListener('click', (e) => {
  e.preventDefault()
});

const headerPhone = document.querySelector('.link__phone');
headerPhone.addEventListener('click', (e) => {
  e.preventDefault()
});

const footerPhone = document.querySelector('.footer__phone');
footerPhone.addEventListener('click', (e) => {
  e.preventDefault()
});

// CAROUSEL

"use strict";
console.log('carousel');
const left = document.getElementById("left-btn");
const right = document.getElementById("right-btn");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slider-image");
const slideShowLinks = document.querySelectorAll(".projects__link");
const infoWrapper = document.getElementById("wrapper");
const descrBlock = document.querySelectorAll(".info__list");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircle = [];
let linkIndex = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    if (bottom != null) {
        bottom.appendChild(div);
    }
    paginationCircle.push(div);
}
function showSlideLinks() {
    linkIndex = Object.values(slideShowLinks);
    linkIndex[0].classList.add("projects__link--active");
    linkIndex.forEach((link, index) => {
        link.addEventListener("click", () => changeSlide(index));
    });
}
function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircle[0].classList.add("active");
    paginationCircle.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}
function addActiveClass() {
    paginationCircle[currentSlideIndex].classList.add("active");
    linkIndex[currentSlideIndex].classList.add("projects__link--active");
}
function removeActiveClass() {
    paginationCircle[currentSlideIndex].classList.remove("active");
    linkIndex[currentSlideIndex].classList.remove("projects__link--active");
}
function showSlide() {
    slides[currentSlideIndex].classList.add("block");
    descrBlock[currentSlideIndex].classList.add("grid");
}
function hideslide() {
    slides[currentSlideIndex].classList.remove("block");
    descrBlock[currentSlideIndex].classList.remove("grid");
}
function changeSlide(slideIndex) {
    hideslide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}
function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if (newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}
function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}
addPagination();
showSlideLinks();
if (left != null)
    left.addEventListener("click", previousSlide);
if (right != null)
    right.addEventListener("click", nextSlide);
setInterval(nextSlide, 5000);
//# sourceMappingURL=index.js.map


