import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlusCircle } from "react-icons/fa";
import { ADD_ITEM } from '../../actions/allActions';

export const Products = () => {

    const { All_items } = useSelector(state => state)

    // console.log(All_items.products);
    // console.log(All_items.added_items);

    const dispatch = useDispatch();

    const AddItem = (id) => {

        // toast styling
        const notify = () => toast(`${All_items.products[id - 1].name} added to Cart`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
        });

        notify();
        // dispatching action ADD_ITEM
        dispatch(ADD_ITEM(id));
    }

    const Cartstyle = { fontSize: "3em", color: 'green', position: 'absolute', bottom: 100, right: 0, }
    return (
        <div>
            <ToastContainer />
            <h2 className='text-center mt-3'>Our specialized shoes</h2>
            <div id='productsWrapper' className='container'>
                <div className="row" id='productsRow'>
                    {
                        All_items.products.map((item) => {

                            return <div className="col-lg-3 col-md-5 col-sm-8" id="productBox" key={item.id}>
                                <h6><strong>{item.name}</strong></h6>
                                <img src={item.img} alt="img" className='img-fluid' />
                                <h4>Rs: {item.price}</h4>
                                <p>Type: {item.category}</p>
                                <p>Size: {item.size}</p>
                                <Link to={`/products/${item.id}`}>
                                    <button className='btn btn-info'>Have a look</button>
                                </Link>
                                <button style={{ border: 'none' }} >
                                    <FaPlusCircle style={Cartstyle} onClick={() => { AddItem(item.id) }} />
                                </button>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
