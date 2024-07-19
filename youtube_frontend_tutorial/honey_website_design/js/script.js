const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("olala", window.scrollY > 80);
})