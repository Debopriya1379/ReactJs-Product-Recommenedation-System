import {React} from 'react'
import ProductGalary from './ProductGalary'
import Sidebar from './Sidebar'
import './Main.css'

export default function Main() {
    return (
        <div className=" Main container-fluid d-flex">
            <ProductGalary/>
            <Sidebar/>
        </div>
    )
}
