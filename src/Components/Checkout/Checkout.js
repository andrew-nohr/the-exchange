import React from 'react';
import './checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import {useStateValue} from '../StateProvider/StateProvider'


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img 
                className='checkout-ad' 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt="advertisement" 
                />

            <div>
                <h2 className='checkout-title'> You're Shopping Basket</h2>
            </div>
        </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
