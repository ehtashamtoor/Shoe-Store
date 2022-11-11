import React from 'react'
import { useParams } from 'react-router';
import shoes from '../../shoes.json'

export const ProductItem = () => {
    const product = useParams();
    let shoe = shoes[product.product]
    // console.log(shoe)

    return <>
        {
            <div className="card mb-2 item" style={{ maxWidth: 600 }}>
                <div className="row no-gutters justify-content-center">
                    <div className="col-md-8">
                        <img src={shoe.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">{shoe.name}</h3>
                            <h2 className="card-title"><strong>Rs:{shoe.price}</strong></h2>
                            <h4 className="card-title">Size: {shoe.size}</h4>
                            <h4 className="card-title">Type: {shoe.category}</h4>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
}
