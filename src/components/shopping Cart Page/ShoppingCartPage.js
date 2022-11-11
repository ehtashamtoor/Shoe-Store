import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import { INC_ITEM } from '../../actions/allActions';

const ShoppingCartPage = () => {

    const { All_items } = useSelector(state => state);
    const dispatch = useDispatch();

    const IncQty = (id) =>{
        //dispatching increase Qty action
        dispatch(INC_ITEM(id));

        console.log(All_items.total);
    }

    const plusQtyStyle = { fontSize: "2em", color: 'green', position: 'absolute', top: 150, left: 10, }
    const minusQtyStyle = { fontSize: "2em", color: 'green', position: 'absolute', top: 150, left: 50, }
    return (
        <>
            <div className='container'>
                <div className="row p-2">
                    {
                        All_items.added_items.map((item) => {
                            return <div className="card mb-2" style={{ maxWidth: 840 }} key={item.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8" style={{ position: 'relative' }}>
                                        <div className="card-body">
                                            <h6 className="card-title"><strong>{item.name}</strong></h6>
                                            <h3 className="card-title">Rs:<strong>{item.price}</strong></h3>
                                            <h6 className="card-title">Size: {item.size}</h6>
                                            <h4 className="card-title">Quantity: <strong>{item.quantity}</strong></h4>
                                            <button className='btn'>
                                                <FaPlusSquare style={plusQtyStyle} onClick={()=>{IncQty(item.id)}}/>
                                            </button>
                                            <button className='btn'>
                                                <FaMinusSquare style={minusQtyStyle}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default ShoppingCartPage