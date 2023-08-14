import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Subtotal = (props) => {
    const navigate = useNavigate();
    const { cartTotal } = useSelector( (store) => store.cart);

    return (
        <div className="w-full max-w-[320px] bg-[#081a36] p-5 rounded-md mx-auto xl:mx-0">
            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between text-white">
                    <div className="font-medium">
                        Subtotal 
                    </div>

                    <div className="text-lg">
                        ₹ {cartTotal}
                    </div>
                </div>

                <button
                    className="bg-white py-2 text-[#081a36] rounded-sm mt-8"
                    onClick={ () => {
                        if (Number(cartTotal) === 0)
                        {
                            return;
                        }

                        navigate('/checkout');
                    }}
                >
                    Checkout 
                </button>

                <button
                    className="bg-white py-2 text-[#081a36] mt-3 rounded-sm"
                    onClick={ () => {
                        navigate('/shop');
                    }}
                > 
                    Continue Shopping 
                </button>
            </div>
        </div>
    );
};

export default Subtotal;