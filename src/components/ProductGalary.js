import { React, useState, useEffect } from 'react'
import './Main.css'
import Productbox from './Productbox'

export default function ProductGalary(props) {

    const[products,setProducts]=useState([])

    function loadProducts() {
        console.log("fetching data")
        fetch(`Products.json`).then((res) => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            console.log(res)
            const data = res.json()
            console.log(data)
            return data;
        }).then((data) => {
            console.log("Data",data)
            setProducts( data.Products)
            // console.log("products",products)
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
