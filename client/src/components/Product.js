import React from 'react';

const Product = (props) => {
    const { product } = props;

    const {
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
            <div className="w-full flex items-center justify-center">
                <img 
                    src={imageUrl}
                    alt=""
                    className="object-cover w-full min-h-[192px] xs:min-h-[249px] lg:h-[281px]"
                />
            </div>

            <div className="flex flex-col px-2 w-full">
                <div className="text-md xs:text-lg font-medium">
                    {productName}
                </div>

                <div>
                    {category}
                </div>

                <div className="w-full flex flex-row items-center justify-between mt-3">
                    <div className="font-medium text-md xs:text-lg">
                        ₹ {price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;