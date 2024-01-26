// public/js/payment.js

const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
const elements = stripe.elements();
const form = document.getElementById('payment-form');

const card = elements.create('card');
card.mount('#card-element');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken(card);

    if (error) {
        console.error(error);
    } else {
        // Send the token to your server for processing
        fetch('/makePayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, amount: 1000 }), // Change the amount as needed
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle successful payment
        })
        .catch(error => {
            console.error(error);
            // Handle payment error
        });
    }
});
