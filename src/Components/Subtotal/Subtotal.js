import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.css';
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../Reducer/Reducer';
import { useNavigate } from 'react-router-dom';




function Subtotal() {

 const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket.length} items): <strong> {value} </strong>
                </p>
                <samll className='subtotal-gift'>
                    <input type="checkbox" /> This order contains a gift!
                </samll>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />

        <button 
          className='subtotal-button'
          onClick={e => navigate ('/payment')}> Proceed To Checkout 
        </button>
    
    </div>
  )
}

export default Subtotal
