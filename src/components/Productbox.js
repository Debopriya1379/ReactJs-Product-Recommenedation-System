import { React } from 'react'
import './Main.css'
import axios from 'axios'

export default function Productbox({product}) {

    async function Add(product) {
        console.log("Product Added to cart",product)
        try{
            await axios.post('http://localhost:3333/cartProducts',product)
        }catch(err){
            console.log(err)
        }
    }
    // useEffect(() => {
    //     cart.setcartitem(...cart.cartitem,product)
    //     console.log("crt",cart.cartitem)
    // },[]);

    return (
        <div className="sProduct bg-primary">
            <h6>{product.Name}</h6>
            <p>{product.Price}rs.</p>
            <button onClick={()=>{Add(product)}} className="btn bg-warning border border-dark">Add To Cart</button>
            {/* <a className="btn bg-warning border border-dark">Add To Cart</a> */}
        </div >
    )
}
