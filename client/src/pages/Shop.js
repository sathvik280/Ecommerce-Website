import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Header1 from '../components/Header1';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Product1 from '../components/Product1';

import { ImSpinner8 } from 'react-icons/im';

const Shop = (props) => {
    const { products } = useSelector( (store) => store.product);
    let allProducts = [];

    for (let itemType in products)
    {
        allProducts = [...allProducts, ...products[itemType]];
    }

    const [productsList, setProductsList] = useState([...allProducts]);
    const [isLoading, setIsLoading] = useState(false);

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortByOpen, setIsSortByOpen] = useState(false);

    const [userCategoryChoice, setUserCategoryChoice] = useState('Product category (any)');
    const [userSortByChoice, setUserSortByChoice] = useState('Sort items (any)');

    return (
        <div className="w-full min-h-screen">
            <Header1 />

            <div className="flex flex-col items-start gap-y-10 py-16 px-6 lg:px-10 xl:px-12 w-full max-w-[1024px] mx-auto">
                <div className="w-full">
                    <Search 
                        allProducts={allProducts} 
                        setProductsList={setProductsList} 
                        isLoading={isLoading} 
                        setIsLoading={setIsLoading}
                        setIsCategoryOpen={setIsCategoryOpen}
                        setIsSortByOpen={setIsSortByOpen}
                        userCategoryChoice={userCategoryChoice}
                        userSortByChoice={userSortByChoice}
                    />
                </div>

                <div className="w-full">
                    <Filter 
                        productsList={productsList} 
                        setProductsList={setProductsList} 
                        isLoading={isLoading} 
                        allProducts={allProducts}
                        isCategoryOpen={isCategoryOpen}
                        setIsCategoryOpen={setIsCategoryOpen}
                        isSortByOpen={isSortByOpen}
                        setIsSortByOpen={setIsSortByOpen}
                        products={products}
                        userCategoryChoice={userCategoryChoice}
                        setUserCategoryChoice={setUserCategoryChoice}
                        userSortByChoice={userSortByChoice}
                        setUserSortByChoice={setUserSortByChoice}
                    />
                </div>
            </div>

            <div className={`${isLoading ? "flex" : "hidden"} pt-14 pb-20 flex items-center justify-center`}> 
                <ImSpinner8 className="animate-spin text-[30px] text-gray-500"/>
            </div>

            {
                productsList.length === 0 
                ?
                <div className={`text-[28px] pt-14 pb-20 ${isLoading ? "hidden" : "flex"} px-6 lg:px-10 xl:px-12 w-full max-w-[1024px] mx-auto flex items-center justify-center text-gray-500`}>
                    Sorry, nothing found
                </div>
                :
                <div className={`pt-4 pb-[88px] px-6 lg:px-10 xl:px-12 w-full lg:max-w-[700px] xl:max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 ${isLoading ? "hidden" : "grid"}`}>
                    {
                        productsList.map( (product) => {
                            return (
                                <div key={product._id}>
                                    <Product1 product={product} />
                                </div>
                            );
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Shop;