import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { BsBag } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { RiCloseFill, RiMenuFill } from 'react-icons/ri'

import logo from '../assets/eco-logo.png';

import { updateCartDetails } from '../features/slice/cartSlice';
import { removeUser, removeToken } from '../features/slice/authSlice';

const Header1 = (props) => {
    const { pathname } = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { cartCount, cartItems } = useSelector( (store) => store.cart);
    const { user, token } = useSelector( (store) => store.auth);

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

    const logoutUser = () => {
        setIsLoading(true);
        saveUserCartAndOrderHistoryToDb('http://localhost:5000/user');

        setTimeout( () => {
            navigate('/');
            setIsLoading(false);

            dispatch(removeUser());
            dispatch(removeToken());
        }, 1000);
    };

    useEffect( () => {
        dispatch(updateCartDetails());
    }, [cartItems]);

    return (
        <div className="w-full bg-[#ffffff] shadow-md sticky top-0 left-0 right-0 z-10">
            <div className="flex flex-row items-center justify-between px-6 lg:px-10 xl:px-12 py-7 max-w-[1024px] mx-auto">
                <div 
                    className="flex flex-row items-center gap-x-3 cursor-pointer"
                    onClick={ () => {
                        window.scrollTo( {top: 0, behavior: 'smooth'} );
                    }}
                >
                    <div className="hidden xs:flex">
                        <img 
                            src={logo}
                            alt="" 
                            className="w-[30px] object-cover"
                        />
                    </div>

                    <div className="text-[#111534] text-xl font-semibold">
                        Multimart
                    </div>
                </div>

                <div className={`hidden lg:flex lg:flex-row lg:items-center lg:gap-x-6`}>
                    <div 
                        className={`${pathname === '/home' ? "font-medium" : "font-light"} cursor-pointer`}
                        onClick={ () => {
                            navigate('/home');
                        }}
                    >
                        Home 
                    </div>

                    <div 
                        className={`${pathname === '/shop' ? "font-medium" : "font-light"} cursor-pointer`}
                        onClick={ () => {
                            navigate('/shop');
                        }}
                    >
                        Shop 
                    </div>

                    <div 
                        className={`${pathname === '/cart' ? "font-medium" : "font-light"} cursor-pointer`}
                        onClick={ () => {
                            navigate('/cart');
                        }}
                    >
                        Cart 
                    </div>
                </div>

                <div className="hidden lg:flex">
                    <div className="flex flex-row items-center gap-x-8 relative">
                        <div className="relative cursor-default">
                            <BsBag size={23}/>

                            <div className="absolute bg-[#111534] text-[#ffffff] px-1 -right-1 -bottom-2 text-[12px] rounded-full flex justify-center items-center">
                                {cartCount}
                            </div>
                        </div>

                        <div 
                            className="cursor-pointer"
                            onClick={ () => {
                                setIsActive(!isActive);
                            }}
                        >
                            <FaUser size={22}/>
                        </div>

                        <div 
                            className={` ${isActive ? "flex" : "hidden"} items-center justify-normal cursor-pointer absolute bg-[#fcede3] p-3 right-0 top-[40px] h-[40px]`}
                            onClick={logoutUser}
                        >
                            {
                                isLoading ?
                                <ImSpinner8 className="w-[52px] animate-spin text-lg"/> :
                                "Logout"
                            }
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-x-7 lg:hidden">
                    <div className="relative">
                        <BsBag size={23}/>

                        <div className="absolute bg-[#111534] text-[#ffffff] px-1 -right-1 -bottom-2 text-[12px] rounded-full flex justify-center items-center">
                            {cartCount}
                        </div>
                    </div>

                    <div 
                        className="cursor-pointer text-2xl text-black"
                        onClick={ () => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        {
                            isOpen ?                         
                            <RiCloseFill /> :
                            <RiMenuFill />
                        }
                    </div>
                </div>

                <div className={`flex flex-col gap-y-6 items-center justify-center lg:hidden min-h-screen w-full fixed left-0 right-0 bg-[#ffffff] ${isOpen ? "top-0" : "-top-full"} -z-10 transition-all duration-300`}>
                    <div 
                        className={`${pathname === '/home' ? "font-medium" : "font-light"} cursor-pointer text-lg`}
                        onClick={ () => {
                            setIsOpen(false);

                            setTimeout( () => {
                                navigate('/home');
                            }, 250);
                        }}
                    >
                        Home 
                    </div>

                    <div 
                        className={`${pathname === '/shop' ? "font-medium" : "font-light"} cursor-pointer text-lg`}
                        onClick={ () => {
                            setIsOpen(false);

                            setTimeout( () => {
                                navigate('/shop');
                            }, 250);
                        }}
                    >
                        Shop 
                    </div>

                    <div 
                        className={`${pathname === '/cart' ? "font-medium" : "font-light"} cursor-pointer text-lg`}
                        onClick={ () => {
                            setIsOpen(false);

                            setTimeout( () => {
                                navigate('/cart');
                            }, 250);
                        }}
                    >
                        Cart 
                    </div>

                    <div className="absolute bottom-28">
                        <div className="flex items-center justify-center">
                            <div 
                                className="text-[#111534] text-xl font-medium cursor-pointer"
                                onClick={logoutUser}
                            >
                                {
                                    isLoading ?
                                    <ImSpinner8 className="animate-spin text-lg" size={22}/> :
                                    "Logout"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header1;