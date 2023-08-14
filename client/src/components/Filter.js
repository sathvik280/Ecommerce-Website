import React, { useEffect } from 'react';

import { RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri';

const Filter = (props) => {
    const { 
        productsList, 
        setProductsList, 
        isLoading, 
        allProducts, 
        isCategoryOpen, 
        setIsCategoryOpen, 
        isSortByOpen, 
        setIsSortByOpen, 
        products, 
        userCategoryChoice, 
        setUserCategoryChoice, 
        userSortByChoice, 
        setUserSortByChoice
    } = props;

    const updateUserCategoryChoice = (categoryChoice) => {
        setUserCategoryChoice(categoryChoice);
        setIsCategoryOpen(false);
    };

    const updateUserSortByChoice = (sortByChoice) => {
        setUserSortByChoice(sortByChoice);
        setIsSortByOpen(false);
    };

    useEffect( () => {
        let newProductsList;

        if (userCategoryChoice === 'Product category (any)')
        {
            newProductsList = [...allProducts];
        }

        else 
        {
            newProductsList = [...products[userCategoryChoice]];
        }

        if (userSortByChoice !== 'Sort items (any)')
        {
            newProductsList.sort( (item1, item2) => {
                if (userSortByChoice.startsWith('low'))
                {
                    return item1.price - item2.price;
                }
    
                return item2.price - item1.price;
            });
        }

        setProductsList([...newProductsList]);
    }, [userCategoryChoice]);

    useEffect( () => {
        if (userSortByChoice === 'Sort items (any)')
        {
            return;
        }
        
        let sortedProductsList = [...productsList];

        sortedProductsList.sort( (item1, item2) => {
            if (userSortByChoice.startsWith('low'))
            {
                return item1.price - item2.price;
            }

            return item2.price - item1.price;
        });

        setProductsList([...sortedProductsList]);
    }, [userSortByChoice]);

    return (
        <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-6">
            <div className="flex flex-col relative w-full max-w-[250px] cursor-pointer">
                <div 
                    className="border border-[#081a36] flex justify-between items-center h-[52px] px-4 rounded-lg text-[#081a36]" 
                    onClick={ () => {
                        if (isLoading)
                        {
                            return;
                        }

                        if (isCategoryOpen)
                        {
                            setIsCategoryOpen(false);
                        }

                        else 
                        {
                            setIsCategoryOpen(true);
                        }

                        setIsSortByOpen(false);
                    }}
                >
                    {userCategoryChoice}

                    <button className="text-xl">
                        {
                            (
                                isCategoryOpen ?
                                <RiArrowUpSLine /> :
                                <RiArrowDownSLine />
                            )
                        }
                    </button>
                </div>

                {
                    (
                        isCategoryOpen &&
                        
                        <div 
                            className="absolute top-[72px] w-full z-10"
                            style={ {boxShadow: "0px 0px 4px 0px lightgrey"} }
                        >
                            <ul className="bg-white py-2">
                                <li className="px-4 py-2 cursor-pointer" onClick={ () => { updateUserCategoryChoice("Product category (any)"); }}>
                                    Product category (any)
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserCategoryChoice("mobile"); }}>
                                    mobile
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserCategoryChoice("headphones"); }}>
                                    headphones
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserCategoryChoice("watch"); }}>
                                    watch
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserCategoryChoice("sofa"); }}>
                                    sofa
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserCategoryChoice("chair"); }}>
                                    chair
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserCategoryChoice("shirt"); }}>
                                    shirt
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserCategoryChoice("hoodie"); }}>
                                    hoodie
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>

            <div className="flex flex-col relative w-full max-w-[250px] lg:w-[200px] cursor-pointer">
                <div 
                    className="border border-[#081a36] flex justify-between items-center h-[52px] px-4 rounded-lg" 
                    onClick={ () => {
                        if (isLoading)
                        {
                            return;
                        }

                        if (isSortByOpen)
                        {
                            setIsSortByOpen(false);
                        }

                        else 
                        {
                            setIsSortByOpen(true);
                        }

                        setIsCategoryOpen(false);
                    }}
                >
                    {userSortByChoice}

                    <button className="text-xl">
                        {
                            (
                                isSortByOpen ?
                                <RiArrowUpSLine /> :
                                <RiArrowDownSLine />
                            )
                        }
                    </button>
                </div>

                {
                    (
                        isSortByOpen &&
                        
                        <div 
                            className="absolute top-[72px] w-full z-10"
                            style={ {boxShadow: "0px 0px 4px 0px lightgrey"} }
                        >
                            <ul className="bg-white py-2">
                                <li className="px-4 py-2 cursor-pointer" onClick={ () => { updateUserSortByChoice("Sort items (any)"); }}>
                                    Sort items (any)
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserSortByChoice("low to high"); }}>
                                    low to high
                                </li>

                                <li className=" px-4 py-2 cursor-pointer" onClick={ () => { updateUserSortByChoice("high to low"); }}>
                                    high to low
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Filter;