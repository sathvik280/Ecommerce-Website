const productModel = require('../models/productModel');
const uploadImage = require('../uploads/uploadImage');

const createProduct = async (req, res) => {
    try 
    {
        const {
            productName,
            category,
            image,
            price
        } = req.body;

        const response = await uploadImage(image, 'Products');
        const imageUrl = response.secure_url;

        const product = await productModel.create({
            productName,
            category, 
            imageUrl, 
            price 
        });

        res.status(201).json(product);
    }

    catch (error)
    {
        res.status(500).json( {message: error.message} );
    }
};

const getAllProducts = async (req, res) => {
    try 
    {
        const allProducts = await productModel.find( {} );
        const productsData = {};

        allProducts.forEach( (product) => {
            const { category } = product;

            if (!productsData[category])
            {
                productsData[category] = [product];
            }

            else 
            {
                productsData[category].push(product);
            }
        });

        res.status(200).json(productsData);
    }

    catch (error)
    {
        res.status(500).json( {message: error.message} );
    }
};

const updateReviews = async (req, res) => {
    try 
    {
        const {
            productId, 
            newReview 
        } = req.body; 

        const product = await productModel.findOne( {_id: productId} );

        if (!product)
        {
            res.status(404).json( {message: 'Product not found'} );
            return;
        }

        const prevReviews = [...product.reviews];

        let ratings = 0;
        let count = 0;

        prevReviews.forEach( (review) => {
            ratings += review.rating;
            count++;
        });

        const avgRating = ( (ratings + newReview.rating) / (count+1) ).toFixed(1);

        product.reviews = [newReview, ...prevReviews];
        product.avgRating = avgRating;

        await product.save();

        res.status(200).json( {message: 'Reviews updated successfully'} );
    }

    catch (error)
    {
        res.status(500).json( {message: error.message} );
    }
};

module.exports = { createProduct, getAllProducts, updateReviews };