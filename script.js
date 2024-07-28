const closeBtn = document.querySelector("#navCloseBtn");
const openBtn = document.querySelector("#navOpenBtn");
const navLinks = document.querySelector(".nav-links");
const smallImages = document.querySelectorAll(".small-img img");
const mainImg = document.querySelector("#main-img");
const cartBoxes = document.querySelectorAll(".cart-boxes");




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

/* click on any product and you'll be linked to */

cartBoxes.forEach((product)=>{
    product.addEventListener("click" , ()=>{
        let img = product.children[0];
        window.location.href = './sproduct.html';
       console.log(mainImg);

    })
})

