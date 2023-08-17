import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    //console.log(cartItems);
    
    const dispatch = useDispatch();
    
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
  return (
    <div>
    <h1 className="font-bold text-3xl" >Cart Items - {cartItems.length}</h1>
    <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}>Clear Cart</button>
    <div className="flex flex-wrap p-3 m-3" data-testid="cart-menu-list">
    {cartItems.map((item, index) =><FoodItem key={item.id} {...item} index = {index}/>)}
    </div>
    </div>
  )
}

export default Cart