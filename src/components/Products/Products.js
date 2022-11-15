import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlusCircle } from "react-icons/fa";
// import { ADD_ITEM } from '../../actions/allActions';
import { ADD_ITEM } from '../../reducers/reducers';

import { useRef } from 'react';
import { useState } from 'react';

export const Products = () => {

    const { All_items } = useSelector(state => state)
    const dispatch = useDispatch();

    // getting categories from all products
    const categories = All_items.products.reduce((newArray, item) => {
        if (!newArray.includes(item.category)) {
            newArray.push(item.category);
        }
        return newArray;
    }, ['All'])
    //useref for to get all buttons
    let btns = useRef();
    let [filteredItems, setfFilteredItems] = useState([]);

    const AddItem = (id) => {

        // toast styling
        const notify = () => toast.success(`${All_items.products[id - 1].name} added to Cart`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
        });

        notify();
        // let idIndex = {
        //     id, index
        // }
        
        // dispatching action ADD_ITEM
        dispatch(ADD_ITEM(id));
    }

    const getFilteredItems = (category) => {

        filteredItems = All_items.products.filter((item) => {
            if (item.category === category) {
                return item;
            }
        })

        setfFilteredItems([...filteredItems])
        // console.log(filteredItems)
    }
    const Cartstyle = { fontSize: "3em", color: 'green', position: 'absolute', bottom: 100, right: 0, }
    return (
        <div>
            <ToastContainer />
            <h2 className='text-center mt-3'>Our specialized shoes</h2>

            <div id='productsWrapper' className='container'>
                <div className="col-12 btnWrapper" ref={btns}>
                    {
                        categories.map((category, index) => {
                            return <button className="btn btn-warning" key={index} onClick={() => { getFilteredItems(category) }}>{category}</button>
                        })
                    }
                </div>
                <div className="row" id='productsRow'>
                    {
                        filteredItems.length > 0 ?
                            filteredItems.map((item, index) => {
                                return <div className="col-lg-3 col-md-5 col-sm-8" id="productBox" key={index}>
                                    <h6><strong>{item.name}</strong></h6>
                                    <img src={item.img} alt="img" className='img-fluid' />
                                    <h4>Rs: {item.price}</h4>
                                    <p>Type: {item.category}</p>
                                    <p>Size: {item.size}</p>
                                    <Link to={`/products/${item.id}`}>
                                        <button className='btn btn-info'>Have a look</button>
                                    </Link>
                                    <button style={{ border: 'none' }} >
                                        <FaPlusCircle style={Cartstyle} onClick={() => { AddItem(item.id, index) }} />
                                    </button>
                                </div>
                            })
                            :
                            All_items.products.map((item, index) => {

                                return <div className="col-lg-3 col-md-5 col-sm-8" id="productBox" key={index}>
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
