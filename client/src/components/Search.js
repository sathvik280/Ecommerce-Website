import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';

const Search = (props) => {
    const { 
        isLoading, 
        setIsLoading, 
        setProductsList, 
        allProducts, 
        setIsCategoryOpen, 
        setIsSortByOpen, 
        userCategoryChoice, 
        userSortByChoice
    } = props;

    const [searchInput, setSearchInput] = useState('');
    const [inputShake, setInputShake] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isLoading)
        {
            return;
        }

        if (searchInput === '')
        {
            setInputShake(true);

            setTimeout( () => {
                setInputShake(false);
            }, 500);

            return;
        }

        setIsLoading(true);
        
        const lowercaseSearchInput = searchInput.toLowerCase();

        const newProductsList = [...allProducts].filter( (product) => {
            const { productName, category } = product;

            const lowercaseProductName = productName.toLowerCase();
            const lowercaseCategory = category.toLowerCase();

            return (
                (
                    lowercaseProductName.includes(lowercaseSearchInput) || 
                    lowercaseCategory.includes(lowercaseSearchInput)
                ) 
                &&
                (
                    userCategoryChoice === 'Product category (any)' || 
                    category === userCategoryChoice
                )
            );
        });

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

        setProductsList(newProductsList);

        setTimeout( () => {
            setIsLoading(false);
            setSearchInput('');
        }, 1000);
    };

    return (
        <div className="w-full max-w-[550px]">
            <form 
                className={`w-full flex flex-row items-center justify-between ${inputShake ? "animate-shake" : "animate-none"} border border-[#081a36] rounded-lg`}
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    value={searchInput}
                    onChange={ (event) => {
                        setSearchInput(event.target.value);
                    }}
                    spellCheck={false}
                    placeholder="Search for products"
                    className="p-3 flex-1 focus:outline-none placeholder:text-[#858585] text-[#081a36] rounded-lg overflow-x-hidden"
                    onFocus={ () => {
                        setIsCategoryOpen(false);
                        setIsSortByOpen(false);
                    }}
                />

                <button 
                    className="text-[#081a36] flex items-center justify-center text-lg py-3 px-4 rounded-lg"
                    onClick={handleSubmit}
                >
                    <FiSearch size={20}/>
                </button>
            </form>
        </div>
    );
};

export default Search;