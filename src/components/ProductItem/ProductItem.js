import React from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaPlusCircle } from "react-icons/fa";
import { ADD_ITEM } from '../../actions/allActions';

export const ProductItem = () => {

    const { productId } = useParams();

    const { All_items } = useSelector(state => state);
    const dispatch = useDispatch();

    // selected item.id is 1 less than productId
    const selected_item = All_items.products[productId - 1];

    const AddItem = (id) => {

        // toast styling
        const notify = () => toast.success(`${All_items.products[id - 1].name} added to Cart`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
        });

        notify();
        // dispatching action ADD_ITEM
        dispatch(ADD_ITEM(id));
    }

    const Cartstyle = { fontSize: "5em", color: 'green', position: 'absolute', bottom: 200, right: 10, }

    return <>
        {
            
            <div className="card mb-2 item" style={{ maxWidth: 600 }}>
                <ToastContainer />
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
                        <button style={{ border: 'none' }} >
                            <FaPlusCircle style={Cartstyle} onClick={() => { AddItem(selected_item.id) }} />
                        </button>
                    </div>
                </div>
            </div>
        }
    </>
}
