export const cart = [];
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
}
export function CartQuantity(){
  let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity+=cartItem.quantity;
      document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    })
}



