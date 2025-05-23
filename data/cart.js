export let cart;
loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart = [{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:2,
      deliveryOptionId:'1'
    },{
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:1,
      deliveryOptionId:'2'
    }];
    
  }
}

function saveToStorage(){
  localStorage.setItem('cart' , JSON.stringify(cart));
}
export function addToCart(productId){
  let matchItem;
    cart.forEach((cartItem) =>{
      if(productId === cartItem.productId){
        matchItem=cartItem;
      }
    });
    if(matchItem){
      matchItem.quantity += 1;
    }else{
      cart.push({
      productId : productId,
      quantity : 1
    });
    } 
    saveToStorage();
}
export function CartQuantity(){
  let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity+=cartItem.quantity;
      document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    })
}

export function removeCart(productId){
  const index = cart.findIndex(cartItem => cartItem.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1); // removes the item in-place
    saveToStorage();
  }
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchItem;
  cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
      matchItem=cartItem;
    }
  });
  matchItem.deliveryOptionId=deliveryOptionId;
  saveToStorage();

}

