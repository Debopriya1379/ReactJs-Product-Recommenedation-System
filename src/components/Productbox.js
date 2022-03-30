import { React } from 'react'
import './Main.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/CartSlice';

export default function Productbox({product}) {

    const dispatch = useDispatch();

    const Add = (product)=>{
        console.log("Add", product);
        dispatch(addToCart(product));
    }

    return (
        <div className="sProduct bg-primary">
            <h6>{product.Name}</h6>
            <p>{product.Price}rs.</p>
            <button onClick={()=>{Add(product)}} className="btn bg-warning border border-dark">Add To Cart</button>
            {/* <a className="btn bg-warning border border-dark">Add To Cart</a> */}
        </div >
    )
}
