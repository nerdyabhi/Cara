const closeBtn = document.querySelector("#navCloseBtn")
const openBtn = document.querySelector("#navOpenBtn")
const navLinks = document.querySelector(".nav-links")


openBtn.addEventListener("click", () => {
    navLinks.style.right = "0";
})

closeBtn.addEventListener("click", () => {
    navLinks.style.right = "-500%";

})