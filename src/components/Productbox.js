import React from 'react'
import './Main.css'

export default function Productbox(props) {
    const Add = () => {
        // e.preventDefault();
        props.setCart(...props.cart,props.product)
    }
    return (
        <div className="sProduct bg-info">
            <h6>{props.product.Name}</h6>
            <p>{props.product.Price}rs.</p>
            {/* <button onClick={Add} className="btn border border-dark">+</button> */}
            <a onChange={Add} className="btn bg-warning border border-dark">+</a>
        </div>
    )
}
