import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FaCartPlus } from "react-icons/fa"
import { useState } from 'react'

export const Navbar = () => {
    // cart styling
    const Cartstyle = { fontSize: "2em", color: 'red' }

    const { All_items } = useSelector(state => state)
    let [numOfItems, setNumOfItems] = useState();

    const overlayIcon = useRef();
    useEffect(() => {
        numOfItems = All_items.added_items.length;
        setNumOfItems(numOfItems);
        if(numOfItems > 0){
            overlayIcon.current.style.visibility = 'visible'
        }else{
            overlayIcon.current.style.visibility = 'hidden'
        }
    }, [All_items.added_items.length])


    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-info p-3">
            <Link className="navbar-brand" to="/">Home</Link>

            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">All Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About us</Link>
                    </li>
                </ul>
                <div id='cart'>
                    <Link className="nav-link" to="/products/yourCart">
                        <FaCartPlus style={Cartstyle} />
                        <span id='overlayOnIcon' ref={overlayIcon}>{numOfItems}</span>
                    </Link>
                </div>
            </div>
        </nav>

    )
}
