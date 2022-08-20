import React, { useState } from 'react'
import styles from '../styles/Pay.module.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



const Pay = () => {
  // product object name,price
  const [product]=useState({
    name:'sample game',
    price:200,
    description:"this is a sample game"
  })
  async function handleToken(token,addresses){
    const response =await axios.post('http://localhost:5000/checkout',{token,product})

    // take response
    console.log(response.status);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.btn_container}>
        <h1>Stripe payment Checkout:</h1>
        {/* <button>Pay Now</button> */}
        <div className={styles.form_group}>
          <StripeCheckout
            className={styles.checkout}
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            stripeKey="pk_test_51LOf0WSBw2traZb4Q6nlGYFkApSMLKYYfu49qUKDhr7eZskBxzIPDBNRDpyTQh9dG9LqI7WwvB3GBqBws84JSdKr001CzzMxB5"
            token={handleToken}
            amount={product.price*100}
            name={product.name}
            billingAddress
            shippingAddress
            
            
           
            

          />
        </div>

      </div>
    </div>
  )
}

export default Pay