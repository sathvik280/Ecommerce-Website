import React from 'react';

import logo from '../assets/eco-logo.png';

const Header2 = (props) => {
    return (
        <div className="w-full bg-[#ffffff] shadow-md sticky top-0 left-0 right-0 z-10">
            <div className="flex flex-row items-center justify-center px-6 lg:px-8 xl:px-10 py-7 max-w-[1024px] mx-auto">
                <div className="flex flex-row items-center gap-x-3">
                    <div>
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
            </div>
        </div>
    );
};

export default Header2;