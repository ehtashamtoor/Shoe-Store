import React from 'react'
import shoes from '../../shoes.json'
import { Link } from 'react-router-dom'

export const Products = () => {

    return (
        <div>
            <h2 className='text-center mt-3'>Our specialized shoes</h2>
            <div id='productsWrapper' className='container'>
                <div className="row" id='productsRow'>
                    {
                        Object.keys(shoes).map((name) => {
                            let shoe = shoes[name]

                            return <div className="col-lg-3 col-md-4 col-sm-6" id="productBox" key={shoe.id}>
                                <h6>{shoe.name}</h6>
                                <img src={shoe.img} alt="img" className='img-fluid' />
                                <h4>Rs: {shoe.price}</h4>
                                <p>Type: {shoe.category}</p>
                                <p>Size: {shoe.size}</p>
                                <Link to={`/products/${shoe.name}`}>
                                    <button className='btn btn-info'>Check this out</button>
                                </Link>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    )
}
