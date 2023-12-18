const mongoose = require('mongoose');

const MenuItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    itemImage: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
