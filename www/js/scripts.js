//sidebar 
//tutorial on https://www.youtube.com/watch?v=dEdwDijoceY
//I tried to get the framework7 side panel to work but it totally made everything else stop functioning and still wouldnt work
const navBar = document.querySelector("nav"),
menuBtns = document.querySelectorAll(".menu-icon"),
overlay = document.querySelectorAll(".overlay");

menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});
    
overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
})