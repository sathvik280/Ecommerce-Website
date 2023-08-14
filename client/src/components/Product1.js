import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BsPlus } from 'react-icons/bs';

import { addToCart } from '../features/slice/cartSlice';

const Product1 = (props) => {
    const { product } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
         _id: id,
        productName, 
        category, 
        imageUrl, 
        price
    } = product;

    return (
        <div 
            className="flex flex-col gap-y-2 items-start w-[90%] mx-auto max-w-[295px] lg:mx-0 lg:w-[297px] lg:max-w-none px-2 pt-2 pb-6 rounded-md"
            style={ {boxShadow: "0px 0px 4px 0px lightgrey"} }
        >
            <div 
                className="w-full flex items-center justify-center cursor-pointer min-h-[192px] xs:min-h-[249px] lg:min-h-[281px]"
                onClick={ () => {
                    navigate(`/product/${category}/${id}`, {
                        state: {
                            from: 'shop'
                        }
                    });
                }}
            >
                <img 
                    src={imageUrl}
                    alt=""
                    className={`object-cover ${category === 'shirt' || category === 'hoodie' ? "w-[75%]" : "w-full"} lg:max-h-[281px]`}
                />
            </div>

            <div className="flex flex-col px-2 w-full">
                <div 
                    className="text-md xs:text-lg font-medium cursor-pointer"
                    onClick={ () => {
                        navigate(`/product/${category}/${id}`, {
                            state: {
                                from: 'shop'
                            }
                        });
                    }}
                >
                    {productName}
                </div>

                <div className="cursor-default">
                    {category}
                </div>

                <div className="w-full flex flex-row items-center justify-between mt-3">
                    <div className="font-medium text-md xs:text-lg cursor-default">
                        ₹ {price}
                    </div>
                    
                    <div 
                        className="bg-[#081735] text-white rounded-full p-[1px] cursor-pointer"
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
                        <BsPlus size={27}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product1;