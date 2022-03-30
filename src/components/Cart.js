import { React  } from 'react'
import './Main.css'
import { useSelector } from 'react-redux'


export default function Cart() {

    const Cart = useSelector((state)=> state.cartItems.cartItems)

    return (
        <div className="Added container bg-dark border border-primary">
            <h6 className="bg-primary p-2">Cart</h6>
            <div className="row">
                {Cart.map((childcart,key) => {
                    return (<div className=" AddedP container d-flex justify-content-around" key={key}>
                        <p>{childcart.Name.substr(0,20)}</p>
                        <p>{childcart.Price}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}
