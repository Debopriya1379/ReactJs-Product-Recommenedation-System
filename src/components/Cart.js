import { React, useState } from 'react'
import './Main.css'

export default function Cart(props) {
    const [cart, setCart] = useState([])
    return (
        <div className="Added container border border-primary">
            <h6 className="bg-info p-2">Cart</h6>
            <div className="row">
                {cart.map((childcart) => {
                    return (<div className=" AddedP container d-flex justify-content-around">
                        <p>{childcart.Name}</p>
                        <p>{childcart.Price}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}
