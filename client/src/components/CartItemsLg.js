import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FiTrash2 } from 'react-icons/fi';

import { deleteFromCart, increaseItem, decreaseItem } from '../features/slice/cartSlice';

const CartItemsLg = (props) => {
    const { cartItems } = useSelector( (store) => store.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center pb-2 border-b border-gray-400 px-2">
                <div className="w-[180px] font-medium">
                    Image
                </div>

                <div className="w-[270px] font-medium">
                    Title 
                </div>

                <div className="w-[110px] font-medium">
                    Price 
                </div>

                <div className="w-[150px] font-medium">
                    Qty
                </div> 

                <div className="w-[90px] font-medium">
                    Delete 
                </div>
            </div>

            {
                cartItems.length === 0 
                ?
                <div className="pt-14 text-xl text-center text-gray-600 pb-2">
                    Your cart is empty
                </div>
                :
                <div className="flex flex-col pb-2">
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
                                <div key={id} className="flex flex-row items-center py-2 border-b border-gray-300 px-2">
                                    <div 
                                        className="w-[180px] cursor-pointer"
                                        onClick={ () => {
                                            navigate(`/product/${category}/${id}`, {
                                                state: {
                                                    from: 'cart'
                                                }
                                            })
                                        }}
                                    >
                                        <img 
                                            src={imageUrl}
                                            alt=""
                                            className="w-[50%]"
                                        />
                                    </div>

                                    <div 
                                        className="w-[270px] cursor-pointer"
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

                                    <div className="w-[110px]">
                                        ₹ {quantity * price}
                                    </div>

                                    <div className="w-[150px] flex flex-row items-center gap-x-3">
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

                                        <div>
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

                                    <div className="w-[90px]">
                                        <FiTrash2 
                                            size={20}
                                            className="cursor-pointer"
                                            onClick={ () => {
                                                dispatch(deleteFromCart(id));
                                            }}
                                        />
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

export default CartItemsLg;