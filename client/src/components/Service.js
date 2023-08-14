import React from 'react';

import { RiTruckLine, RiRefreshLine, RiSecurePaymentLine, RiExchangeDollarLine } from 'react-icons/ri';

const Service = (props) => {
    return (
        <div className="w-full max-w-[1024px] mx-auto flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 py-12 px-6">
                <div className="flex flex-row items-center gap-x-4 p-4 bg-[#fdefe6] xs:w-[240px] lg:w-[250px] xl:w-[220px] rounded-sm">
                    <div className="p-2 text-white bg-[#091b3c] rounded-full">
                        <RiTruckLine size={27}/>
                    </div>

                    <div>
                        Free Shipping 
                    </div>
                </div>

                <div className="flex flex-row items-center gap-x-4 p-4 bg-[#ceebe9] xs:w-[240px] lg:w-[250px] xl:w-[220px] rounded-sm">
                    <div className="p-2 text-white bg-[#091b3c] rounded-full">
                        <RiRefreshLine size={27}/>
                    </div>

                    <div>
                        Easy Returns
                    </div>
                </div>

                <div className="flex flex-row items-center gap-x-4 p-4 bg-[#e2f2b2] xs:w-[240px] lg:w-[250px] xl:w-[220px] rounded-sm">
                    <div className="p-2 text-white bg-[#091b3c] rounded-full">
                        <RiSecurePaymentLine size={27}/>
                    </div>

                    <div>
                        Secure Payment
                    </div>
                </div>

                <div className="flex flex-row items-center gap-x-4 p-4 bg-[#d6e5fb] xs:w-[240px] lg:w-[250px] xl:w-[220px] rounded-sm">
                    <div className="p-2 text-white bg-[#091b3c] rounded-full">
                        <RiExchangeDollarLine size={27}/> 
                    </div>

                    <div>
                        Back Guarantee
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;