import React from 'react';
import './product.css';

function Product() {
  return (
    <div className='product'>
        <div className='product-info'>
            <p> The Lean Start Up </p>
            <p className='product-price'> 
            <small>$</small>
            <strong>19.99</strong>
            </p>
            <div className='product-rating'>
                <p>🌟</p>
            </div>
            
        </div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <button>
            Add to Basket
          </button>
      
    </div>
  )
}

export default Product;
