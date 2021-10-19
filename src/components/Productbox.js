import { React, useContext, useEffect } from 'react'
import './Main.css'
import CartContext from '../context/CartContext'

export default function Productbox({product}) {

    const cart = useContext(CartContext)

    function Add(product) {
        console.log("Product Added to cart",product)
        // cart.setcartitem(...cart.cartitem,product)
        cart.cartitem.push(product)
        console.log("Cart",cart.cartitem)
    }
    useEffect(() => {
        // cart.setcartitem(...cart.cartitem,product)
        // console.log("crt",cart.cartitem)
    },[]);

    return (
        <div className="sProduct bg-primary">
            <h6>{product.Name}</h6>
            <p>{product.Price}rs.</p>
            <button onClick={()=>{Add(product)}} className="btn bg-warning border border-dark">Add To Cart</button>
            {/* <a className="btn bg-warning border border-dark">Add To Cart</a> */}
        </div >
    )
}
