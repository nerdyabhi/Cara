const quantityBox = document.getElementById("cartQuantity");
const quantity = quantityBox.children[1];
console.log(quantity);

quantityBox.addEventListener("click" , (evt)=>{
    updateCart(evt.target);
})

const updateCart =( (element) =>{
    let val = Number(quantity.innerText);
    if(element.id === 'incrementBtn' && val <20)
        quantity.innerText = val+1 ;
        

    else if(element.id === 'decrementBtn')
    {
        if(val >1) quantity.innerText = val -1;
    }
        
})

