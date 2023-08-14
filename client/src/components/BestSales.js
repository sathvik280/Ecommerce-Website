import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product';

import { ImSpinner8 } from 'react-icons/im';

const BestSales = (props) => {
    const { products, isProductsFetched } = useSelector( (store) => store.product);

    return (
        <div className="w-full max-w-[1024px] mx-auto mt-0 lg:mt-2 xl:mt-0">
            <div className="flex flex-col gap-y-10 items-center py-8 xs:py-10 xl:py-14 px-6">
                <div className="text-2xl xs:text-3xl">
                    Best Sales
                </div>

                <>
                    {
                        isProductsFetched
                        ?
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {
                                products.sofa.map( (product, idx) => {
                                    if (idx >= 4)
                                    {
                                        return <div></div>;
                                    }

                                    return (
                                        <div key={product._id} className={`${idx === 3 && "flex xl:hidden"}`}>
                                            <Product product={product}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        :
                        <div>
                            <ImSpinner8 className="animate-spin h-[200px]" size={28}/>
                        </div>
                    }
                </>
            </div>
        </div>
    );
};

export default BestSales;