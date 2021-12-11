import React from 'react'
import CanvasLayout from '../../components/canvas/CanvasLayout'
import './Customers.css'
const Customers = () => {
    return (
        <div className="customer-outer-flex" style={{display: 'flex',justifyContent: 'center',alignItems:'center'}}>
             <div className="cust-inner-item-right" style={{display: 'flex',justifyContent:'center',alignItems: 'center'}}>
               
               <div className="cust-text-content">
                   <p className="cust-title">Ready to get Started?</p>
                   <p className="cust-sub">Sign up today</p>
                   <button className="cust-but">Join</button>
               </div>
           </div>
           
           
        </div>
    )
}

export default Customers
