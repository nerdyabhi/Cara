const closeBtn = document.querySelector("#navCloseBtn")
const openBtn = document.querySelector("#navOpenBtn")
const navLinks = document.querySelector(".nav-links")



openBtn.addEventListener("click" , ()=>
{
    navLinks.classList.add('right-0');
    navLinks.classList.remove('right-[-500%]');
})
closeBtn.addEventListener("click" , ()=>{
    navLinks.classList.add('right-[-500%]');
    navLinks.classList.remove('right-0');

})