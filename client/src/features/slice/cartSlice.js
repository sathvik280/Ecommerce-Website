import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart', 

    initialState: {
        cartItems: [], 
        cartCount: 0, 
        cartTotal: 0 
    }, 

    reducers: {
        setUpCart: (state, action) => {
            const cartItems = action.payload;
            state.cartItems = cartItems;
        },

        updateCartDetails: (state) => {
            const cartItems = state.cartItems;

            let newCount = 0; 
            let newTotal = 0;

            cartItems.forEach( (item) => {
                newCount += item.quantity; 
                newTotal += item.quantity * item.price;
            });

            newTotal = newTotal.toFixed(2);

            state.cartCount = newCount; 
            state.cartTotal = newTotal;
        }, 

        addToCart: (state, action) => {
            const cartItems = state.cartItems;
            const {
                id,
                productName, 
                category, 
                imageUrl, 
                price
            } = action.payload; 

            const productExist = cartItems.find( (item) => {
                return item.id === id;
            });

            if (productExist)
            {
                const newCartItems = cartItems.map( (item) => {
                    if (item.id === id)
                    {
                        return {
                            ...item, 
                            quantity: item.quantity+1
                        };
                    }

                    return item;
                });

                state.cartItems = newCartItems;
            }

            else 
            {
                const newCartItems = [
                    ...cartItems, 
                    {
                        id, 
                        productName, 
                        category, 
                        imageUrl, 
                        price, 
                        quantity: 1 
                    }
                ];

                state.cartItems = newCartItems;
            }
        }, 

        deleteFromCart: (state, action) => {
            const cartItems = state.cartItems;
            const id = action.payload; 

            const newCartItems = cartItems.filter( (item) => {
                return item.id !== id;
            });

            state.cartItems = newCartItems;
        }, 

        increaseItem: (state, action) => {
            const cartItems = state.cartItems; 
            const id = action.payload; 

            const newCartItems = cartItems.map( (item) => {
                if (item.id === id)
                {
                    return {
                        ...item, 
                        quantity: item.quantity+1
                    };
                }

                return item; 
            });

            state.cartItems = newCartItems;
        }, 

        decreaseItem: (state, action) => {
            const cartItems = state.cartItems; 
            const id = action.payload; 

            const newCartItems = cartItems.map( (item) => {
                if (item.id === id)
                {
                    return {
                        ...item, 
                        quantity: item.quantity-1
                    };
                }

                return item; 
            });

            state.cartItems = newCartItems;
        }
    }
});

export const {
    setUpCart,
    updateCartDetails, 
    addToCart, 
    deleteFromCart, 
    increaseItem, 
    decreaseItem
} = cartSlice.actions;

export default cartSlice.reducer;