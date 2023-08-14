import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FaTimesCircle } from 'react-icons/fa';

import { updateIsConnectedToStripe } from '../features/slice/authSlice';

const Cancel = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div 
            className="w-[90%] max-w-[600px] mx-auto bg-white mt-[25px] rounded-xl flex flex-col items-center py-12 px-4"
        >
            <div className="text-xl xs:text-2xl text-gray-600 text-center">
                The order has been canceled. Please try again
            </div>

            <div className="mt-5">
                <FaTimesCircle size={50}/>
            </div>

            <button 
                className="text-gray-600 underline mt-5 text-center text-lg"
                onClick={ () => {
                    dispatch(updateIsConnectedToStripe(false));
                    
                    navigate('/cart', {
                        replace: true
                    });
                }}
            >
                Go to cart
            </button>
        </div>
    );
};

export default Cancel;