let ethical = document.querySelector("#ethical");
let food = document.querySelector("#food");
let less = document.querySelector("#less");
let port = document.querySelector("#port");
let becode = document.querySelector("#becode");
let backarrow = document.querySelector(".cont i");
let myWork = document.querySelector("#myWork");
let slide = document.querySelector(".transition-page");
let sectionTwo = document.querySelector(".two");

ethical.addEventListener('click', function () {
    window.open("https://ahmedj3far.github.io/ethical.github.io/");
});

food.addEventListener('click', function () {
    window.open("https://ahmedj3far.github.io/food.github.io/")
});
less.addEventListener('click', function () {
    window.open("https://ahmedj3far.github.io/simpleLanding.github.io/")
});
port.addEventListener('click', function () {
    window.open("https://www.behance.net/ahmedbadri")
});
becode.addEventListener('click', function () {
    window.open("https://ahmedj3far.github.io/becode.github.io/becode.html");
});

myWork.onclick = function () {
    slide.classList.toggle("slide")
};
