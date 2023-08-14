import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { FaStar } from 'react-icons/fa';

import { addReview } from '../features/slice/productSlice';

const Review = (props) => {
    const { product } = props;
    const { token } = useSelector( (store) => store.auth );

    const [name, setName] = useState('');
    const [rating, setRating] = useState(2);
    const [message, setMessage] = useState('');

    const [nameShake, setNameShake] = useState(false);
    const [messageShake, setMessageShake] = useState(false);

    const dispatch = useDispatch();

    const addNewReviewToDb = async (url) => {
        try 
        {
            await axios.patch(url,
                {
                    productId: product._id, 
                    newReview: {
                        name, 
                        rating, 
                        message: message.trim()
                    }
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

    const addNewReview = () => {
        if (name === '')
        {
            setNameShake(true);

            setTimeout( () => {
                setNameShake(false);
            }, 500);

            return;
        }

        if (message === '')
        {
            setMessageShake(true);

            setTimeout( () => {
                setMessageShake(false);
            }, 500);

            return;
        }

        dispatch(addReview({
            product,
            newReview: {
                name, 
                rating, 
                message: message.trim()
            }
        }));

        setName('');
        setMessage('');
        setRating(2);

        addNewReviewToDb('http://localhost:5000/product/review');
    };

    return (
        <div className="flex flex-col gap-y-8">
            <div className="text-lg font-medium text-gray-600">
                Leave your experience
            </div>

            <input 
                value={name}
                onChange={ (event) => {
                    setName(event.target.value);
                }}
                placeholder='Enter name'
                spellCheck={false}
                className={`focus:outline-none border border-gray-500 rounded-md max-w-[500px] px-4 py-3 ${nameShake ? "animate-shake" : "animate-none"}`}
            />

            <div className="flex flex-col xs:flex-row xs:items-center gap-x-6 lg:gap-x-7 gap-y-4">
                <div 
                    className={`flex flex-row gap-x-2 items-center ${rating >= 1 ? "text-[#fd8954]" : "text-gray-400"} cursor-pointer`}
                    onClick={ () => {
                        setRating(1);
                    }}
                >
                    <div className="text-lg">
                        1
                    </div>

                    <div>
                        <FaStar size={18}/>
                    </div>
                </div>

                <div 
                    className={`flex flex-row gap-x-2 items-center ${rating >= 2 ? "text-[#fd8954]" : "text-gray-400"} cursor-pointer`}
                    onClick={ () => {
                        setRating(2);
                    }}
                >
                    <div className="text-lg">
                        2
                    </div>

                    <div>
                        <FaStar size={18}/>
                    </div>
                </div>

                <div 
                    className={`flex flex-row gap-x-2 items-center ${rating >= 3 ? "text-[#fd8954]" : "text-gray-400"} cursor-pointer`}
                    onClick={ () => {
                        setRating(3);
                    }}
                >
                    <div className="text-lg">
                        3
                    </div>

                    <div>
                        <FaStar size={18}/>
                    </div>
                </div>

                <div 
                    className={`flex flex-row gap-x-2 items-center ${rating >= 4 ? "text-[#fd8954]" : "text-gray-400"} cursor-pointer`}
                    onClick={ () => {
                        setRating(4);
                    }}
                >
                    <div className="text-lg">
                        4
                    </div>

                    <div>
                        <FaStar size={18}/>
                    </div>
                </div>

                <div 
                    className={`flex flex-row gap-x-2 items-center ${rating >= 5 ? "text-[#fd8954]" : "text-gray-400"} cursor-pointer`}
                    onClick={ () => {
                        setRating(5);
                    }}
                >
                    <div className="text-lg">
                        5
                    </div>

                    <div>
                        <FaStar size={18}/>
                    </div>
                </div>
            </div>

            <textarea
                value={message}
                onChange={ (event) => {
                    setMessage(event.target.value);
                }}
                rows={6}
                placeholder='Review message'
                spellCheck={false}
                className={`focus:outline-none border border-gray-500 rounded-md max-w-[500px] px-4 py-3 resize-none ${messageShake ? "animate-shake" : "animate-none"}`}
            />

            <button
            className="w-[120px] py-3 rounded-md bg-[#0a1a36] text-white mt-4"
            onClick={addNewReview}
            >
                Submit
            </button>
        </div>
    );
};

export default Review;