import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth', 

    initialState: {
        user: {}, 
        token: '', 
        isConnectedToStripe: false
    }, 

    reducers: {
        setUpUser: (state, action) => {
            const user = action.payload;
            state.user = user;
        },

        setUpToken: (state, action) => {
            const token = action.payload;
            state.token = token;
        },

        updateOrderHistory: (state, action) => {
            const user = state.user;

            const newOrder = action.payload;
            const prevOrders = user.orderHistory;

            user.orderHistory = [...newOrder, ...prevOrders];
            state.user = user;
        },

        removeUser: (state) => {
            state.user = {};
        }, 

        removeToken: (state) => {
            state.token = '';
        }, 

        updateIsConnectedToStripe: (state, action) => {
            const status = action.payload;
            state.isConnectedToStripe = status;
        }
    }
});

export const {
    setUpUser, 
    setUpToken, 
    updateOrderHistory, 
    removeUser, 
    removeToken, 
    updateIsConnectedToStripe
} = authSlice.actions;

export default authSlice.reducer;