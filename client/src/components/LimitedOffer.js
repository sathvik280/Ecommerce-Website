import React from 'react';
import { useNavigate } from 'react-router-dom';

import chairImg from '../assets/counter-timer-img.png';

const LimitedOffer = (props) => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-[#081a36] xl:mt-2">
            <div className="max-w-[1024px] mx-auto">
                <div className="flex flex-row items-center justify-between py-12 xl:pb-0 xl:pt-5 px-6 lg:px-10 xl:px-12">
                    <div className="flex flex-col items-start flex-1">
                        <div className="text-white text-xl">
                            Limited Offer 
                        </div>

                        <div className="text-white max-w-[350px] mt-3 text-base lg:text-lg">
                            Huge discounts on Furniture, Electronics, Clothing and much more
                        </div>

                        <button 
                            className="px-5 py-3 rounded-md text-[#081a36] bg-white mt-7 font-medium"
                            onClick={ () => {
                                navigate('/shop');
                            }}
                        >
                            Visit Store
                        </button>
                    </div>

                    <div className="hidden xl:flex xl:w-[40%]">
                        <img 
                            src={chairImg}
                            alt=""
                            className="min-h-[307px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LimitedOffer;