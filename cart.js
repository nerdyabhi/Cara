let quantityBox = document.querySelectorAll('.cartQuantity');
const cartQuantityNumber = document.getElementById('cartQuantityNumber');
const cartArea = document.getElementById('cart-area');

const updateCart = (element, quantity) => {
  let val = Number(quantity.innerText);
  if (element.id === 'incrementBtn') {
    if (val >= 20) alert("You can't add more than 20 items at once");
    else quantity.innerText = val + 1;
  } else if (element.id === 'decrementBtn') {
    if (val > 1) quantity.innerText = val - 1;
  }
};

// let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
let cartItems = JSON.parse(localStorage.getItem("productsInCart")) || [];
console.log("Cart items from localStorage:", cartItems);

function updateCartElement(cart) {
  console.log(cart['img']);
  let template = document.querySelector('template');
  let content = template.content.cloneNode(true);
  content.querySelector('img').src = cart['img'];
  content.querySelector('#cartDescription').innerText = cart['description'];
  content.querySelector('#showQuantity').innerText = cart['quanitity'];
  content.querySelector('#cartPrice').innerText = `$${cart['price']}`;
  cartArea.append(content);
  quantityBox = document.querySelectorAll('.cartQuantity');
  cartQuantityNumber.innerText = quantityBox.length;
}

cartItems.forEach((cart) => {
  updateCartElement(cart);
});

quantityBox.forEach((box) => {
  box.addEventListener('click', (evt) => {
    evt.preventDefault();
    const quantity = box.children[1];
    updateCart(evt.target, quantity);
  });
});
