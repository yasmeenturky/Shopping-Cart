import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css"

export const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data;
    const {cartItems, removeFromCart, addToCart, updateCartItemCount} = useContext(ShopContext);

    return ( 
        <div className="cartItem"> 
            <img  src={productImage} alt=""/>
            <div className="description"> 
                <p> 
                    <b>{productName}</b>
                </p>
                <p> 
                    ${price}
                </p>
                <div className="count"> 
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} 
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>


        </div>
    )
}