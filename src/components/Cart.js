import { React, useState, useEffect } from 'react'
import './Main.css'
import axios from 'axios'


export default function Cart(props) {

    const [Cart, setCart] = useState([])

    async function getCartProducts(){
        try{
            const crtpro = await axios.get('http://localhost:3333/cartProducts')
            setCart(crtpro.data);
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(() => {
        getCartProducts();
    },[]);                         //////////////////// Adding Cart to dependency array causinng executing get req. exponentailly :(

    return (
        <div className="Added container bg-dark border border-primary">
            <h6 className="bg-primary p-2">Cart</h6>
            <div className="row">
                {Cart.map((childcart,key) => {
                    return (<div className=" AddedP container d-flex justify-content-around" key={key}>
                        <p>{childcart.Name}</p>
                        <p>{childcart.Price}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}
