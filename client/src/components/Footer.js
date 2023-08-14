import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = (props) => {
    const { pathname } = useLocation();

    if (pathname === '/' || pathname === '/register' || pathname === '/notfound')
    {
        return (
            <div className="w-full py-8 px-5 text-center lg:text-lg bg-[#07162e] text-white">
                All rights reserved. Multimart 2023
            </div>
        );
    }

    return (
        <div className="w-full bg-[#07162e]">
            <div className="max-w-[1024px] mx-auto py-8 px-6 lg:px-10 xl:px-12 flex flex-col">
                <div className="flex flex-col items-start gap-y-8 xl:flex-row xl:justify-between pt-4">
                    <div className="flex flex-col items-start gap-y-4 text-white">
                        <div className="font-medium text-lg">
                            Top Categories
                        </div>

                        <div className="flex flex-col items-start gap-y-2 text-gray-300">
                            <div>
                                Phones
                            </div>

                            <div>
                                Sofa
                            </div>

                            <div>
                                Headphones
                            </div>

                            <div>
                                Watches
                            </div>

                            <div>
                                shirts
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-y-4 text-white">
                        <div className="font-medium text-lg">
                            Useful Links
                        </div>

                        <div className="flex flex-col items-start gap-y-2 text-gray-300">
                            <Link to='/home'>
                                Home
                            </Link>

                            <Link to='/shop'>
                                Shop
                            </Link>

                            <Link to='/cart'>
                                Cart
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-y-4 text-white">
                        <div className="font-medium text-lg">
                            Contact
                        </div>

                        <div className="flex flex-col items-start gap-y-3 text-gray-300">
                            <div className="flex flex-row items-center gap-x-3">
                                <div className="text-white">
                                    <FiMapPin />
                                </div>

                                <div>
                                    Hyderabad, India
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-x-3">
                                <div className="text-white">
                                    <FiPhone />
                                </div>

                                <div>
                                    +918179282971
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-x-3">
                                <div className="text-white">
                                    <FiMail />
                                </div>

                                <div>
                                    sahisathvik123@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:text-lg text-white text-center mt-14">
                    All rights reserved. Multimart 2023
                </div>
            </div>
        </div>
    );
};

export default Footer;