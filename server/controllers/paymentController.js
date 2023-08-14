const Stripe = require('stripe');

const stripeApiKey = process.env.STRIPE_API_KEY;
const stripe = Stripe(stripeApiKey);

const stripePayments = async (req, res) => {
    try 
    {
        const { items } = req.body;

        items.push({
            productName: 'shipping charges', 
            price: 100, 
            quantity: 1
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], 
            mode: 'payment', 
            success_url: `${process.env.CLIENT_URL}/cart?paymentStatus=success`, 
            cancel_url: `${process.env.CLIENT_URL}/cart?paymentStatus=cancel`, 

            line_items: items.map( (item) => {
                return {
                    quantity: item.quantity,
                    price_data: {
                        currency: 'inr', 
                        product_data: {
                            name: item.productName, 
                        }, 
                        unit_amount: item.price * 100
                    }
                };
            })
        });

        res.status(201).json( {url: session.url} );
    }

    catch (error)
    {
        res.status(500).json( {message: error.message} );
    }
};

module.exports = { stripePayments };