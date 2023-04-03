import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const ItemAmount = cartItems[id];

    return( 
        
        <div className="product">
         <img src={productImage} alt=""/>
         <div className="description"> 
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
         </div>
         <button className="addToCart" onClick={() => addToCart(id)}>
            Add To Cart {ItemAmount > 0 && <> ({ItemAmount})</>}
         </button>

       </div>
    )
}