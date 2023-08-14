import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product';

import { ImSpinner8 } from 'react-icons/im';

const PopularProducts = (props) => {
    const { products, isProductsFetched } = useSelector( (store) => store.product);

    return (
        <div className="w-full max-w-[1024px] mx-auto mt-2 xs:mt-5 mb-5">
            <div className="flex flex-col gap-y-10 items-center pb-16 px-6">
                <div className="text-2xl xs:text-3xl">
                    Popular Products
                </div>

                <>
                    {
                        isProductsFetched
                        ?
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {
                                products.headphones.map( (product, idx) => {
                                    if (idx >= 3)
                                    {
                                        return <div></div>;
                                    }

                                    return (
                                        <div key={product._id} className={`${idx === 1 && "hidden xl:flex"}`}>
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

export default PopularProducts;