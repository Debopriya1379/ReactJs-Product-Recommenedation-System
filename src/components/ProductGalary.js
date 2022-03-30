import { React, useState, useEffect } from 'react'
import './Main.css'
import Productbox from './Productbox'

export default function ProductGalary() {

    const[products,setProducts]=useState([])

    function loadProducts() {
        console.log("fetching data")
        fetch(`Products.json`).then((res) => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            const data = res.json()
            return data;
        }).then((data) => {
            setProducts( data.Products)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        loadProducts();
    }, [])
    return (
        <div className="PGalary container-fluid d-flex justify-content-around flex-wrap">
            {products.map((childproduct)=>{
               return <Productbox product={childproduct} key={childproduct.id}/>
            })}
        </div>
    )
}
