import { React, useState, useContext, useEffect } from 'react'
import './Main.css'
import CartContext from '../context/CartContext'


export default function Cart(props) {
    const cart = useContext(CartContext)

    const [Cart, setCart] = useState([])

    useEffect(() => {
        setCart(...Cart, cart.cartitem)
        console.log("crt", cart.cartitem)
    }, [cart.cartitem]);

    return (
        <div className="Added container bg-dark border border-primary">
            <h6 className="bg-primary p-2">Cart</h6>
            <div className="row">
                {Cart.map((childcart) => {
                    return (<div className=" AddedP container d-flex justify-content-around" key={childcart.id}>
                        <p>{childcart.Name}</p>
                        <p>{childcart.Price}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}
