import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Header1 from '../components/Header1';
import CartItemsLg from '../components/CartItemsLg';
import CartItemsSm from '../components/CartItemsSm';
import CartItemsXs from '../components/CartItemsXs';
import Subtotal from '../components/Subtotal';
import OrderHistory from '../components/OrderHistory';
import Success from '../components/Success';
import Cancel from '../components/Cancel';

const Cart = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paymentStatus = queryParams.get('paymentStatus');

    const { user, token, isConnectedToStripe } = useSelector( (store) => store.auth );
    const { cartItems } = useSelector( (store) => store.cart );

    const saveUserCartAndOrderHistoryToDb = async (url) => {
        try 
        {
            await axios.patch(url,
                {
                    userId: user.id, 
                    newCart: [...cartItems], 
                    newOrderHistory: [...user.orderHistory]
                }, 
                {
                    headers: {
                        'authorization': token
                    }
                }
            );
        }

        catch (error)
        {
            console.log('Server error');
        }
    };

    useEffect( () => {
        saveUserCartAndOrderHistoryToDb('http://localhost:5000/user');
    }, []);

    return (
        <div className="w-full min-h-screen relative">
            <Header1 />

            {
                (isConnectedToStripe && paymentStatus && (paymentStatus === 'success' || paymentStatus === 'cancel'))
                &&
                <div className="fixed h-screen bg-black/90 top-0 w-full z-50 flex items-center justify-center">
                    {
                        paymentStatus === 'success' ?
                        <Success /> : 
                        <Cancel />
                    }
                </div>
            }

            <div className="pt-16 pb-20 px-6 lg:px-10 xl:px-12 w-full max-w-[1024px] mx-auto flex flex-col gap-y-20">
                <div className="w-[90%] hidden xl:flex">
                    <CartItemsLg />
                </div>

                <div className="hidden xs:flex xl:hidden">
                    <CartItemsSm />
                </div>

                <div className="flex xs:hidden">
                    <CartItemsXs />
                </div>

                <div>
                    <Subtotal />
                </div>

                {
                    user.orderHistory.length !== 0
                    &&
                    <div>
                        <OrderHistory />
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;