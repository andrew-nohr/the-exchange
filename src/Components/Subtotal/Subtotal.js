import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.css';
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../Reducer/Reducer';




function Subtotal() {
 
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) =>(
            <>
                <p>
                    Subtotal ({basket?.length} items): <strong> {value} </strong>
                </p>
                <samll className='subtotal-gift'>
                    <input type="checkbox" /> This order contains a gift!
                </samll>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
        />
    
    </div>
  )
}

export default Subtotal
