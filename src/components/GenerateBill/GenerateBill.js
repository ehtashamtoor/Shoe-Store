import React from 'react'
import { useRef } from 'react';
import { useSelector } from 'react-redux'

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const GenerateBill = () => {

    const { All_items } = useSelector(state => state);
    const makePdf = useRef()


    const getPdf = async () => {
        const element = makePdf.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/jpg');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'JPG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('invoice.pdf');    
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 invoiceTitle">
                    <h2>Invoice</h2>
                    <p>Thanks for Shopping With Us!🤩</p>
                </div>
                <div className="col-md-6 col-sm-12 invoicewrapper" ref={makePdf} >
                    <table className='invoice'>
                        <thead>
                            <th>Image</th>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </thead>
                        <tbody>

                            {
                                All_items.added_items.map((item, index) => {
                                    return <tr key={index}>
                                        <td><img src={item.img} alt=".." className='img-fluid' /></td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td><strong>Rs:{item.price}</strong></td>
                                    </tr>
                                })
                            }
                            <tr>
                                <td colSpan={3} className="total">
                                    <strong>Total:</strong>
                                </td>
                                <td colSpan={3}>
                                    <strong>Rs:{All_items.total}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4}>
                                    <button className="btn btn-info PayBtn" onClick={() => { getPdf() }}>Pay Bill</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default GenerateBill