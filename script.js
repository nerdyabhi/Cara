const closeBtn = document.querySelector("#navCloseBtn")
const openBtn = document.querySelector("#navOpenBtn")
const navLinks = document.querySelector(".nav-links")
const smallImages = document.querySelectorAll(".small-img img")
const mainImg = document.querySelector("#main-img");


openBtn.addEventListener("click", () => {
    navLinks.style.right = "0";
})

closeBtn.addEventListener("click", () => {
    navLinks.style.right = "-500%";

})

/* Products section image changing*/

smallImages.forEach((img)=>{
    img.addEventListener("click" , ()=>{
        let link = mainImg.getAttribute("src");
        mainImg.src = img.src;
        img.src =link;
    })
})


