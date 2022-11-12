import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import { INC_ITEM, DEC_ITEM, REMOVE_ITEM, DISMANTLE_ITEM } from '../../actions/allActions';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {

    const { All_items } = useSelector(state => state);
    const dispatch = useDispatch();

    const IncQty = (id) => {

        //dispatching increase Qty action
        dispatch(INC_ITEM(id));

        // console.log(All_items.added_items);
    }

    const DecQty = (id) => {
        //dispatching decrease Qty action
        dispatch(DEC_ITEM(id));
    }

    const RemoveItem = (id) => {
        //dispatching remove Item action
        dispatch(REMOVE_ITEM(id))
    }

    const DismantleItem = (id) => {
        //dispatching dismantle Item action
        dispatch(DISMANTLE_ITEM(id))
    }
    useEffect(() => {
        console.log(All_items.added_items)
    }, [All_items.added_items])


    const plusQtyStyle = { fontSize: "2em", color: 'green', position: 'sticky', top: 150, left: 10, }
    const minusQtyStyle = { fontSize: "2em", color: 'green', position: 'sticky', top: 150, left: 50, }

    return (
        <>
            <div className='container'>
                <div className="row p-2">
                    <h2>TOTAL:{All_items.total}</h2>
                    {
                        All_items.added_items.map((item, index) => {

                            return item.quantity > 0 ?
                                <div className="card mb-2" style={{ maxWidth: 840 }} key={index}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.img} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-6" style={{ position: 'relative' }}>
                                            <div className="card-body">
                                                <h6 className="card-title"><strong>{item.name}</strong></h6>
                                                <h3 className="card-title">Rs:<strong>{item.price}</strong></h3>
                                                <h6 className="card-title">Size: {item.size}</h6>
                                                <h4 className="card-title">Quantity: <strong>{item.quantity}</strong></h4>
                                                <button className='btn'>
                                                    <FaPlusSquare style={plusQtyStyle} onClick={() => { IncQty(item.id) }} />
                                                </button>
                                                <button className='btn'>
                                                    <FaMinusSquare style={minusQtyStyle} onClick={() => { DecQty(item.id) }} />
                                                </button>
                                                <button className="btn btn-warning" style={{ marginLeft: 20 }} onClick={() => { DismantleItem(item.id) }}>REMOVE FROM CART</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> : RemoveItem(item.id)
                        })
                    }
                    {
                        All_items.added_items.length > 0 ? <Link to="/products/yourCart/bill"><button className="btn btn-success"style={{width:"80vw"}} ><strong>Get Bill</strong></button></Link> : <h2>Oops!🙄 No item in Cart</h2>
                    }
                    
                </div>

            </div>
        </>
    )
}

export default ShoppingCartPage