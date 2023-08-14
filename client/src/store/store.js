import { configureStore } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import authReducer from '../features/slice/authSlice';
import cartReducer from '../features/slice/cartSlice';
import productReducer from '../features/slice/productSlice';

const reducers = combineReducers({
    auth: authReducer, 
    cart: cartReducer, 
    product: productReducer 
});

const persistConfig = {
    key: 'root', 
    storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer, 
    middleware: [thunk]
});

export default store;