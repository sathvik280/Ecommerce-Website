import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FiTrash2 } from 'react-icons/fi';

import { deleteFromCart, increaseItem, decreaseItem } from '../features/slice/cartSlice';

const CartItemsSm = (props) => {
    const { cartItems } = useSelector( (store) => store.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full max-w-[400px] mx-auto">
            <div className="uppercase font-medium border-b border-gray-400 pb-2">
                shopping bag
            </div>

            {
                cartItems.length === 0 
                ?
                <div className="pt-14 text-xl text-center text-gray-600">
                    Your cart is empty
                </div>
                :
                <div className="flex flex-col pb-2 w-full">
                    {
                        cartItems.map( (item) => {
                            const {
                                id, 
                                productName, 
                                category,
                                imageUrl, 
                                price, 
                                quantity
                            } = item;

                            return (
                                <div key={id} className="flex flex-row gap-x-4 py-5 border-b border-gray-300 w-full text-gray-600">
                                    <div className="w-full flex flex-row items-center gap-x-4">
                                        <img 
                                            src={imageUrl} 
                                            alt="" 
                                            className="max-w-[80px] cursor-pointer"
                                            onClick={ () => {
                                                navigate(`/product/${category}/${id}`, {
                                                    state: {
                                                        from: 'cart'
                                                    }
                                                })
                                            }} 
                                        />

                                        <div className="w-full flex flex-col gap-y-2">
                                            <div className="flex flex-row justify-between mb-2">
                                                <div 
                                                    className="cursor-pointer"
                                                    onClick={ () => {
                                                        navigate(`/product/${category}/${id}`, {
                                                            state: {
                                                                from: 'cart'
                                                            }
                                                        })
                                                    }}
                                                >
                                                    {productName}
                                                </div>

                                                <div 
                                                    className="text-xl cursor-pointer" 
                                                    onClick={ () => {
                                                        dispatch(deleteFromCart(id));
                                                    }}
                                                >
                                                    <FiTrash2 />
                                                </div>
                                            </div>

                                            <div className="flex flex-row items-center justify-between gap-x-2 h-[36px]">
                                                <div className="flex flex-row gap-x-3 px-3 items-center h-full border">
                                                    <div 
                                                        className="text-xl p-1 cursor-pointer"
                                                        onClick={ () => {
                                                            quantity === 1 ? (
                                                                dispatch(deleteFromCart(id))
                                                            ) : (
                                                                dispatch(decreaseItem(id))
                                                            );                                 
                                                        }}
                                                    >
                                                        -
                                                    </div>

                                                    <div className="h-full flex justify-center items-center">
                                                        {quantity}
                                                    </div>

                                                    <div 
                                                        className="text-lg p-1 cursor-pointer"
                                                        onClick={ () => {
                                                            dispatch(increaseItem(id));
                                                        }}
                                                    >
                                                        +
                                                    </div>
                                                </div>

                                                <div>
                                                    ₹ {quantity * price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            }
        </div>
    );
};

export default CartItemsSm;