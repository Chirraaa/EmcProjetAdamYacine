const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('nav-toggle');
});


document.querySelector(".year").
innerHTML = new Date().getFullYear();
