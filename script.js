const closeBtn = document.querySelector('#navCloseBtn');
const openBtn = document.querySelector('#navOpenBtn');
const navLinks = document.querySelector('.nav-links');
const smallImages = document.querySelectorAll('.small-img img');
let mainImg = document.querySelector('#main-img');
const cartBoxes = document.querySelectorAll('.cart-boxes');

let cartLengthArea = document.querySelectorAll('.cartQuantityNumber');

let localTasks1 = JSON.parse(localStorage.getItem('productsInCart')) || [];

updateCartItemsLength();

function updateCartItemsLength() {
  cartLengthArea.forEach((num) => {
    if (localTasks1.length == 0) {
      num.classList.add("hidden");
      console.log(cartLengthArea);
      
    } else {
      // num.style.display = block;
      num.classList.remove("hidden");
      num.innerText = localTasks1.length;
    }
  });
}


openBtn.addEventListener('click', () => {
  navLinks.style.right = '0';
});

closeBtn.addEventListener('click', () => {
  navLinks.style.right = '-500%';
});

/* Products section image changing*/

smallImages.forEach((img) => {
  img.addEventListener('click', () => {
    let link = mainImg.getAttribute('src');
    mainImg.src = img.src;
    img.src = link;
    mainImg = document.querySelector('#main-img');
  });
});

/* click on any product and you'll be linked to */

cartBoxes.forEach((cart) => {
  cart.addEventListener('click', (evt) => {
    evt.preventDefault();
    mainLink = cart.children[0].src;
    localStorage.setItem('sProductLink', JSON.stringify(mainLink));
    window.location.href = 'sproduct.html';
  });
});

let mainImgLink = JSON.parse(localStorage.getItem('sProductLink'));
if (mainImgLink && mainImg) {
  mainImg.src = mainImgLink;
}
