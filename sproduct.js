// const mainImg = document.querySelector('#main-img');
const productQuantitiy = document.querySelector('#productQuantitiy');
const productPrice = document.querySelector('#productPrice');
const submitBtn = document.querySelector('#submitBtn');

let localTasks = JSON.parse(localStorage.getItem('productsInCart')) || [];

let productDetails = {
  img: mainImg.src,
  description: 'Nerdy Printed Cool Apparel !',
  quanitity: productQuantitiy.value,
  price: productPrice.innerText,
};

submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (!localTasks.includes(productDetails)) {
    localTasks.push(productDetails);
    localStorage.setItem('productsInCart', JSON.stringify(localTasks));
    alert('Done sir.');
  } else {
    alert('ALready in cart sir.');
  }
});

// i can do activities like , reading a book or maybe watching some movie
// instead of mindlessly scrolling youtube shorts or reels.
// being in a good mental state is important.
