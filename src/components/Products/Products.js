import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaPlusCircle } from "react-icons/fa";

export const Products = () => {

    const { All_items } = useSelector(state => state)

    // console.log(All_items.products);

    const Cartstyle = { fontSize: "3em", color: 'green', position: 'absolute', bottom: 100, right: 0, }
    return (
        <div>
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
                                <button style={{border:'none'}} onClick={()=>{console.log(item)}}>
                                    <FaPlusCircle style={Cartstyle} />
                                </button>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
