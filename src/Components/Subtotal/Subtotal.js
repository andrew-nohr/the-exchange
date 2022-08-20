import React from 'react';
import CurrencyFormat from 'react-currency-format';



function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) =>(
            <>
                <p>
                    Subtotal (0 items): <strong> 0 </strong>
                </p>
                <samll className='subtotal-gift'>
                    <input type="checkbox" /> This order contains a gift!
                </samll>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
    </div>
  )
}

export default Subtotal
