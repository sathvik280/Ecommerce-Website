import React from 'react';
import { useSelector } from 'react-redux';

import Product2 from './Product2';

const OrderHistory = (props) => {
    const { user } = useSelector( (store) => store.auth );

    return (
        <div className="flex flex-col gap-y-12 mt-5 mb-1">
            <div className="text-2xl xs:text-[28px] lg:text-3xl text-center">
                Your recent orders
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:max-w-[700px] xl:max-w-[1024px] mx-auto">
                {
                    user.orderHistory.map( (item) => {
                        return (
                            <div key={item.id + item.orderDate}>
                                <Product2 item={item} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default OrderHistory;