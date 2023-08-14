import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

import PrivateRoutes1 from './privateRoutes/privateRoutes1';
import PrivateRoutes2 from './privateRoutes/privateRoutes2';
import PrivateRoutes3 from './privateRoutes/privateRoutes3';

const App = (props) => {
    return (
        <div className="w-full min-h-screen">
            <Router>
                <ScrollToTop />

                <Routes>
                    <Route
                        path='/'
                        element={
                            <PrivateRoutes1>
                                <Login />
                            </PrivateRoutes1>
                        }
                    />

                    <Route
                        path='/register'
                        element={
                            <PrivateRoutes1>
                                <Register />
                            </PrivateRoutes1>
                        }
                    />

                    <Route 
                        path='/home' 
                        element={
                            <PrivateRoutes2>
                                <Home />
                            </PrivateRoutes2>
                        } 
                    />

                    <Route 
                        path='/shop' 
                        element={
                            <PrivateRoutes2>
                                <Shop />
                            </PrivateRoutes2>
                        } 
                    />

                    <Route 
                        path='/cart' 
                        element={
                            <PrivateRoutes2>
                                <Cart />
                            </PrivateRoutes2>
                        } 
                    />

                    <Route 
                        path='/product/:category/:id' 
                        element={
                            <PrivateRoutes3>
                                <ProductDetails />
                            </PrivateRoutes3>
                        } 
                    />

                    <Route 
                        path='/checkout' 
                        element={
                            <PrivateRoutes2>
                                <Checkout />
                            </PrivateRoutes2>
                        } 
                    />

                    <Route path='/notfound' element={ <NotFound /> } />
                    <Route path='*' element={ <Navigate to='/notfound' replace={true} /> } />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
};

export default App;