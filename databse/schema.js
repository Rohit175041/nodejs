const mongoose = require('mongoose');


// Creating Structure of the collection
const collection_structure = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    id: {
        type: String,
        default: 0
    }
})

// Creating collection
const collections = mongoose.model(
    "product", collection_structure)

module.exports = collections;