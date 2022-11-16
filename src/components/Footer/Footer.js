import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const Footer = () => {

    const linkStyle = { textDecoration: 'none', color: "darkBlue" }
    return (
        <>
            <footer className="page-footer font-small pt-4" style={{background: 'skyblue'}}>
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h4 className="text-uppercase">
                                <img src={logo} alt="" id='logo'/>
                                ELITEMOVE Shoes</h4>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

                        <div className="col-md-6 mb-md-0 mb-3">
                            <h5 className="text-uppercase">GO TO</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/products" style={linkStyle}>All products</Link></li>
                                <li><Link to="/about" style={linkStyle}>About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <Link to="/" style={linkStyle}> EliteMove</Link>
                </div>

            </footer>

        </>
    )
}

export default Footer