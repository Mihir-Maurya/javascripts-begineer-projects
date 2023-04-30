const hamburgerBtn = document.querySelector(".hamburger");

const hamburgerImageEl = document.querySelector(".hamburger-image");
const navbarEl = document.querySelector(".nav-bar");
const navlinksEl = document.querySelector(".nav-links");
const ulEl = document.querySelector("ul");

hamburgerBtn.addEventListener("click",()=>{
    navbarEl.classList.toggle("active");
    navlinksEl.classList.toggle("active");
    ulEl.classList.toggle("active");
    if(hamburgerImageEl.getAttribute("src")==="./icon-hamburger.svg"){
        hamburgerImageEl.setAttribute("src","./icon-close.svg")
    }else{
        hamburgerImageEl.setAttribute("src","./icon-hamburger.svg");
    }
})
