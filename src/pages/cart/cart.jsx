import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cartItem";
import "./cart.css"
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const {cartItems, getCartTotalAmount} = useContext(ShopContext)
    const total = getCartTotalAmount()
    const navigate = useNavigate()


    return( 

        <div className="cart">
          <div> 
            <h1>Your Cart Items</h1>
          </div>
          <div className="cartItems"> 
            {PRODUCTS.map((product) => {
                 if(cartItems[product.id] !== 0 ) {
                    return <CartItem data={product} key={product.id}/>
                 }
                 
            })}
          </div>
          {total > 0 ?
          <div className="checkout"> 
                <p> Subtotal: ${total} </p>
                <button onClick={() => navigate("/")}> Continue Shopping</button>
                <button>Checkout</button>
          </div> 
          :
            <h2> You Cart is Empty</h2>
          }
       </div>
    )
}