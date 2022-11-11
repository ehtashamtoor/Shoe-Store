import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-info p-3">
            <Link className="navbar-brand" to="/">Home</Link>

            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About us</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
