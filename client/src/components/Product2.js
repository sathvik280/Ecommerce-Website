import React from 'react';

const Product2 = (props) => {
    const { item } = props;

    const {
        productName, 
        category, 
        imageUrl, 
        price, 
        quantity, 
        orderDate
    } = item;
    
    return (
        <div 
            className="flex flex-col gap-y-2 items-start w-[90%] mx-auto max-w-[295px] lg:mx-0 lg:w-[297px] lg:max-w-none px-2 pt-2 pb-6 rounded-md"
            style={ {boxShadow: "0px 0px 4px 0px lightgrey"} }
        >
            <div className="w-full flex items-center justify-center min-h-[192px] xs:min-h-[249px] lg:min-h-[281px]">
                <img 
                    src={imageUrl}
                    alt=""
                    className={`object-cover ${category === 'shirt' || category === 'hoodie' ? "w-[75%]" : "w-full"} lg:max-h-[281px]`}
                />
            </div>

            <div className="flex flex-col px-2 w-full">
                <div className="text-md xs:text-lg font-medium">
                    {productName} 
                </div>

                <div>
                    {category}
                </div>

                <div className="font-medium text-md xs:text-lg mt-3">
                    ₹ {price}
                </div>

                <div>
                    Qty {quantity}
                </div>

                <div className="mt-4 font-medium">
                    Order date : {orderDate}
                </div>
            </div>
        </div>
    );
};

export default Product2;