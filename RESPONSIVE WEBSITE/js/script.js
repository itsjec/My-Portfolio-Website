// fixed header on scroll

// active menu icon
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-mobile");
menu.addEventListener("click", function(){
    this.classList.toggle("active");
    nav.classList.toggle("active");
})