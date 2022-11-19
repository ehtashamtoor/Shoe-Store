import './Navbar.css'
import logo from '../../images/logo.png'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FaCartPlus } from "react-icons/fa"
import { useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Navbar = () => {
    // cart styling
    const Cartstyle = { fontSize: "2em", color: 'red' }

    const { All_items } = useSelector(state => state)
    let [numOfItems, setNumOfItems] = useState();

    const overlayIcon = useRef();
    useEffect(() => {
        numOfItems = All_items.added_items.length;
        setNumOfItems(numOfItems);
        if (numOfItems > 0) {
            overlayIcon.current.style.visibility = 'visible'
        } else {
            overlayIcon.current.style.visibility = 'hidden'
        }

        AOS.init();// for animation
    }, [All_items.added_items.length])


    return (
        <nav className="navbar navbar-expand-md navbar-light bg-info p-2 sticky-top">

            <Link className="navbar-brand" to="/">
                <div data-aos="fade-right" style={{ display: 'inline-block' }}>
                    <img src={logo} alt="" id='logo' />
                </div>
                ELITEMOVE
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/products">
                            All Products
                        </Link>
                    </li>
                </ul>
            </div>
            <div id='cart'>
                <Link className="nav-link" to="/products/yourCart">
                    <FaCartPlus style={Cartstyle} />
                    <span id='overlayOnIcon' ref={overlayIcon}>{numOfItems}</span>
                </Link>
            </div>
        </nav>
    )
}