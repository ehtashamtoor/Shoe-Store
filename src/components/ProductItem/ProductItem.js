import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

export const ProductItem = () => {

    const {productId} = useParams();

    const { All_items } = useSelector(state => state);

    // selected item.id is 1 less than productId
    const selected_item = All_items.products[productId-1];
    // console.log(selected_item)

    return <>
        {
            <div className="card mb-2 item" style={{ maxWidth: 600 }}>
                <div className="row no-gutters justify-content-center">
                    <div className="col-md-8">
                        <img src={selected_item.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">{selected_item.name}</h3>
                            <h2 className="card-title"><strong>Rs:{selected_item.price}</strong></h2>
                            <h4 className="card-title">Size: {selected_item.size}</h4>
                            <h4 className="card-title">Type: {selected_item.category}</h4>
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
