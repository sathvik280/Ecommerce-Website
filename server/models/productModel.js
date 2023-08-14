const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String, 
        required: true 
    },

    category: {
        type: String, 
        required: true 
    },

    imageUrl: {
        type: String, 
        required: true 
    },

    price: {
        type: Number, 
        required: true
    },

    reviews: {
        type: Array, 
        default: []
    },

    avgRating: {
        type: Number,
        default: 0
    },

    shortDesc: {
        type: String, 
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!'
    },

    description: {
        type: String, 
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!'
    }
}, {timestamps: true} );

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;