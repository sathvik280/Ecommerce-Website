import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MdCheckCircle } from 'react-icons/md';

import { setUpCart } from '../features/slice/cartSlice';
import { updateOrderHistory, updateIsConnectedToStripe } from '../features/slice/authSlice';

const Success = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cartItems } = useSelector( (store) => store.cart );

    const getDate = () => {
        const date = new Date();

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const monthMapper = {
            1: 'Jan', 
            2: 'Feb', 
            3: 'Mar', 
            4: 'Apr', 
            5: 'May', 
            6: 'Jun', 
            7: 'Jul', 
            8: 'Aug', 
            9: 'Sep', 
            10: 'Oct', 
            11: 'Nov', 
            12: 'Dec'
        };

        return `${day}-${monthMapper[month]}-${year}`;
    };

    const cartItemsWithDates = cartItems.map( (item) => {
        return {
            ...item, 
            orderDate: getDate()
        };
    });

    return (
        <div 
            className="w-[90%] max-w-[600px] mx-auto bg-white mt-[25px] rounded-xl flex flex-col items-center py-12 px-4"
        >
            <div className="text-xl xs:text-2xl text-gray-600 text-center">
                Thank you. The order has been placed
            </div>

            <div className="mt-5">
                <MdCheckCircle size={50}/>
            </div>

            <button 
                className="text-gray-600 underline mt-5 text-center text-lg"
                onClick={ () => {
                    dispatch(updateIsConnectedToStripe(false));
                    dispatch(setUpCart([]));
                    dispatch(updateOrderHistory([...cartItemsWithDates]));

                    navigate('/shop', {
                        replace: true
                    });
                }}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default Success;