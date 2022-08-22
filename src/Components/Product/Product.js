import React from 'react';
import './product.css';
import {useStateValue} from '../StateProvider/StateProvider'

function Product({ id, title, image, price, rating}) {

  const [ {basket} , dispatch ] = useStateValue();

  // Dispatch item into data layer
const addToBasket = () => {
    dispatch ({
      type: 'ADD-TO-BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
}

  return (
    <div className='product'>
        <div className='product-info'>
            <p> {title} </p>
            <p className='product-price'> 
            <small> $ </small>
            <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating)
                .fill()
                .map((_, i) =>(
                    <p>🌟</p>
                ))}
            </div>
            
        </div>
        <img src={image} alt="describe"
          />
          <button onClick={addToBasket}>
            Add to Basket
          </button>
      
    </div>
  )
}

export default Product;
