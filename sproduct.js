// const mainImg = document.querySelector('#main-img');
const productQuantitiy = document.querySelector('#productQuantitiy');
const productPrice = document.querySelector('#productPrice');
const submitBtn = document.querySelector('#submitBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

console.log(popup);
console.log(closePopup);

let localTasks = JSON.parse(localStorage.getItem('productsInCart')) || [];

let productDetails = {
  img: mainImg.src,
  description: 'Nerdy Printed Cool Apparel !',
  quanitity: Number(productQuantitiy.value),
  price: productPrice.innerText,
};

submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  productDetails.quanitity = productQuantitiy.value;
  const isProductInCart = localTasks.some(
    (task) => task.img === productDetails.img
  );

  if (!isProductInCart) {
    localTasks.push(productDetails);
    localStorage.setItem('productsInCart', JSON.stringify(localTasks));
    popup.querySelector('h3').innerText = 'Item added to cart';
    showPopup();
  } else {
    popup.querySelector('h3').innerText = 'Item Already in Cart';
    showPopup();
  }
});

// Logic for popup
function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('-right-80');
  popup.classList.add('right-5');

  setTimeout(() => {
    hidePopup();
  }, 5000);
}

function hidePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('right-5');
  popup.classList.add('-right-80');
}

document.getElementById('closePopup').addEventListener('click', hidePopup);
