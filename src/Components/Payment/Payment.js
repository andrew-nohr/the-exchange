import React, { useEffect, useState } from 'react';
import './payment.css';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer/Reducer';
import axios from '../../axios'



export default function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async e => {
            e.preventDefault();
            //blocks user from hitting buy button multiple times
            setProcessing(true);

            //const payload = await stripe
    };

    const handleChange = e => {

        //listens for changes in the CardElement
            setDisabled(e.empty);
            setError(e.error ? e.error.message : "")
    };

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret ] = useState(true);

    useEffect (() => {

        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
              });
              // console.log("response", response.data.clientSecret);
              setClientSecret(response.data.clientSecret);
            };

            getClientSecret();
          }, [basket]);

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>){" "}
        </h1>
        <div className='payment-section'>
            <div className='payment-title'>
                <h3> Delivery Address</h3>
            </div>
            <div className='payment-address'>
                <p> {user?.email} </p>
                <p> 12345 Amazon Lane </p>
                <p> Vacaville, CA 95688</p>

            </div>
        </div>

        <div className='payment-section'>
            <div className='payment-title'>
                <h3> Review Items and Delivery </h3> 

            </div>
            <div className='payment-items'>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
            
        </div>
        <div className='payment-section'>
            <div className='payment-title'>
                <h3> Payment Method  </h3>
            </div>
            <div className='payment-details'>
                <form onSubmit={ handleSubmit }>
                    <CardElement onChange= { handleChange }/>

                    <div className='price-container'>
                    <CurrencyFormat
                        renderText={(value) => (
                        <>
                            <p>
                                <strong> Order Total: {value} </strong>
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
                        <button disabled ={ processing || disabled || succeeded }> 
                            <span> {processing ? <p> Processing </p> : "Buy Now" } </span>
                        </button>

                    </div>
                    {error && <div> {error} </div>}
                </form>

            </div>
            
        </div>
        

      </div>
    </div>
  )
}
