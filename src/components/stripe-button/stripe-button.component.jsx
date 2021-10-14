import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishishableKey = 'pk_test_51Jk1o6KGV7ydVHtQQyMepr55NkNhFOBeyq9I6OWnYeKVjkNQVYCRZ4A0ap6GkNWm1DkaXE86j10OiWuwlQA70C0U00xwXoNpt2';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            paneLabel='Pay Now'
            token={onToken}
            stripeKey={publishishableKey}
        />
    );
};

export default StripeCheckoutButton;