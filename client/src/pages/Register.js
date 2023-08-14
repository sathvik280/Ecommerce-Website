import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { ImSpinner8 } from 'react-icons/im';

import Header2 from '../components/Header2';

const Register = (props) => {
    let [name, setName] = useState('');
    let [location, setLocation] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('Enter your details');

    const navigate = useNavigate();

    const validateEmail = () => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com/;
        return email.match(validRegex);
    };

    const strongPassword = () => {
        return password.length >= 5;
    };

    const registerUser = async (url) => {
        try 
        {
            await axios.post(url, {
                name,
                location,
                email,
                password,
            });

            setMessage('Registered successfully');
            setTimeout( () => {
                navigate('/');
            }, 1500);
        }

        catch (error)
        {
            if (error.response === undefined)
            {
                setMessage('Server down, please try again');
                return;
            }

            const errMessage = error.response.data.message;

            if (errMessage.startsWith('E11000'))
            {
                setMessage('Email already registered');
                return;
            }

            setMessage('Error, please try again');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (message === '' || message === 'Registered successfully')
        {
            return;
        }

        if (
            name === '' ||
            location === '' ||
            email === '' ||
            password === ''
        )
        {
            setMessage('Some of the feilds are empty');
            return;
        }

        if (!validateEmail())
        {
            setMessage('Invalid email address');
            return;
        }

        if (!strongPassword())
        {
            setMessage('Choose strong password');
            return;
        }

        if (!navigator.onLine)
        {
            setMessage('Network connection lost');
            return;
        }

        setMessage('');
        registerUser('http://localhost:5000/register');
    };

    return (
        <div className="w-full min-h-screen bg-[#F6F6F6] relative pb-[25px]">
            <Header2 />

            <div 
                className="w-[90%] max-w-[500px] mx-auto bg-white mt-[25px] rounded-xl flex flex-col items-center py-6"
                style={ {boxShadow: "0px 0px 8px 0px lightgrey"} }
            >
                <div className="text-[17px] font-medium text-gray-600">
                    Register your account
                </div>

                <form className="mt-8 w-full flex flex-col gap-y-6 items-center">
                    <input 
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={ (event) => {
                            setName(event.target.value)
                        }}
                        spellCheck={false}
                        className="focus:outline-none border-[1px] p-[10px] w-[85%] border-gray-400 rounded-md text-[#666666] placeholder:text-[#858585]"
                    />

                    <input 
                        type="text"
                        placeholder='Location'
                        value={location}
                        onChange={ (event) => {
                            setLocation(event.target.value)
                        }}
                        spellCheck={false}
                        className="focus:outline-none border-[1px] p-[10px] w-[85%] border-gray-400 rounded-md text-[#666666] placeholder:text-[#858585]"
                    />

                    <input 
                        type="text"
                        placeholder='Email'
                        value={email}
                        onChange={ (event) => {
                            setEmail(event.target.value.trim())
                        }}
                        spellCheck={false}
                        className="focus:outline-none border-[1px] p-[10px] w-[85%] border-gray-400 rounded-md text-[#666666] placeholder:text-[#858585]"
                    />

                    <input 
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={ (event) => {
                            setPassword(event.target.value.trim());
                        }}
                        spellCheck={false}
                        className="focus:outline-none border-[1px] px-2 py-[10px] w-[85%] border-gray-400 rounded-md text-[#666666] placeholder:text-[#858585]"
                    />

                    <button
                        onClick={handleSubmit}
                        className="w-[85%] text-white bg-[#081934] py-3 rounded-md"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-6 text-gray-600 underline px-2 text-center">
                    <Link to='/'>
                        Already have an account? Login here
                    </Link>
                </div>
            </div>

            <div 
                className="w-[90%] max-w-[500px] mx-auto bg-white mt-[25px] mb-[50px] rounded-xl flex justify-center items-center py-6"
                style={ {boxShadow: "0px 0px 8px 0px lightgrey"} }
            >
                <div className="text-[18px] text-gray-600 px-2 text-center">
                    {
                        message === '' ? (
                            <ImSpinner8 className="animate-spin text-[27px] text-gray-500"/>
                        ) : (
                            message
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Register;