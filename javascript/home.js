let menuBtn = document.querySelector("#mobile-icon");
let menu = document.querySelector("#mobile-menu");
let closeMenu = document.querySelector("#close-menu");
let myWork = document.querySelector("#myWork");
let sectionFour = document.querySelector(".four");
let fillSpan = document.querySelectorAll(".four .fill span");
let loading = document.querySelector("#loader");
// form inputs
// let form = document.querySelectorAll("form input");
// let name = document.querySelector(".email-card form .name");
// let email = document.querySelector(".email-card form  .email");
// let massege = document.querySelector(".email-card form .massege");
// let sentBtn = document.querySelector(".email-card form .send-btn");
// let form = document.querySelectorAll("form input");
// console.log(form)

// mobile menu button
menuBtn.addEventListener("click", function () {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeMenu.style.display = "block";
});
// close menu button
closeMenu.onclick = function () {
    closeMenu.style.display = "none";
    menu.style.display = "none";
    menuBtn.style.display = "block";
};
// skills fill out actions
window.onscroll = function () {
    if (window.scrollY >= sectionFour.offsetTop - 500) {
        // console.log("reached section four");
        fillSpan.forEach((spans) => {
            spans.style.width = spans.dataset.width
        })
    }
};