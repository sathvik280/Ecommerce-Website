import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product', 

    initialState: {
        products: {},
        isProductsFetched: false 
    }, 

    reducers: {
        setUpProducts: (state, action) => {
            const products = action.payload; 
            state.products = products;
            state.isProductsFetched = true;
        },

        addReview: (state, action) => {
            const allProducts = {...state.products};
            const { product, newReview } = action.payload; 
            const { 
                _id: id, 
                category, 
                reviews: prevReviews 
            } = product;

            const newReviews = [
                newReview, 
                ...prevReviews
            ];

            let ratings = 0; 
            let count = 0; 

            newReviews.forEach( (review) => {
                count++; 
                ratings += review.rating
            });

            const avgRating = (ratings / count).toFixed(1);

            const updatedProduct = {
                ...product, 
                avgRating, 
                reviews: newReviews 
            };

            const newCategoryProducts = [ ...state.products[category] ].map( (eachProduct) => {
                if (eachProduct._id === id)
                {
                    return updatedProduct;
                } 

                return eachProduct; 
            });

            allProducts[category] = newCategoryProducts;
            state.products = allProducts;
        },

        removeProducts: (state) => {
            state.products = {}; 
            state.isProductsFetched = false;
        }
    }
});

export const {
    setUpProducts, 
    addReview, 
    removeProducts
} = productSlice.actions;

export default productSlice.reducer;