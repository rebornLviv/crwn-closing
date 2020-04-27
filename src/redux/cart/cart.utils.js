export const addItemToCart = (cartItems,cartItemToAdd) =>{
const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
if(existingCartItem){

    return cartItems.map(cartItem => cartItem.id === existingCartItem.id 
        ? {...cartItem,quantity:cartItem.quantity+1} : cartItem)
}
return [...cartItems,{...cartItemToAdd,quantity:1}]

}

export const removeItemF = (cartItems,cartItemR)=> {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemR.id)
    if(existingCartItem.quantity === 1){
        return cartItems.filter (cartItem => cartItem.id !== cartItemR.id)
    }
    return cartItems.map(
        cartItem => cartItem.id === cartItemR.id ? {...cartItem,quantity:cartItem.quantity -1} 
        : cartItem
    )

}