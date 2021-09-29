import React from 'react'
import './Main.css'
import Cart from './Cart'
import Recommended from './Recommended'

export default function Sidebar(props) {
    return (
        <div className="Sidebar container">
            <Cart/>
            <Recommended/>
        </div>
    )
}
