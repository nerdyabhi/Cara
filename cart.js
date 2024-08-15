let quantityBox = document.querySelectorAll('.cartQuantity');
const cartQuantityNumber = document.getElementById('cartQuantityNumber');
const cartArea = document.getElementById('cart-area');
const emptyCart = document.querySelector(".empty-cart");
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
let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || [];

if (cartItems.length === 0) {
    emptyCart.style.display = "flex";
}

function updateCartElement(cart) {
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


const productsInCart = document.querySelectorAll(".productInCart");

productsInCart.forEach((product)=>{
  product.addEventListener("click" , (evt)=>{
      if(evt.target.id === "deleteCart"){
        product.remove();
        let imgLink = product.children[0].children[0].src;
        cartItems = cartItems.filter((item) => item.img !== imgLink);
        localStorage.setItem("productsInCart" , JSON.stringify(cartItems));
      }
      
  })
})