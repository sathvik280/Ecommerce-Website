import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import Header1 from '../components/Header1';
import Review from '../components/Review';

import { addToCart } from '../features/slice/cartSlice';

const ProductDetails = (props) => {
    const { id, category } = useParams();
    const { products } = useSelector( (store) => store.product );

    const product = products[category].find( (item) => {
        return item._id === id;
    });

    const dispatch = useDispatch();

    const {
        productName,  
        imageUrl, 
        price, 
        reviews, 
        avgRating, 
        shortDesc
    } = product;

    const totalStars = 5;
    const fullStars = Math.floor(avgRating);
    const fractionalPart = avgRating - fullStars;

    let stars = [];

    for (let i=1; i <= totalStars; i++)
    {
        if (i <= fullStars)
        {
            stars.push(<FaStar key={i} size={20} className="text-[#fd8954] mr-[1px]"/>);
        }

        else if (i === fullStars + 1 && fractionalPart !== 0)
        {
            stars.push(<FaStarHalfAlt key={i} size={20} className="mr-[1px] text-[#fd8954]"/>);
        }

        else 
        {
            stars.push(<FaStar key={i} size={20} className="mr-[1px] text-gray-400"/>);
        }
    }

    return (
        <div className="w-full min-h-screen">
            <Header1 />

            <div className="flex flex-col gap-y-8 xl:flex-row xl:gap-x-10 items-center max-w-[1024px] mx-auto pt-16 pb-20 px-6 lg:px-10 xl:px-12">
                <div className="w-full xl:w-[50%]">
                    <img 
                        src={imageUrl}
                        alt=""
                        className={`${category === 'shirt' || category === 'hoodie' ? "max-w-[300px]" : "max-w-[350px]"} w-[90%] xl:w-full mx-auto`}
                    />
                </div>

                <div className="w-full xl:w-[50%] flex flex-col">
                    <div className="text-2xl xs:text-3xl text-center xl:text-left">
                        {productName}
                    </div>

                    <div className="flex flex-row gap-x-5 items-center mt-3 justify-center xl:justify-start">
                        <div className="flex flex-row items-center gap-x-1 justify-center xl:justify-start">
                            {stars}
                        </div>

                        <div className="text-gray-600">
                            ({avgRating})
                        </div>
                    </div>

                    <div className="text-xl mt-5 text-center xl:text-left">
                        ₹ {price}
                    </div>

                    <div className="w-full max-w-[400px] mt-4 text-gray-500 text-center mx-auto xl:text-left xl:mx-0">
                        {shortDesc}
                    </div>

                    <button
                        className="w-[140px] py-3 rounded-md bg-[#0a1a36] text-white mt-7 mx-auto xl:mx-0"
                        onClick={ () => {
                            dispatch(addToCart({
                                id,
                                productName, 
                                category, 
                                imageUrl, 
                                price
                            }));
                        }}
                    >
                        Add to Cart 
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-y-6 pt-10 pb-20 px-6 lg:px-10 xl:px-12 max-w-[1024px] mx-auto">
                <div className="text-lg font-medium">
                    Reviews ({reviews.length})
                </div>

                <div className="flex flex-col gap-y-6 pb-5 mt-1">
                    {
                        reviews.map( (review, idx) => {
                            const { name, rating, message } = review;

                            let ratingStars = [];

                            for (let i=1; i<=5; i++)
                            {
                                if (i <= rating)
                                {
                                    ratingStars.push(<FaStar key={i} size={20} className="text-[#fd8954] mr-[1px]"/>);
                                }

                                else 
                                {
                                    ratingStars.push(<FaStar key={i} size={20} className="mr-[1px] text-gray-400"/>);
                                }
                            }

                            return (
                                <div key={idx} className="flex flex-row items-start gap-x-4">
                                    <div className="text-2xl flex items-center justify-center">
                                        <div className="w-[7px] h-[7px] bg-gray-500 rounded-full mt-[11px]">
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-lg">
                                            {name}
                                        </div>

                                        <div className="flex flex-row items-center gap-x-1 mt-1">
                                            {ratingStars}
                                        </div>

                                        <div className="text-gray-500 mt-3">
                                            {message}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <Review product={product} />
            </div>
        </div>
    );
};

export default ProductDetails;