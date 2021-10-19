import React from 'react'
import './Main.css'

export default function Recommended() {
    return (
        <div className="Recommended container-fluid border border-primary">
            <h6 className="bg-primary p-2">Recommended products</h6>
            <div className="row">
                <div className=" AddedP container d-flex justify-content-around">
                    <p>product name</p>
                    <p>price</p>
                </div>
                <div className=" AddedP container d-flex justify-content-around">
                    <p>product name</p>
                    <p>price</p>
                </div>
            </div>
        </div>
    )
}
