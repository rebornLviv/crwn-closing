import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_tx4g9LGsOhNbZtCwIkX03xVY007SfhEVJX'
    const onToken = token =>{
        alert('Payment successful!')
        console.log(token)
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Closthing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    
        />
    )


}

export default StripeCheckoutButton;