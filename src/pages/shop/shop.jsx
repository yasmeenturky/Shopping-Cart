import React from "react";
import {PRODUCTS} from '../../products'
import { Product } from "./product";
import "./shop.css"

export const Shop = () => {
    return( 

        <div className="shop">
          <div className="title"> 
            <h2> 
                Tech Shop
            </h2>
          </div>
          <div className="products"> 
             {PRODUCTS.map((product) => {
                return( 
                    <Product data={product} key={product.id}/>

                )
             })}
          </div>
       </div>
    )
}