import React from 'react';
import { useNavigate } from 'react-router-dom';

import bannerImg from '../assets/hero-img.png';

const Banner = (props) => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-[#c6d5ed]">
            <div className="flex flex-row items-center gap-x-10 px-6 lg:px-10 xl:px-12 py-14 xl:pt-10 xl:pb-8 max-w-[1024px] mx-auto">
                <div className="flex flex-col items-start gap-y-5 flex-1">
                    <div className="text-[#0a1b39]">
                        Trending products in 2023
                    </div>

                    <div className="text-xl xs:text-2xl lg:text-3xl font-medium text-[#0a1b39] max-w-[350px]">
                        Make Your Interior More Minimalistic & Modern
                    </div>

                    <button 
                        className="px-5 py-3 rounded-md bg-[#0a1a36] text-white mt-3"
                        onClick={ () => {
                            navigate('/shop');
                        }}
                    >
                        SHOP NOW 
                    </button>
                </div>

                <div className="hidden xl:flex xl:w-[55%]">
                    <img 
                        src={bannerImg}
                        alt=""
                        className="min-h-[385px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;