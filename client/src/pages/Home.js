import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Header1 from '../components/Header1';
import Banner from '../components/Banner';
import Service from '../components/Service';
import TrendingProducts from '../components/TrendingProducts';
import BestSales from '../components/BestSales';
import LimitedOffer from '../components/LimitedOffer';
import NewArrivals from '../components/NewArrivals';
import PopularProducts from '../components/PopularProducts';

import { setUpProducts } from '../features/slice/productSlice';

const Home = (props) => {
    const { token } = useSelector( (store) => store.auth);

    const dispatch = useDispatch();

    const fetchProducts = async (url) => {
        try 
        {
            const response = await axios.get(url, {
                headers: {
                    'authorization': token
                }
            });
            const data = await response.data;

            dispatch(setUpProducts(data));
        }

        catch (error)
        {
            console.log('Server error');
        }
    };

    useEffect( () => {
        fetchProducts('http://localhost:5000/product');
    }, []);

    return (
        <div className="w-full min-h-screen">
            <Header1 />
            <Banner />
            <Service />
            <TrendingProducts />
            <BestSales />
            <LimitedOffer />
            <NewArrivals />
            <PopularProducts />
        </div>
    );
};

export default Home;